import { Component, Input, OnInit } from '@angular/core';
import { COURSES } from '../../../db-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {

  @Input() 
  title: string = '';

  constructor() { }


  ngOnInit(): void {
  }

}
