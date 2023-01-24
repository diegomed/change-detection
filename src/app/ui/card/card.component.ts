import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

interface Card {
  title: string;
  imgUrl: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() card: Card | any;

  constructor() {}

  editTitle(e: any) {
    this.card.title = e.target.value;
  }
}
