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
      <a [routerLink]="['/']">
      <mat-toolbar class="toolbar">
      <button type="menu-button" mat-button (click)="drawer.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>ECサイト</span>
        <div class="textbox">
          <input type="text" value="aaaa">
        </div>

      <div class="example-spacer">
        <div class="menu">
          <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
            <mat-icon>favorite</mat-icon>
          </button>
          <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
            <mat-icon>User</mat-icon>
          </button>
          <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
            <mat-icon>Cart</mat-icon>
          </button>
          <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
            <mat-icon>More</mat-icon>
        </button>
        </div>
      </div>
      </mat-toolbar>

      <mat-drawer-container class="example-container" autosize>
        <mat-drawer #drawer class="example-sidenav" mode="side">
          <div class="sidenav">
            <button mat-button class="sidenav-menu">
              View by Category
            </button>
            <button mat-button>
              Cart
            </button>
            <button mat-button>
              Orders
            </button>
            <button mat-button>
              Contact
            </button>
          </div>
        </mat-drawer>

        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </mat-drawer-container>


    </a>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  showFiller = false;
  test1 = false;
}
