import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonneesJsonService {
  constructor(private http: HttpClient) {}

  async chargerFichier(nomFichier: string): Promise<any[]> {
    // Vérifier si déjà en localStorage
    const data = localStorage.getItem(nomFichier);
    if (data) {
      return JSON.parse(data);
    }

    // Sinon charger depuis assets et initialiser localStorage
    const fichier = await firstValueFrom(this.http.get<any[]>(`assets/donnees/${nomFichier}`));
    localStorage.setItem(nomFichier, JSON.stringify(fichier));
    return fichier;
  }

  async sauvegarderFichier(nomFichier: string, donnees: any[]): Promise<void> {
    localStorage.setItem(nomFichier, JSON.stringify(donnees));
  }
}
