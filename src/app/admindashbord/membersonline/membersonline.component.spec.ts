import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersonlineComponent } from './membersonline.component';

describe('MembersonlineComponent', () => {
  let component: MembersonlineComponent;
  let fixture: ComponentFixture<MembersonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersonlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
