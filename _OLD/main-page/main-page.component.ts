import { Component, OnInit } from '@angular/core';
import { ScoreTable } from '../../Barbu/src/app/interfaces/score-table';
import { GAMES_ID } from '../../Barbu/src/app/const/GAMES_CONST';
import { LogsService } from '../../Barbu/src/app/services/logs.service';
import { Player } from '../../Barbu/src/app/interfaces/player';
import { Game } from '../../Barbu/src/app/interfaces/game';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  GAMES_ID: string[] = GAMES_ID

  //selectedValue!: number
  dropdownChange(gameId: number, selectedValue: string): void {
    const lastGameId : number = this.statusService.games[this.statusService.games.length - 1].id
    this.statusService.games[gameId-1].type = selectedValue
    if (this.statusService.isLastGame(gameId)) {
      this.statusService.addGame()
    }
  }

  radioChange(playerId : number) {
    this.statusService.setPlayerNextGame(playerId)
  }

  playerNameInputChange(player: Player): void {
    if (this.statusService.isLastPlayer(player.id)){
      this.statusService.addPlayer(player.scores.length)
    }
  }

  constructor(  
    private logsService: LogsService,
    public statusService: StatusService
  ) { }

  ngOnInit(): void {  }

}
