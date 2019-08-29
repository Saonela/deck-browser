const rp = require('request-promise');

const API_URL = 'http://yugiohprices.com/api';

const CARDS_LIST = [
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
        let data = await rp(API_URL + '/card_data/' + CARDS_LIST[0]);
        res.send({data: JSON.parse(data).data, list: CARDS_LIST});
    }
}

module.exports = AppController;
