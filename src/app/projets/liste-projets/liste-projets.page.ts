import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/coeur/services/projet.service';
import { sharedImports } from '../../share.imports';

@Component({
  selector: 'app-liste-projets',
  templateUrl: './liste-projets.page.html',
  styleUrls: ['./liste-projets.page.scss'],
  standalone: true,
  imports: sharedImports
})
export class ListeProjetsPage implements OnInit {
  projets: any[] = [];

  constructor(private projetService: ProjetService) {}

  async ngOnInit() {
    await this.projetService.chargerProjets();
    this.projets = this.projetService.getProjets();
  }

  supprimer(id: number) {
    this.projetService.supprimerProjet(id);
    this.projets = this.projetService.getProjets();
  }
}
