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

  //GAMES_NAMES: GAMES_NAMES[] = Object.values(GAMES_NAMES);
  GAMES_NAMES = GAMES_NAMES
  players: Player[] = []
  selected = ""

  constructor() {}

  ngOnInit(): void {
    this.addNewPlayer(this.players)
    console.log(JSON.stringify(this.players))
    //this.games.push(new Game(0, 0, new GameType(GAMES_NAMES.NONE, 0)));
  }

  // playerInputChange(player : Player) : void {
  //   if (player.isLast(this.players)) {
  //     this.addNewPlayer(this.players)
  //   }
  // }


  updateGameType(index: number, players: Player[]) : void {
    console.log("selected = " + this.selected + " , i=" + index)
    players.forEach(p => p.games[index].type = new GameType(p.games[index].selected))
    if (players[0].games[index].isLast(players[0].games)) {
      this.addNewGame(index, players)
    }
  }
  
  addNewPlayer(players: Player[]) : void {
    const lastId : number = players.length > 0 ? players[players.length - 1].id : 0
    players.push(
      new Player(lastId + 1, '', [
        new Game(0, 0, new GameType("NONE")),
      ])
    );
  }

  addNewGame(index: number, players: Player[]) : void {
    players.forEach(p => p.games.push(new Game(index + 1, 0, new GameType("NONE"))))
  }

  removePlayer(player: Player, players: Player[]) : void {
    console.log("to implement)")
  }

  ngOnChange(): void {}
}
