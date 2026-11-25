import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Minden mező kitöltése kötelező!"
            });
        }

        if (name.trim().length < 2) {
            return res.status(400).json({
                message: "A név legalább 2 karakter legyen!"
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(normalizedEmail)) {
            return res.status(400).json({
                message: "Érvénytelen e-mail-cím!"
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                message: "A jelszónak legalább 8 karakteresnek kell lennie!"
            });
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                email: normalizedEmail
            }
        });

        if (existingUser) {
            return res.status(409).json({
                message: "Ezzel az e-mail-címmel már létezik fiók!"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name: name.trim(),
                email: normalizedEmail,
                password: hashedPassword
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true
            }
        });

        return res.status(201).json({
            message: "Sikeres regisztráció!",
            user
        });

    } catch (error) {
        console.error("Regisztrációs hiba:", error);

        if (error.code === "P2002") {
            return res.status(409).json({
                message: "Ezzel az e-mail-címmel már létezik fiók!"
            });
        }

        return res.status(500).json({
            message: "Szerverhiba történt a regisztráció során."
        });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Az e-mail-cím és a jelszó megadása kötelező!"
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const user = await prisma.user.findUnique({
            where: {
                email: normalizedEmail
            }
        });

        if (!user) {
            return res.status(401).json({
                message: "Hibás e-mail-cím vagy jelszó!"
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Hibás e-mail-cím vagy jelszó!"
            });
        }

        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        return res.status(200).json({
            message: "Sikeres bejelentkezés!",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Bejelentkezési hiba:", error);

        return res.status(500).json({
            message: "Szerverhiba történt a bejelentkezés során."
        });
    }
};
