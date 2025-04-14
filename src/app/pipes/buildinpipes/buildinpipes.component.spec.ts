import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildinpipesComponent } from './buildinpipes.component';

describe('BuildinpipesComponent', () => {
  let component: BuildinpipesComponent;
  let fixture: ComponentFixture<BuildinpipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildinpipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildinpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
