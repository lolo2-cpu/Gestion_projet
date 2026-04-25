import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { TacheService } from 'src/app/coeur/services/tache.service';

@Component({
  selector: 'app-detail-tache',
  templateUrl: './detail-tache.page.html',
  styleUrls: ['./detail-tache.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    CommonModule,
    FormsModule,
  ],
})
export class DetailTachePage implements OnInit {

  tache: any;

  constructor(
    private route: ActivatedRoute,
    private tacheService: TacheService
  ) { }

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    await this.tacheService.chargerTaches();
    this.tache = this.tacheService.getTacheById(id);
  }
}
