import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCrudPanelComponent } from './products-crud-panel.component';

describe('ProductsCrudPanelComponent', () => {
  let component: ProductsCrudPanelComponent;
  let fixture: ComponentFixture<ProductsCrudPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCrudPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCrudPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
