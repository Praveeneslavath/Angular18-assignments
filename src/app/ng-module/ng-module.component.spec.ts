import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModuleComponent } from './ng-module.component';

describe('NgModuleComponent', () => {
  let component: NgModuleComponent;
  let fixture: ComponentFixture<NgModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
