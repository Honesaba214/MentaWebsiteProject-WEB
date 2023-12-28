import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    NgIf
  ],
  template: `

    <main>
      <mat-toolbar class="toolbar">
      <button class="menu-button" type="menu-button" mat-button (click)="drawer.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      <a [routerLink]="['/']">
        <span>ECサイト</span>
      </a>
        <div class="textbox">
          <input class="textbox-input" placeholder="text here" type="text">
        </div>

        <div class="example-spacer">
          <button mat-icon-button [routerLink]="['/additem']">
            <mat-icon>add</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon>person</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon>shopping_cart</mat-icon>
          </button>
        </div>
      </mat-toolbar>

        <mat-drawer-container class="example-container">
          <mat-drawer #drawer class="example-sidenav" mode="side">
            <div class="sidenav">
              <button mat-button class="sidenav-menu">View by Category</button>
              <button mat-button>Cart</button>
              <button mat-button>Orders</button>
              <button mat-button>Contact</button>
            </div>
          </mat-drawer>
          <section class="content">
          <router-outlet></router-outlet>
          </section>
        </mat-drawer-container>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  showFiller = false;
  test1 = false;
}
