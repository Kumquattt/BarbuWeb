import { GameType } from "./gameType"
import { Player } from "./player"

export class Game {
    index: number
    decider: number //Player
    type: GameType

    selected: string = "" //temp


    // playerId: number, //id of the player choosing games
    // playerName: string,
    // type: string

    isLast(games: Game[]): boolean {
      return this.index == games[games.length - 1].index
    }


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
