import { GAMES_NAMES } from "../const/GAMES_CONST";
import { Game } from "./game";
import { Player } from "./player";

export class GameType {

    name: string
    number: number = 0 // de trucs pris ? TODO trouver un meilleur nom
    possibleNumbers: number[] = []
    //score: number = 0

  constructor(name: string) {
    this.name = name
    this.possibleNumbers = this.getPossibleNumbers()
  }

  // TODO : replace the switches !! > surcharge
  getPossibleNumbers(): number[] {
    if (typeof this.name != "undefined" && this.name != "NONE"){
      console.log("getPossibleNumbers for " + this.name)
      switch(this.name) {
        case "Barbu" :  return [0,1];
        case "Dame" :  return [0,1,2,3,4]
        case "Pli" :  return Array.from(Array(20).keys())
        case "Coeur" :  return Array.from(Array(13).keys())//(0, 13)
        case "Réussite" : return [0,1,2]
        default: console.log("error !"); return [0]
      } 
    }
    return []
  }

  getScore(): number {
    switch(this.name) {
      case "Barbu" :  return this.number > 0 ? -40 : 0
      case "Dame" :  return this.number * -20
      case "Pli" :  return this.number * -10
      case "Coeur" :  return this.number * -10
      case "Réussite" : return this.number > 0 ? 100 / this.number : 0 
      default: return 0
    } 
  }


}

// export class GameBarbu extends Gamename {
//     constructor(name: GAMES_NAMES, number: number) { super(name, number)}
    
//     override getScore(): number {
//         return this.number > 0 ? -40 : 0
//     }

// }