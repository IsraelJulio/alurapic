import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() url = 'https://images.news18.com/ibnlive/uploads/2021/08/1628511415_lion-1200x800.jpg?impolicy=website&width=510&height=356';
  @Input() description = 'lion';
}
