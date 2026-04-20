import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-creation-ressource',
  templateUrl: './creation-ressource.page.html',
  styleUrls: ['./creation-ressource.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CreationRessourcePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
