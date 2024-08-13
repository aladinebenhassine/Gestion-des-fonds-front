import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUpdateComponent } from './popupUpdate.component';

describe('FundsComponent', () => {
  let component: PopupUpdateComponent;
  let fixture: ComponentFixture<PopupUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
