import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  standalone: true,
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  @Input() card: { name: string; age: number };
}
