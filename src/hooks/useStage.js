import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";
import { clear } from "@testing-library/user-event/dist/clear";

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        const updateStage = prevStage => {
            // clear stage
            const newStage = prevStage.map(row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            );

            //draw tetramino
            player.tetramino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`
                        ]
                    }
                })
            });

            return newStage;
        };

        setStage(prev => updateStage(prev))
    }, [player])

    return [stage, setStage];
}