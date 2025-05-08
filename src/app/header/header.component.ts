import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

/**
 * @title Basic toolbar
 */
@Component({
  selector: 'app-root',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <main>
    <mat-toolbar>
      <div class="menu-bar-icon">
        <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
          <mat-icon>menu</mat-icon>
        </button>
      </div>
      <div class="right">
        <span>My App</span>
        <span class="example-spacer"></span>
        <div class="textbox">
          <input type="text" class="textbox-input">
        </div>
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
  `,
})
export class HeaderComponent {
  title = 'header';
}
