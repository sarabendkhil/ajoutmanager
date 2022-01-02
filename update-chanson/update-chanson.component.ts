import { Manager } from './../model/manager';
import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ChansonService } from '../services/chanson.service';
@Component({
  selector: 'app-update-chanson',
  templateUrl: './update-chanson.component.html',
  styles: [
  ]
})
export class UpdateChansonComponent implements OnInit {
  currentChanson = new Chanson();
  managers:Manager[];
  updatedManager:Manager;

  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,
    private chansonService: ChansonService) { }

  ngOnInit(): void {
    this.managers=this.chansonService.listeManagers();
    this.currentChanson = this.chansonService.consulterChanson(this.activatedRoute.snapshot.params.id);
    console.log(this.currentChanson);
  }
  updateChanson(){
    this.updatedManager = this.chansonService.consulterManager(this.currentChanson.manager.idMan);
    this.currentChanson.manager = this.updatedManager;
    this.chansonService.updateChanson(this.currentChanson);
    this.router.navigate(["chansons"]);
  }

}
