import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cards: { name: string; age: number }[] = [
    { name: 'Sasha', age: 26 },
    { name: 'Masha', age: 21 }
  ];

  public getCards(): { name: string; age: number }[] {
    return this.cards;
  };
}
