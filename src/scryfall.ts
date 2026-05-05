import { ScryfallCard } from './enums.scryfall';
import { config } from './config';

const BASE_URL = config.scryfallApiUrl;

/**
 * Query Scryfall for a card by its exact name.
 * https://scryfall.com/docs/api/cards/named
 *
 * @param name The exact name of card to search for
 * @returns a ScryfallCard object if found, otherwise throws an error
 */
export async function getCardByName(name: string): Promise<ScryfallCard> {
    console.log(`getCardByName: name=${name}`);
    const res = await fetch(
        `${BASE_URL}/cards/named?fuzzy=${encodeURIComponent(name)}`
    );

    if (!res.ok) {
        throw new Error(`Card not found: ${name}`);
    }
    return res.json();
}

/**
 * Query Scryfall for a card by its set code and collector number.
 * https://scryfall.com/docs/api/cards/collector
 * 
 * @param set The three to five-letter set code.
 * @param number The collector number of the card in that set.
 * @returns a ScryfallCard object if found, otherwise throws an error
 */
export async function getCardBySetNumber(set: string, number: string): Promise<ScryfallCard> {
    console.log(`getCardBySetNumber: set=${set} number=${number}`);
    const res = await fetch(
        `${BASE_URL}/cards/${encodeURIComponent(set)}/${encodeURIComponent(number)}/${encodeURIComponent("en")}`
    );

    if (!res.ok) {
        throw new Error(`Card not found: set=${set} number=${number}`);
    }
    return res.json();
}
