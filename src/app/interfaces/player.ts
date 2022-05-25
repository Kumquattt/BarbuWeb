import { Game } from './game';

export class Player {
  id: number;
  name: string;
  games: Game[];
  totalScore: number = this.calcTotalScore();

  calcTotalScore(): number {
    return this.games
      .map((g) => g.type.score)
      .reduce((sum, current) => sum + current);
  }

  constructor(id: number, name: string, totalScore: number, games: Game[]) {
    this.id = id;
    this.name = name;
    this.totalScore = totalScore;
    this.games = games;
  }
}
