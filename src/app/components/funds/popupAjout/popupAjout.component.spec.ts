import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAjoutFundsComponent } from './popupAjout.component';

describe('FundsComponent', () => {
  let component: PopupAjoutFundsComponent;
  let fixture: ComponentFixture<PopupAjoutFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAjoutFundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAjoutFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
