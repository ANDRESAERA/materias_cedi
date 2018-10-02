import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { CienciasPage } from '../ciencias/ciencias';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  dibujo = DibujoPage;
  ciencias = CienciasPage;

  constructor(public navCtrl: NavController) {

  }
  clickhistoria(){
    this.navCtrl.push(this.historia);
  }
  clickdibujo(){
    this.navCtrl.push(this.dibujo);
  }
  clickciencias(){
    this.navCtrl.push(this.ciencias);
  }

}
