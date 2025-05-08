import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import {MatSliderModule} from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import { SlideComponent } from '../components/slide/slide.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent,MatSliderModule,MatGridListModule],
  template: `
    <div class='main'>
      <div class="scrool_img"
      [ngStyle]="{ 'background-image': 'url(' + currentBackground + ')' }">
      </div>
      <section class="results">

        <app-housing-location
          *ngFor="let housingLocation of housingLocationList"
          [housingLocation]="housingLocation"
        >
        </app-housing-location>
      </section>

      <div class='gridlist'>
        <mat-grid-list cols="2" rowHeight="2:1">
          <mat-grid-tile>1</mat-grid-tile>
          <mat-grid-tile>2</mat-grid-tile>
          <mat-grid-tile>3</mat-grid-tile>
          <mat-grid-tile>4</mat-grid-tile>
        </mat-grid-list>
      </div>

      <div class="checkboxdiv">
        <input type="checkbox" name="1">
        <input type="checkbox" name="2">
        <input type="checkbox" name="3">
        <input type="checkbox" name="4">
        <input type="checkbox" name="5">
        <button type="submit" (click)="test()">決定</button>
      </div>

      <div class='contents-area'>
        田邊工業


        企業理念
        採用情報
        アクセス
        問い合わせ
      </div>

      <mat-slider min="1" max="5" step="0.5">
        <input matSliderThumb value="1.5">
      </mat-slider>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit, OnDestroy{
  public housinglocation: HousingLocation;
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  backgrounds : string[] = [
    'assets/scloolimg/IMG_3142.PNG',
    'assets/scloolimg/IMG_3143.PNG'
  ];

  currentBackground:string = this.backgrounds[0];
  errorBackground:string = 'assets/1000.jpg';
  private intervalId: any;

  constructor() {
    this.housinglocation = new HousingLocation();

    this.housingService
      .getAllHousingLocations()
      .then((list: HousingLocation[]) => {
        for (const data of list) {
          this.housingLocationList.push(new HousingLocation(data));
        }
      });
  }

  ngOnInit(): void {
    this.scloolImg();

  }

  ngOnDestroy(): void {
    // コンポーネント破棄時にタイマーをクリア
    this.stopImageSwitching();
  }

  /* aaaa */
private scloolImg():void{
  let index = 0;

  // 5秒ごとに背景画像を切り替え
  this.intervalId = setInterval(() => {
    index = (index + 1) % this.backgrounds.length; 
    const image = new Image();
    image.src = this.backgrounds[index];

    // 画像読み込み時のエラーハンドリング
    image.onload = () => {
      this.currentBackground = this.backgrounds[index];
    };
    image.onerror = () => {
      console.error(`画像が見つかりません: ${this.backgrounds[index]}`);
      this.currentBackground = this.errorBackground; // デフォルト画像に切り替え
      this.stopImageSwitching(); // 画像切り替えを中止
    };
  }, 5000);
}

  // 画像切り替え処理を停止する
  private stopImageSwitching(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null; // タイマーIDをリセット
      console.log('画像切り替え処理を中止しました。');
    }
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
