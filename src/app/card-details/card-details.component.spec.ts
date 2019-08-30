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
        let cardImageElem = TestHelper.getCardImage();
        expect(cardImageElem.querySelector('.loader')).toBeTruthy();

        cardService.cardSubject.next(MockFactory.getCard());
        component.imageSrc = '';
        component.isImageLoaded = true;
        fixture.detectChanges();

        expect(TestHelper.getCardName().innerText).toBe('Test Card');
        expect(TestHelper.getCardType().innerText).toBe('[Monster]');
        expect(TestHelper.getCardDescription().innerText).toBe('My custom card');

        expect(cardImageElem.querySelector('.loader')).toBeFalsy();
        expect(cardImageElem.querySelector('.image')).toBeTruthy();
    });

    it('should display monster card details', () => {
        cardService.cardSubject.next(MockFactory.getCard());
        component.imageSrc = '';
        fixture.detectChanges();
        expect(TestHelper.getCardType().classList.contains('monster-card-type-color')).toBeTruthy();
        expect(TestHelper.getCardAbout().querySelector('.level').innerText).toBe('Level: 9');
    });

    it('should display spell card details', () => {
        cardService.cardSubject.next(MockFactory.getCard(CardService.CARD_TYPES.SPELL));
        component.imageSrc = '';
        fixture.detectChanges();
        expect(TestHelper.getCardType().classList.contains('spell-card-type-color')).toBeTruthy();
        expect(TestHelper.getCardAbout().querySelector('.property').innerText).toBe('Test prop');
    });

    it('should display trap card details', () => {
        cardService.cardSubject.next(MockFactory.getCard(CardService.CARD_TYPES.TRAP));
        component.imageSrc = '';
        fixture.detectChanges();
        expect(TestHelper.getCardType().classList.contains('trap-card-type-color')).toBeTruthy();
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
        },
        getCardImage: () => {
            return fixture.nativeElement.querySelector('.card-details__image');
        },
        getCardAbout: () => {
            return fixture.nativeElement.querySelector('.card-details__about');
        }
    };
});
