import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarfeComponent } from './barfe.component';

describe('BarfeComponent', () => {
  let component: BarfeComponent;
  let fixture: ComponentFixture<BarfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
