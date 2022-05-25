import { Component, OnInit } from '@angular/core';
import { GAMES_NAMES } from '../../Barbu/src/app/const/GAMES_CONST';
import { Game } from '../../Barbu/src/app/interfaces/game';
import { StatusService } from '../status.service';

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
