import { Manager } from './../model/manager';
import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { ChansonService } from '../services/chanson.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-chansons',
  templateUrl: './add-chanson.component.html',
 
})
export class AddChansonComponent implements OnInit {

  newChanson = new Chanson();
  message:string;
  managers : Manager[];
  newIdMan : number;
  newManager : Manager;
  
  constructor(private chansonService : ChansonService,private router:Router) { }

  ngOnInit() {
    this.managers = this.chansonService.listeManagers();  
  }
  addChanson(){
    this.newManager = this.chansonService.consulterManager(this.newIdMan);
    this.newChanson.manager=this.newManager;
    this.chansonService.ajouterChanson(this.newChanson);
    this.router.navigate(["chansons"]);
    }

}
