import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTabGroup} from '@angular/material/tabs';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit, OnDestroy {
  @ViewChild('carousal', {static: false}) carousal: MatTabGroup;
  @Input('waitTime') waitTime: number;
  @Input('imgSources') imgSources: string[];
  @Input('enableSwipes') enableSwipes: boolean;
  @Input('autoChange') autoChange: boolean;
  intervalId: number;

  changeSlideAuto(): void{
    this.goToNextTabIndex(this.carousal);
  }
  showPreviousSlide(): void{
    this.goToPreviousTabindex(this.carousal);
  }

  goToNextTabIndex(tabGroup: MatTabGroup): void{
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)){
      return;
    }
    const tabCount = tabGroup._tabs.length;
    tabGroup.selectedIndex = (tabGroup.selectedIndex + 1) % tabCount;

  }
  goToPreviousTabindex(tabGroup: MatTabGroup): void{
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)){
      return;
    }
    const tabCount = tabGroup._tabs.length;
    if (tabGroup.selectedIndex === tabCount) {
      tabGroup.selectedIndex = 0;
    }
    else if (tabGroup.selectedIndex === 0){
      tabGroup.selectedIndex = tabCount;
    }
    else {
      tabGroup.selectedIndex = (tabGroup.selectedIndex - 1) % tabCount;
    }
  }


  ngOnInit(): void {
    if (this.autoChange){
      this.intervalId = setInterval(() => {
        this.changeSlideAuto();
      }, this.waitTime);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
