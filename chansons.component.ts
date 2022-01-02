import { Component, OnInit } from '@angular/core';
import{ Chanson }from '../model/chanson.model';
import { AuthService } from '../services/auth.service';
import { ChansonService } from '../services/chanson.service';
@Component({
  selector: 'app-chansons',
  templateUrl: './chansons.component.html',
  
})
export class ChansonsComponent implements OnInit {

  chansons : Chanson[];
  constructor(private chansonService: ChansonService,
    public authService: AuthService)
     { this.chansons = chansonService.listeChanson();
   
  }

  ngOnInit(): void {
  }
  supprimerChanson(chans :Chanson){
    //console.log(chans);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
       this.chansonService.supprimerChanson(chans);
  }

}
