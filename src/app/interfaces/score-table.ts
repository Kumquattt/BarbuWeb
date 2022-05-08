import { Game } from "./game";
import { Player } from "./player";

export interface ScoreTable {

    players: Player[],
    games: Game[], // ex: [{turn: 'b', id: 1, game: 'D', scores: [20, 0, 40]}]
    
}
