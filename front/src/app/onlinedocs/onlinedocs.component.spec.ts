import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinedocsComponent } from './onlinedocs.component';

describe('OnlinedocsComponent', () => {
  let component: OnlinedocsComponent;
  let fixture: ComponentFixture<OnlinedocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinedocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinedocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
