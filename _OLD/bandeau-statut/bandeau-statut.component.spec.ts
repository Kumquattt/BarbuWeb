import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauStatutComponent } from './bandeau-statut.component';

describe('BandeauStatutComponent', () => {
  let component: BandeauStatutComponent;
  let fixture: ComponentFixture<BandeauStatutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandeauStatutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeauStatutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
