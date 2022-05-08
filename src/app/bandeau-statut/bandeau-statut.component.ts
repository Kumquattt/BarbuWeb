import { Component, OnInit } from '@angular/core';
import { GAMES_NAMES } from '../const/games';
import { Game } from '../interfaces/game';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-bandeau-statut',
  templateUrl: './bandeau-statut.component.html',
  styleUrls: ['./bandeau-statut.component.scss']
})
export class BandeauStatutComponent implements OnInit {

  //vartest : string = this.statusService.getCurrentGame().type
  
  //currentGameName: string = GAMES_NAMES[this.statusService.getCurrentGame().type]



  constructor(
    public statusService: StatusService
  ) { }

  ngOnInit(): void {
  }

}
