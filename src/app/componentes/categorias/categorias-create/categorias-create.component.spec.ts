import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasCreateComponent } from './categorias-create.component';

describe('CategoriasCreateComponent', () => {
  let component: CategoriasCreateComponent;
  let fixture: ComponentFixture<CategoriasCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriasCreateComponent]
    });
    fixture = TestBed.createComponent(CategoriasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
