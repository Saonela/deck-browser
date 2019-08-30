import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CardDetailsComponent} from './card-details.component';
import {CardService} from '../card.service';
import {Subject} from 'rxjs/index';
import {MockFactory} from '../test/mock-factory.service';

describe('CardDetailsComponent', () => {
    let component: CardDetailsComponent;
    let fixture: ComponentFixture<CardDetailsComponent>;

    let cardService;

    const mockCardService = {
        cardSubject: new Subject()
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardDetailsComponent],
            providers: [
                { provide: CardService, useValue: mockCardService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardDetailsComponent);
        component = fixture.componentInstance;
        cardService = TestBed.get(CardService);
        fixture.detectChanges();
    });

    it('should display card details', () => {
        cardService.cardSubject.next(MockFactory.getCard());
        fixture.detectChanges();
        expect(TestHelper.getCardName().innerText).toBe('Test card');
        expect(TestHelper.getCardType().innerText).toBe('Monster');
        expect(TestHelper.getCardDescription().innerText).toBe('My custom card');
    });

    const TestHelper = {
        getCardName: () => {
            return fixture.nativeElement.querySelector('.card-details__name');
        },
        getCardType: () => {
            return fixture.nativeElement.querySelector('.card-details__type');
        },
        getCardDescription: () => {
            return fixture.nativeElement.querySelector('.card-details__description');
        }
    };
});
