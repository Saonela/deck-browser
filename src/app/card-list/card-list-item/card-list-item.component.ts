import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../models/card.model';
import {CardService} from '../../card.service';

@Component({
    selector: 'app-card-list-item',
    templateUrl: './card-list-item.component.html',
    styleUrls: ['./card-list-item.component.sass']
})
export class CardListItemComponent implements OnInit {

    @Input() isActive: boolean;
    @Input() card: Card;

    public CARD_TYPES = CardService.CARD_TYPES;

    constructor() {
    }

    ngOnInit() {
    }

}
