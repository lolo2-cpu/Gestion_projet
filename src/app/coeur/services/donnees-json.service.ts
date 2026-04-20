import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonneesJsonService {

  constructor(private http: HttpClient) {}

  async chargerFichier(nomFichier: string): Promise<any> {
    return await firstValueFrom(
      this.http.get(`assets/donnees/${nomFichier}`)
    );
  }
}
