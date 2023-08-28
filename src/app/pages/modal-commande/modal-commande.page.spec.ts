import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalCommandePage } from './modal-commande.page';

describe('ModalCommandePage', () => {
  let component: ModalCommandePage;
  let fixture: ComponentFixture<ModalCommandePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalCommandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
