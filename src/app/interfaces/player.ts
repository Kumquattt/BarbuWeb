import { Game } from './game';

/**
 * TODO : remplacer par un game-base archi instead of player-based
 */
export class Player {
  id: number
  name: string = ''
  games: number[] = [] //games IDs

  getTotalScore(games: Game[]): number {
    return games.map(g => g.scores.get(this.id) || 0)
      .reduce((sum, current) => sum + current);
  }
  
  isLast(players: Player[]): boolean {
    return this.id == players[players.length - 1].id
  }

  constructor(id: number) {
    this.id = id;
  }
}
