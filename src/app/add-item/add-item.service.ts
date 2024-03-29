import { Injectable } from '@angular/core';
import { ItemClass } from '../item-class';

///DBとのやりとり
@Injectable({
  providedIn: 'root',
})
export class AdditemService {
  //url = 'http://localhost:3000/locations';
  url = 'http://localhost:3333/api';

  async addItem(parseJson: any): Promise<ItemClass> {
    const method = "POST";
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const body = JSON.stringify(parseJson);
    const data = await fetch(this.url + '/item/add', { method, headers, body });
    console.log(data.json);
    return (await data.json()) ?? [];
  }

  async addItemPath(body:any, itemNumber:number): Promise<ItemClass>{
    const method = "POST"

    const data = await fetch(this.url + '/item/upload?itemNumber=' + itemNumber ,{method,body});
    return (await data.json()) ?? [];
  }

}
