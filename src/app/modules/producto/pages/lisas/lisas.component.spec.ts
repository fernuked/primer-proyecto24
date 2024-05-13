import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisasComponent } from './lisas.component';

describe('LisasComponent', () => {
  let component: LisasComponent;
  let fixture: ComponentFixture<LisasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LisasComponent]
    });
    fixture = TestBed.createComponent(LisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
