import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpSampleComponent } from './http-sample.component';

describe('HttpSampleComponent', () => {
  let component: HttpSampleComponent;
  let fixture: ComponentFixture<HttpSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
