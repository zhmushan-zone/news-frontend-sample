import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../models';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-change-pass-dialog',
  templateUrl: './change-pass-dialog.component.html',
  styleUrls: ['./change-pass-dialog.component.scss']
})
export class ChangePassDialogComponent implements OnInit {

  password: string;

  constructor() { }

  ngOnInit() {
  }

}
