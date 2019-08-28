import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CardAPIService {

    private API_URL = 'http://52.57.88.137/api';

    constructor(private http: HttpClient) {
    }

    public getCards() {
        return this.http.get(this.API_URL + '/card_data/Reasoning');
    }
}
