import { Component, OnInit } from '@angular/core';
import { ScoreTable } from '../interfaces/score-table';
import { GAMES_ID } from '../const/games';
import { LogsService } from '../services/logs.service';
import { Player } from '../interfaces/player';
import { Game } from '../interfaces/game';
import { StatusService } from '../services/status.service';

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
