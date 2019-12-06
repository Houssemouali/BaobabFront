import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginJournalistComponent } from './login-journalist.component';

describe('LoginJournalistComponent', () => {
  let component: LoginJournalistComponent;
  let fixture: ComponentFixture<LoginJournalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginJournalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginJournalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
