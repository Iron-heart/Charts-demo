import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchFusionComponent } from './synch-fusion.component';

describe('SynchFusionComponent', () => {
  let component: SynchFusionComponent;
  let fixture: ComponentFixture<SynchFusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynchFusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynchFusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
