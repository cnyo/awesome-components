import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../core/models/comment';
import {MATERIAL_IMPORTS} from '../../material.imports';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-comments',
  imports: [
    MATERIAL_IMPORTS,
    DatePipe
  ],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
})
export class Comments implements OnInit {
  @Input() comments!: Comment[];

  constructor() { }

  ngOnInit(): void {
  }
}
