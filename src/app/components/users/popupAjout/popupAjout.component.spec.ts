import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAjoutComponent } from './popupAjout.component';

describe('FundsComponent', () => {
  let component: PopupAjoutComponent;
  let fixture: ComponentFixture<PopupAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
