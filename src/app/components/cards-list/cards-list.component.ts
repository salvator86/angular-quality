import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { CardItemComponent } from '../card-item/card-item.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  standalone: true,
  styleUrl: './cards-list.component.scss',
  imports: [CardItemComponent, NgForOf]
})
export class CardsListComponent implements OnInit {
  public cards: { name: string; age: number }[];

  constructor(private cardsService: CardsService) {}

  public ngOnInit(): void {
    this.cards = this.cardsService.getCards();
  }
}
