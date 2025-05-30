import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingdemoComponent } from './routingdemo.component';

describe('RoutingdemoComponent', () => {
  let component: RoutingdemoComponent;
  let fixture: ComponentFixture<RoutingdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
