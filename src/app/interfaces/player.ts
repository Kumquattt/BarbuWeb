import { Game } from './game';

/**
 * TODO : remplacer par un game-base archi instead of player-based
 */
export class Player {
  id: number;
  name: string;
  games: Game[];
  //totalScore: number = this.calcTotalScore();

  getTotalScore(): number {
    return this.games
      .map((g) => g.type.name != "NONE" ? g.type.getScore() : 0)
      .reduce((sum, current) => sum + current);
  }

  
  isLast(players: Player[]): boolean {
    return this.id == players[players.length - 1].id
  }

  constructor(id: number, name: string, games: Game[]) {
    this.id = id;
    this.name = name;
    // this.totalScore = totalScore;
    this.games = games;
  }
}
