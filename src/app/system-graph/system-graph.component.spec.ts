import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemGraphComponent } from './system-graph.component';

describe('SystemGraphComponent', () => {
  let component: SystemGraphComponent;
  let fixture: ComponentFixture<SystemGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
