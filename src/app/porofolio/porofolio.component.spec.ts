import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorofolioComponent } from './porofolio.component';

describe('PorofolioComponent', () => {
  let component: PorofolioComponent;
  let fixture: ComponentFixture<PorofolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorofolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
