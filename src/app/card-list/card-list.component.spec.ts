import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CardListComponent} from './card-list.component';
import {CardAPIService} from '../card-api.service';
import {Observable, of} from 'rxjs';

describe('CardListComponent', () => {
    let component: CardListComponent;
    let fixture: ComponentFixture<CardListComponent>;

    const mockCardAPIService = {
        getCards: () => {
            return of({});
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardListComponent],
            providers: [
                { provide: CardAPIService, useValue: mockCardAPIService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
