import express, { Request, Response } from 'express';
import 'dotenv/config';
import { config } from './config';

import { ScryfallCard } from './enums.scryfall';
import { getCardByName, getCardBySetNumber } from "./scryfall";

//////////////////////////////////////////////////////////////

const app = express();
const PORT = config.port || 3000;
app.use(express.json());

////////////////////
// Main Endpoints //
////////////////////

// app.use((req, _res, next) => {
//   console.log("Incoming request:", req.url);
//   next();
// });

// Root Endpoint
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'TypeScript API is running!' });
});

// Health Check Endpoint
app.get('/health', (req: Request, res: Response) => {
    res.json({ healthy: true });
});

////////////////////////
// Scryfall Endpoints //
////////////////////////

// Endpoint to get card by exact name
app.get("/card/:name", async (req: Request, res: Response) => {
    try {
        const card: ScryfallCard = await getCardByName(req.params.name as string);
        res.json(card);
    } catch (err) {
        res.status(404).json({ error: "Card not found" });
    }
});

// Endpoint to get card by set code and collector number
app.get('/card/:set/:number', async (req: Request, res: Response) => {
    try {
        const card: ScryfallCard = await getCardBySetNumber(req.params.set as string, req.params.number as string);
        res.json(card);
    } catch (err) {
        res.status(404).json({ error: "Card not found" });
    }
});

//////////////////////
// Start the Server //
//////////////////////

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
