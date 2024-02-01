import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { FormBuilder,FormControl,FormGroup,ReactiveFormsModule} from '@angular/forms';
import { AdditemService } from './add-item.service';
import { ItemClass } from '../item-class';


@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule
    ,MatFormFieldModule
    ,MatIconModule
    ,MatInputModule
    ,MatButtonModule
    ,MatDividerModule
    ,ReactiveFormsModule
  ],
  template: `

    <div class="form-main">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div formGroupName="basic">
        <p>
          <mat-form-field appearance="fill">
          <mat-label>ItemName</mat-label>
          <input matInput formControlName="itemName">
          <mat-hint>Hint</mat-hint>
          </mat-form-field>
        </p>
        <p>
          <mat-form-field appearance="fill">
          <mat-label>ItemPrice</mat-label>
          <input matInput formControlName="itemPrice">
          <mat-hint>Hint</mat-hint>
          </mat-form-field>
        </p>
        <p>
          <mat-form-field appearance="fill">
          <mat-label>ItemCode</mat-label>
          <input matInput formControlName="itemCode">
          <mat-hint>Hint</mat-hint>
          </mat-form-field>
        </p>
      </div>
      <div formGroupName="file">
        <input type="file" class="file-input" formControlName="file" name="file"
        (change)="onFileSelected($event)" #fileUpload>

          <div class="file-upload">

              {{fileName || "No file uploaded yet."}}

          <button mat-mini-fab color="primary" class="upload-btn"
            (click)="fileUpload.click()">
              <mat-icon>attach_file</mat-icon>
            </button>
          </div>
          <!-- (click)属性を付けたが機能しない -->
          <div class='form-submit'>
            <button mat-raised-button>Submit</button>
          </div>

          <!-- <div class='form-submit'>
            <button mat-raised-button (click)="onSubmit()">Submit</button>
          </div> -->
      </div>
      </form>
    </div>

  `,
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{
  form!:FormGroup;
  file!: File;

  constructor(
    private formBuilder:FormBuilder,
    private router: Router,
    private addItemService:AdditemService,
    ){};

    fileName = '';

    //constructor(private http: HttpClient) {}

    onFileSelected(event:any) {
      let reader = new FileReader();

      if(event.target.files && event.target.files.length) {
        this.file = event.target.files[0];
      }

    }

    ngOnInit():void{
      this.form = this.formBuilder.group({
          basic :this.formBuilder.group({
            itemNumber : [''],
            itemName : [''],
            itemPrice : [''],
            itemCode : [''],
            itemPath : [''],
          }),
          file :this.formBuilder.group({
            file : [''],
          }),

      })



    }

    onSubmit(){
      console.log(this.form.value);


      //onFileSelectedを使いたい　アイテムのパスを取得したい 画像はローカルに保存したい

      this.addItemService.addItem(this.form.get('basic')?.value).then((item:ItemClass) => {
        console.log("item:" + item)
        const body = new FormData();
        body.append('file', this.file);
        this.addItemService.addItemPath(body, 1).then((item:ItemClass) => {
          console.log(item)

        });
      });

      // リターンで帰ってきたあとにitemNumberを用いて画像をアップロードする
    }

}
