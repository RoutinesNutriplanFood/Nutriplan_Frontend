import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarExpertoComponent } from './modificar-experto.component';

describe('ModificarExpertoComponent', () => {
  let component: ModificarExpertoComponent;
  let fixture: ComponentFixture<ModificarExpertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarExpertoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarExpertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
