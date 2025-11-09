import { Component, Input, OnInit } from '@angular/core';
import { COURSES } from '../../../db-data';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [],
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
