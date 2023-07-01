import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarExpertoComponent } from './listar-experto.component';

describe('ListarExpertoComponent', () => {
  let component: ListarExpertoComponent;
  let fixture: ComponentFixture<ListarExpertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarExpertoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarExpertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
