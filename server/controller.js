const rp = require('request-promise');

const API_URL = 'http://yugiohprices.com/api';
const CARDS_DECK = [
    'Burial from a Different Dimension',
    'Charge of the Light Brigade',
    'Infernoid Antra',
    'Infernoid Attondel',
    'Infernoid Decatron',
    'Infernoid Devyaty',
    'Infernoid Harmadik',
    'Infernoid Onuncu',
    'Infernoid Patrulea',
    'Infernoid Pirmais',
    'Infernoid Seitsemas',
    'Lyla, Lightsworn Sorceress',
    'Monster Gate',
    'One for One',
    'Raiden, Hand of the Lightsworn',
    'Reasoning',
    'Time-Space Trap Hole',
    'Torrential Tribute',
    'Upstart Goblin',
    'Void Seer'
];

class AppController {
    async getCardsList(req, res) {
        let requestArr = CARDS_DECK.map((cardName) => {
            return new Promise((resolve, reject) => {
                rp(API_URL + '/card_data/' + cardName, (error, response, body) => {
                    if (error) {
                        reject(err);
                    }
                    resolve(JSON.parse(body).data);
                });
            });
        });

        let cardList = await Promise.all(requestArr);
        res.send(cardList);
    }
}

module.exports = AppController;
