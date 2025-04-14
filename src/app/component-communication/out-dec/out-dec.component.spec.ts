import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutDecComponent } from './out-dec.component';

describe('OutDecComponent', () => {
  let component: OutDecComponent;
  let fixture: ComponentFixture<OutDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutDecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
