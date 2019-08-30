import {Card} from '../models/card.model';

export class MockFactory {

    static getCard(): Card {
        return {
            atk: 2900,
            card_type: 'monster',
            def: 2900,
            family: 'fire',
            level: 9.,
            name: 'Test card',
            property: null,
            text: 'My custom card',
            type: 'Fiend / Effect'
        } as Card;
    }
}
