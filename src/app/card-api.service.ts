import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CardAPIService {

    constructor(private http: HttpClient) {
    }

    public getCards() {
        return this.http.get('/api/card_list/');
    }
}
