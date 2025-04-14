import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDecComponent } from './input-dec.component';

describe('InputDecComponent', () => {
  let component: InputDecComponent;
  let fixture: ComponentFixture<InputDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
