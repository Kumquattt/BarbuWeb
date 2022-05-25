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
  players: Player[] = [];
  columns: GAMES_NAMES[] = [];

  constructor() {}

  ngOnInit(): void {
    this.players.push(
      new Player(0, 'AAAA', 0, [
        new Game(0, 0, new GameType(GAMES_NAMES.NONE, 0)),
      ])
    );
    this.columns.push(GAMES_NAMES.NONE);
  }

  ngOnChange(): void {}
}
