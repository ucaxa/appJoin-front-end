import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosUpdateComponent } from './produtos-update.component';

describe('ProdutosUpdateComponent', () => {
  let component: ProdutosUpdateComponent;
  let fixture: ComponentFixture<ProdutosUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosUpdateComponent]
    });
    fixture = TestBed.createComponent(ProdutosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
