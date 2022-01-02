import { Chanson } from './../model/chanson.model';
import { Manager } from './../model/manager';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChansonService {

  chansons :Chanson[];
  managers:Manager[];

  manager=new Manager();

  constructor() {
    this.managers = [ {idMan : 1, nomMan : "Jonathan Dickins"},
                      {idMan : 2, nomMan : "Jim Beach"},
                      {idMan : 3, nomMan : "Stuart Camp"}];
    this.chansons = [
      {idChanson : 1, nomChanson : "Someone like you", nomChanteur : "Adele", datePublication : new Date("02/15/2011"), manager:{idMan:1,nomMan:"Jonathan Dickins"}},
      {idChanson : 2, nomChanson : "Bohemian Rhapsody", nomChanteur : "Queen", datePublication : new Date("10/31/1975"), manager:{idMan:2,nomMan:"Jim Beach"}},
      {idChanson : 3, nomChanson :"Perfect", nomChanteur : "Ed Sheeran", datePublication : new Date("11/24/2017"), manager:{idMan:3,nomMan:"Stuart Camp"}}
      ];
   }

   listeChanson():Chanson[]{
     return this.chansons;
   }
   ajouterChanson(chanson: Chanson){
     this.chansons.push(chanson);
   }

   supprimerChanson( chans: Chanson){
    //supprimer la chans du tableau chansons
    const index = this.chansons.indexOf(chans, 0);
    if (index > -1) {
    this.chansons.splice(index, 1);
    }
    }

    consulterChanson(id:number): Chanson{
      return this.chansons.find(p => p.idChanson == id);
      
      }
      trierChansons(){
        this.chansons = this.chansons.sort((n1,n2) => {
        if (n1.idChanson > n2.idChanson) {
        return 1;
        }
        if (n1.idChanson < n2.idChanson) {
        return -1;
        }
        return 0;
        });
        }
    updateChanson(c:Chanson)
    {
      this.supprimerChanson(c);
      this.ajouterChanson(c);
      this.trierChansons();
    }
    listeManagers():Manager[] {
      return this.managers;
      }
      
      consulterManager(id:number): Manager{
      this.manager = this.managers.find(man => man.idMan == id);
      return this.manager;
      }
}