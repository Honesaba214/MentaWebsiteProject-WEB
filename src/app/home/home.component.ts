import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      >
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public housinglocation: HousingLocation;
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housinglocation = new HousingLocation();

    this.housingService
      .getAllHousingLocations()
      .then((list: HousingLocation[]) => {
        for (const data of list) {
          this.housingLocationList.push(new HousingLocation(data));
        }
        /*

      レスポンスで帰ってきたものをリストに格納
      レスポンスリストを別のリストに格納
      For文で回す

      thenがなにやっているかわからない

      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
      this.housingService.testFunction;
      */
      });
  }

  //検索
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.itemName.toLowerCase().includes(text.toLowerCase())
    );
  }
}
