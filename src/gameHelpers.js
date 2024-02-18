export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const checkCollison = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetramoino.length; y += 1) {
        for (let x = 0; x < player.tetramino[y].length; x += 1) {
            // check if on tetramino cell
            if (player.tetramino[y][x] !== 0) {
                if (
                    // chck that the move is inside game area height (y)
                    // shouldnt move outtside botom of stage
                    !stage[y + player.pos.y + moveY] ||
                    // check that move is inside game width x
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX];
        ) {
    return true;
}
    }

    }
}
}