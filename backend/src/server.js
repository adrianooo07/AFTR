import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "fut az api!"
    });
});

app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "fut a program kirajjjjjj"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`[ 🚀 ] A backend szerver elindult a kovetkezo cimen: http://localhost:${PORT} [ ✅ ]`);
});
