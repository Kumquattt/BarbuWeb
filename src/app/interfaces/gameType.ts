import { GAMES_NAMES } from "../const/GAMES_CONST";
import { Game } from "./game";
import { Player } from "./player";

export class GameType {

    type: GAMES_NAMES
    number: number = 0 // de trucs pris ? TODO trouver un meilleur nom
    score: number = 0

  constructor(type: GAMES_NAMES, number: number) {
    this.type = type
    this.number = number

    switch(this.type) {
        case "Barbu" :  this.score = this.number > 0 ? -40 : 0; break;
        case "Dame" :  this.score = this.number * -20; break;
        case "Pli" :  this.score = this.number * -10; break;
        case "Coeur" :  this.score = this.number * -10; break;
        case "Réussite" : this.score = this.number > 0 ? 100 / this.number : 0 ; break;
        default: 0
    } 
  }

    
}

// export class GameBarbu extends GameType {
//     constructor(type: GAMES_NAMES, number: number) { super(type, number)}
    
//     override getScore(): number {
//         return this.number > 0 ? -40 : 0
//     }

// }