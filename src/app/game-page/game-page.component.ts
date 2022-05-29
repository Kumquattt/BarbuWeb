import { Component, OnInit } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { GAMES_NAMES } from '../const/GAMES_CONST';
import { Game } from '../interfaces/game';
import { GameType } from '../interfaces/gameType';
import { Player } from '../interfaces/player';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {

  GAMES_NAMES = GAMES_NAMES
  players: Player[] = []
  games: Game[] = []

  constructor() {}

  ngOnInit(): void {
    this.addNewPlayer(this.players)
    this.addNewGame(this.games)
  }
  
  addNewPlayer(players: Player[]) : void {
    const lastId : number = players.length > 0 ? players[players.length - 1].id : 0
    players.push(new Player(lastId + 1));
  }

  addNewGame(games: Game[]) : void {
    const lastId : number = games.length > 0 ? games[games.length - 1].index : 0
    games.push(new Game(lastId + 1, 0, new GameType('NONE')))
  }

  updateGameType(index: number, type: string, games: Game[]) : void {
    games[index].type = new GameType(type)
    games[index].scores.clear //check if working
  }

  updateScore(player: Player, game: Game, score: number) : void {
    game.scores.set(player.id, game.getScore(score)) // nec check ifPresent ?
  }

  removePlayer(player: Player, players: Player[]) : void {
    console.log("to implement)")
  }

  ngOnChange(): void {}

}
