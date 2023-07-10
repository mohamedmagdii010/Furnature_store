import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttttsComponent } from './productttts.component';

describe('ProducttttsComponent', () => {
  let component: ProducttttsComponent;
  let fixture: ComponentFixture<ProducttttsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducttttsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducttttsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
