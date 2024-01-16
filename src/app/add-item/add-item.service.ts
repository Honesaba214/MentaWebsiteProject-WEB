import { Injectable } from '@angular/core';
import { AddItem } from './add-item';

///DBとのやりとり
@Injectable({
  providedIn: 'root',
})
export class AdditemService {
  //url = 'http://localhost:3000/locations';
  url = 'http://localhost:3333/api';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url + '/item/list');
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    //itemNumberでレスポンス取得
    const data = await fetch(`${this.url}/item/getitem?itemNumber=${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

  testFunction() {
    console.log('tell me');
  }
}
