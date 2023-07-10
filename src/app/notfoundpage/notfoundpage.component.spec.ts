import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOTfoundpageComponent } from './notfoundpage.component';

describe('NOTfoundpageComponent', () => {
  let component: NOTfoundpageComponent;
  let fixture: ComponentFixture<NOTfoundpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NOTfoundpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NOTfoundpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
