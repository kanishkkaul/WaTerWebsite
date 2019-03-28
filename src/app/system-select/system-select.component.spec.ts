import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSelectComponent } from './system-select.component';

describe('SystemSelectComponent', () => {
  let component: SystemSelectComponent;
  let fixture: ComponentFixture<SystemSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
