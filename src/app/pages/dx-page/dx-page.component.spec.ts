import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxPageComponent } from './dx-page.component';

describe('DxPageComponent', () => {
  let component: DxPageComponent;
  let fixture: ComponentFixture<DxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
