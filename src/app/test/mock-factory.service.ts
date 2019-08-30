import {Card} from '../models/card.model';
import {CardService} from '../card.service';

export class MockFactory {

    static getCard(type: string = CardService.CARD_TYPES.MONSTER): Card {
        if (type ===  CardService.CARD_TYPES.MONSTER) {
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
        if (type ===  CardService.CARD_TYPES.SPELL) {
            return {
                atk: null,
                card_type: 'spell',
                def: null,
                family: null,
                level: null,
                name: 'Test spell card',
                property: 'Test prop',
                text: 'My custom spell card',
                type: null
            }
        }
        if (type ===  CardService.CARD_TYPES.TRAP) {
            return {
                atk: null,
                card_type: 'trap',
                def: null,
                family: null,
                level: null,
                name: 'Test trap card',
                property: 'Test prop',
                text: 'My custom trap card',
                type: null
            }
        }
    }
}
