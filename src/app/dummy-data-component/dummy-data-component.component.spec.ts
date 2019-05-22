import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDataComponentComponent } from './dummy-data-component.component';

describe('DummyDataComponentComponent', () => {
  let component: DummyDataComponentComponent;
  let fixture: ComponentFixture<DummyDataComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyDataComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
