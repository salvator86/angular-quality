import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemComponent } from './card-item.component';

describe('CardItemComponent', () => {
  let component: CardItemComponent;
  let fixture: ComponentFixture<CardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItemComponent);
    component = fixture.componentInstance;

    Object.defineProperty(component, 'card', { get: () => {
       return { name: 'Sasha', age: 5 }
      }
    })

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
