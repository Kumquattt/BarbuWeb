import { GameType } from "./gameType"
import { Player } from "./player"

export class Game {
    index: number
    decider: number //Player
    type: GameType



    // playerId: number, //id of the player choosing games
    // playerName: string,
    // type: string


  constructor(
    index: number, 
    decider: number, //Player, 
    type: GameType
) {
    this.index = index
    this.decider = decider
    this.type = type
  }


}
