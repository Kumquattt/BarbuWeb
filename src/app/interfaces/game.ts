import { GameType } from "./gameType"

export class Game {
    index: number
    decider: number //Player index
    type: GameType
    scores: Map<number, number> = new Map //playerIndex, score

    getScore(number: number) {
      return this.type.getScore(number)
    }

    isLast(games: Game[]): boolean {
      return this.index == games[games.length - 1].index
    }


  constructor(
    index: number, 
    decider: number,
    type: GameType
) {
    this.index = index
    this.decider = decider
    this.type = type
  }


}
