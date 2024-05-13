import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstampadosComponent } from './estampados.component';

describe('EstampadosComponent', () => {
  let component: EstampadosComponent;
  let fixture: ComponentFixture<EstampadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstampadosComponent]
    });
    fixture = TestBed.createComponent(EstampadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
