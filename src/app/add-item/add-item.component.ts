import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,MatIconModule,MatInputModule,MatButtonModule, MatDividerModule],
  template: `

    <div class="form-main">
      <p>
        <mat-form-field appearance="fill">
        <mat-label>ItemName</mat-label>
        <input matInput>
        <mat-hint>Hint</mat-hint>
        </mat-form-field>
      </p>
      <p>
        <mat-form-field appearance="fill">
        <mat-label>ItemPrice</mat-label>
        <input matInput>
        <mat-hint>Hint</mat-hint>
        </mat-form-field>
      </p>
      <p>
        <mat-form-field appearance="fill">
        <mat-label>ItemCode</mat-label>
        <input matInput>
        <mat-hint>Hint</mat-hint>
        </mat-form-field>
      </p>
      <p>
        <mat-form-field appearance="fill">
        <mat-label>Fill form field</mat-label>
        <input matInput>
        <mat-hint>Hint</mat-hint>
        </mat-form-field>
      </p>
      <input type="file" class="file-input"
       (change)="onFileSelected($event)" #fileUpload>

        <div class="file-upload">

            {{fileName || "No file uploaded yet."}}

        <button mat-mini-fab color="primary" class="upload-btn"
          (click)="fileUpload.click()">
            <mat-icon>attach_file</mat-icon>
          </button>
        </div>
        <div class='form-submit'>
          <button mat-raised-button>Submit</button>
        </div>
      </div>
    <section>
  `,
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

    fileName = '';

    //constructor(private http: HttpClient) {}

    onFileSelected(event:any) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append("thumbnail", file);

            //const upload$ = this.http.post("/api/thumbnail-upload", formData);

            //upload$.subscribe();
        }
    }


}
export class Submit{
  constructor(){
      //未実装
  };
}
