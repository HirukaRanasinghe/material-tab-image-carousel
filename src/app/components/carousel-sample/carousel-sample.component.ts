import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-sample',
  templateUrl: './carousel-sample.component.html',
  styleUrls: ['./carousel-sample.component.css']
})
export class CarouselSampleComponent implements OnInit {
  imgSrc = ['assets/msi.jpeg', 'assets/msi_logo.jpg', 'assets/msi.jpeg'];
  constructor() { }

  ngOnInit(): void {
  }

}
