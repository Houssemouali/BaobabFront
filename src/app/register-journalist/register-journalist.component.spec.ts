import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterJournalistComponent } from './register-journalist.component';

describe('RegisterJournalistComponent', () => {
  let component: RegisterJournalistComponent;
  let fixture: ComponentFixture<RegisterJournalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterJournalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterJournalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
