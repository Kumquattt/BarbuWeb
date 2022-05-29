export class GameType {

    name: string


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

  getScore(number: number): number {
    switch(this.name) {
      case "Barbu" :  return number > 0 ? -40 : 0
      case "Dame" :  return number * -20
      case "Pli" :  return number * -10
      case "Coeur" :  return number * -10
      case "Réussite" : return number > 0 ? 100 / number : 0 
      default: console.log("error !"); return 0
    } 
  }


  constructor(name: string) {
    this.name = name
  }
}

// export class GameBarbu extends Gamename {
//     constructor(name: GAMES_NAMES, number: number) { super(name, number)}
//     override getScore(): number {
//         return this.number > 0 ? -40 : 0
//     }
// }