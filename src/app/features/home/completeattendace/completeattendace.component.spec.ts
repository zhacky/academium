import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteattendaceComponent } from './completeattendace.component';

describe('CompleteattendaceComponent', () => {
  let component: CompleteattendaceComponent;
  let fixture: ComponentFixture<CompleteattendaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteattendaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteattendaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
