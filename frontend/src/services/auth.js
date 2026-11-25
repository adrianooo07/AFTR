
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
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const text = await response.text();

    console.log("Backend válaszkód:", response.status);
    console.log("Backend válasz:", text);

    const data = JSON.parse(text);

    if (!response.ok) {
        throw new Error(data.message || "Hiba történt a bejelentkezés során!");
    }

    return data;
};
