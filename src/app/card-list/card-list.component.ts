import {Component, OnInit} from '@angular/core';
import {CardAPIService} from '../card-api.service';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {

    constructor(private cardAPIService: CardAPIService) {
    }

    ngOnInit() {
        this.cardAPIService.getCards().subscribe((res) => {
            console.log('card', res);
        });
    }

}
