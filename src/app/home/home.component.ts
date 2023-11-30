import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  public housinglocation:HousingLocation;
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housinglocation = new HousingLocation();
    this.housingService.getHousingLocationById(1).then((data: HousingLocation) => {
      this.housinglocation = new HousingLocation(data);
      this.housinglocation = data;
      /*

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
      housingLocation => housingLocation?.itemName.toLowerCase().includes(text.toLowerCase())
    );
  }
}
