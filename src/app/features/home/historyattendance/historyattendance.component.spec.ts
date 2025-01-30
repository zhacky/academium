import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryattendanceComponent } from './historyattendance.component';

describe('HistoryattendanceComponent', () => {
  let component: HistoryattendanceComponent;
  let fixture: ComponentFixture<HistoryattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryattendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
