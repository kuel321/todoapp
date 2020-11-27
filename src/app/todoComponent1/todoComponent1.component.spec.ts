import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent1Component } from './todoComponent1.component';

describe('TodoComponent1Component', () => {
  let component: TodoComponent1Component;
  let fixture: ComponentFixture<TodoComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
