import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpEmployeeComponent } from './http-employee.component';

describe('HttpEmployeeComponent', () => {
  let component: HttpEmployeeComponent;
  let fixture: ComponentFixture<HttpEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
