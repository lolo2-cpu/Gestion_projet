import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from 'src/app/coeur/services/projet.service';
import { sharedImports } from '../../share.imports';

@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.page.html',
  styleUrls: ['./detail-projet.page.scss'],
  standalone: true,
  imports: sharedImports,
})
export class DetailProjetPage implements OnInit {

  projet: any;

  constructor(
    private route: ActivatedRoute,
    private projetService: ProjetService
  ) { }

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    await this.projetService.chargerProjets();
    this.projet = this.projetService.getProjetById(id);
  }
}
