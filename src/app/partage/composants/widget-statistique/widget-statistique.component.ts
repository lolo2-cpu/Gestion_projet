import { Component, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
@Component({
  selector: 'app-widget-statistique',
  templateUrl: './widget-statistique.component.html',
  styleUrls: ['./widget-statistique.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class WidgetStatistiqueComponent {
  @Input() titre!: string;
  @Input() valeur!: string;
}
