import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/compat/database'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  itemRefStatus: AngularFireObject<any>;
  itemEstatus: Observable<any>;
  constructor(private db: AngularFireDatabase) {
    this.itemRef = db.object('sensor');
    this.item = this.itemRef.valueChanges();

    this.itemRefStatus = db.object('estado');
    this.itemEstatus = this.itemRefStatus.valueChanges();
  }

  /*updateBPM(e: any){
    if(e.detail.checked){
      this.itemRef.update({ bpm: 'Latidos' })
    } else {
      this.itemRef.update({ bpm: 'Sin latidos' })
    }
  }*/


  ngOnInit() {
    this.item.subscribe((res) => {
      console.log(res)
    })
  }

}
