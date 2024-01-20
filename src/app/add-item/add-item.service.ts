import { Injectable } from '@angular/core';
import { ItemClass } from '../item-class';

///DBとのやりとり
@Injectable({
  providedIn: 'root',
})
export class AdditemService {
  //url = 'http://localhost:3000/locations';
  url = 'http://localhost:3333/api';

  async addItem(body: any): Promise<ItemClass> {
    const method = "POST";
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const data = await fetch(this.url + '/item/add', { method, headers, body });
    return (await data.json()) ?? [];
  }

}
