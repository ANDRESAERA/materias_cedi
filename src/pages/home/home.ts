import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { CienciasPage } from '../ciencias/ciencias';
import { PappsPage } from '../papps/papps';
import { RobPage } from '../rob/rob';
import { PyePage } from '../pye/pye';
import { ComPage } from '../com/com';
import { MiPage } from '../mi/mi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  dibujo = DibujoPage;
  ciencias = CienciasPage;
  papps = PappsPage;
  rob = RobPage;
  pye = PyePage;
  com = ComPage;
  mi = MiPage;

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
  clickpapps(){
    this.navCtrl.push(this.papps);
  }
  clickrob(){
    this.navCtrl.push(this.rob);
  }
  clickpye(){
    this.navCtrl.push(this.pye);
  }
  clickcom(){
    this.navCtrl.push(this.com);
  }
  clickmi(){
    this.navCtrl.push(this.mi);
  }

}
