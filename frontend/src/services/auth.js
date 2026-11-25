
const API_URL = "http://localhost:3000/api";

export const registerUser = async (userData) => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Hiba történt a regisztráció során!");
    }

    return data;
};

export const loginUser = async (userData) => {
    const url = `${API_URL}/auth/login`;

    console.log("Login URL:", url);
    console.log("Küldött adatok:", userData);

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    console.log("HTTP státusz:", response.status);

    const text = await response.text();

    console.log("Szerver válasza:", text);

    let data;

    try {
        data = JSON.parse(text);
    } catch {
        throw new Error("A szerver nem JSON választ küldött: " + response.status);
    }

    if (!response.ok) {
        throw new Error(data.message || "Hiba történt a bejelentkezés során!");
    }

    if (!data.token) {
        throw new Error("A szerver nem küldött bejelentkezési tokent!");
    }

    return data;
};
