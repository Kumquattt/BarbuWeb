import { Injectable } from '@angular/core';
import { Game } from '../Barbu/src/app/interfaces/game';
import { Player } from '../Barbu/src/app/interfaces/player';
import { LogsService } from '../Barbu/src/app/services/logs.service';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  players: [Player] = [{id: 0, name: '', totalScore: 0, scores: [0]}]
  games: [Game] = [{playerId: 0, playerName: "", id: 1, type: ' '}] //commencer les id à 0 !


  sumScore(playerId: number): number {
    const allScores: number[] = this.players[playerId].scores
    const total: number = allScores.reduce((a,b) => a + b)
    //this.logStatus()
    return total
  }

  isLastGame(gameId: number): boolean {
    return gameId == this.games[this.games.length - 1].id
  }

  addGame(gameType: string = " "): void {
    const lastGameId: number = this.games[this.games.length - 1].id
    const lastGamePlayer: Game = this.games[this.games.length - 1] // à implémenter

    this.games.push({playerId: lastGamePlayer.playerId, playerName: lastGamePlayer.playerName, id: lastGameId+1, type: gameType})
    this.players.forEach(p => p.scores.push(0))
    this.logStatus()
  }

  isLastPlayer(playerId: number): boolean {
    return playerId == this.players[this.players.length - 1].id
  }

  addPlayer(turnCount: number) : void {
    this.players.push(
      {id: this.players[this.players.length - 1].id + 1, 
        name: '', 
        totalScore: 0, 
        scores: Array(turnCount).fill(0)}
    )
  }

  setPlayerNextGame(playerId : number) {
    this.games[this.games.length- 1].playerId = playerId
    this.logStatus()
  }


  public logStatus() : void {
    this.logService.add("Turn : " + this.games[this.games.length - 1].id)
    this.logService.add("Players : " + JSON.stringify(this.players))
    this.logService.add("Games : " + JSON.stringify(this.games))
  }

  
  public getPlayers() : Player[] { return this.players}
  public getGames() : Game[] { return this.games}
  public getCurrentGame() : Game { return this.games[this.games.length < 2 ? 0 : this.games.length - 2]}
  // public.getCurrentPlayer() : Player { return } // TODO

  constructor(
    private logService: LogsService
  ) { }
}
