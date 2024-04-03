import { useState } from "react";

export default function Card() {
    const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
    const [card, setValueOfCard] = useState("Card");
    function randomize() {
        const rank = (ranks[Math.floor(Math.random()*13)]);
        const suit = (suits[Math.floor(Math.random()*4)]);
        setValueOfCard(rank + " of " + suit);
    }
    return (
        <h2 style={{ padding: "1rem",
                     display: "flex", flexDirection: "column", gap: "12px", alignItems: "center",
                     border: "solid black", borderRadius: "10px"
        }}>
            {card}
            <button onClick={randomize}>Nah.</button>
        </h2>
    )
  }