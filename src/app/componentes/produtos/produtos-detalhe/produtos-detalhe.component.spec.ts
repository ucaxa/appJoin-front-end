import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDetalheComponent } from './produtos-detalhe.component';

describe('ProdutosDetalheComponent', () => {
  let component: ProdutosDetalheComponent;
  let fixture: ComponentFixture<ProdutosDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosDetalheComponent]
    });
    fixture = TestBed.createComponent(ProdutosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
