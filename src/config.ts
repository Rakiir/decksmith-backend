export const config = {
    port: Number(process.env.PORT) || 3000,
    dbUrl: process.env.DATABASE_URL!,
    jwtSecret: process.env.JWT_SECRET!,
    scryfallApiUrl: process.env.SCRYFALL_API_URL!,
};