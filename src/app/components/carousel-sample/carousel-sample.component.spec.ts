import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSampleComponent } from './carousel-sample.component';

describe('CarouselSampleComponent', () => {
  let component: CarouselSampleComponent;
  let fixture: ComponentFixture<CarouselSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
