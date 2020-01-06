import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOutletDemoComponent } from './component-outlet-demo.component';

describe('ComponentOutletDemoComponent', () => {
  let component: ComponentOutletDemoComponent;
  let fixture: ComponentFixture<ComponentOutletDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentOutletDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentOutletDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
