import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTabGroup} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgSrc = ['assets/msi.jpeg', 'assets/msi_logo.jpg', 'assets/msi.jpeg'];
  title = 'carousal';
}
