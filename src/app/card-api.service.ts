import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CardAPIService {

    static IMAGE_BASE_URL: string = 'http://yugiohprices.com/api/card_image/';

    constructor(private http: HttpClient) {
    }

    public getCardList() {
        return this.http.get('/api/card_list/');
    }
}
