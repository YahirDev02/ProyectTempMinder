import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/compat/database'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  bpmData: any[] = [];

  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  constructor(private db: AngularFireDatabase) {
    this.itemRef = db.object('brazalete');
    this.item = this.itemRef.valueChanges();
  }

  updateBPM(e: any){
    if(e.detail.checked){
      this.itemRef.update({ bpm: 'Latidos' })
    } else {
      this.itemRef.update({ bpm: 'Sin latidos' })
    }
  }


  ngOnInit() {
    this.item.subscribe((res) => {
      console.log(res)
    })
  }

}
