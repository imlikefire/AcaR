import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrarProfComponent } from './orar-prof.component';

describe('OrarProfComponent', () => {
  let component: OrarProfComponent;
  let fixture: ComponentFixture<OrarProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrarProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrarProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
