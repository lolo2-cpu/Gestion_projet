import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem , IonMenu, IonList} from '@ionic/angular/standalone';
@Component({
  selector: 'app-barre-laterale',
  templateUrl: './barre-laterale.component.html',
  styleUrls: ['./barre-laterale.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, CommonModule, IonMenu, IonList]
})
export class BarreLateraleComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
