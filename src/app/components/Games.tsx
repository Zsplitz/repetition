'use client'
import React, { useState } from 'react'

function Games() {
    const [value, setValue] = useState("");
    const [games, setGames] = useState([]);
    const [error, setError] = useState("");

    // A simple list of valid games (expand as needed)
    const validGames = [
        "Minecraft", "Fortnite", "Valorant", "Overwatch",
        "League of Legends", "Dota 2", "CS:GO", "GTA V",
        "Roblox", "Elden Ring", "The Witcher 3", "Stardew Valley"
    ];

    function handleChange(e) {
        setValue(e.target.value);
        setError(""); // clear error when typing
    }

    function handleSave() {
        if (value.trim() === "") return;

        // Case-insensitive check if it's a valid game
        const isValid = validGames.some(
            (game) => game.toLowerCase() === value.trim().toLowerCase()
        );

        if (!isValid) {
            setError("❌ That is not a recognized game.");
            return;
        }

        const updatedGames = [...games, value.trim()]
            .sort((a, b) => a.localeCompare(b));

        setGames(updatedGames);
        setValue(""); // clear input after save
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSave();
        }
    }

    return (
        <div>
            <h1>Games</h1>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter a game name"
            />
            <button onClick={handleSave}>Save</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <h2>Saved Games:</h2>
            <ul>
                {games.map((game, index) => (
                    <li key={index}>{game}</li>
                ))}
            </ul>
        </div>
    );
}

export default Games
