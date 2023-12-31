import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="['/assets' + '/' + housingLocation.itemCode + '.jpg']">]
      <h2 class="listing-label">itemcode: </h2>
      <h2 class="listing-heading">{{ housingLocation.itemCode }}</h2>
      <h2 class="listing-heading">{{ housingLocation.itemName }}</h2>
      <p class="listing-location">{{ housingLocation.itemPrice}}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}
