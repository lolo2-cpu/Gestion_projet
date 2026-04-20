import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-creation-tache',
  templateUrl: './creation-tache.page.html',
  styleUrls: ['./creation-tache.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CreationTachePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
