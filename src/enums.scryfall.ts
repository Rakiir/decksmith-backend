// https://scryfall.com/docs/api/cards
export interface ScryfallCard {
    object: 'card'
    id: string
    oracle_id: string
    multiverse_ids: number[]
    mtgo_id: number
    mtgo_foil_id?: number
    tcgplayer_id: number
    cardmarket_id: number
    name: string
    flavor_name?: string
    lang: string
    released_at: string
    uri: string
    scryfall_uri: string
    layout: CardLayout
    highres_image: boolean
    image_status: 'missing' | 'placeholder' | 'lowres' | 'highres_scan'
    image_uris: Record<ImageType, string>
    mana_cost: string
    cmc: number
    type_line: string
    oracle_text?: string
    power?: string
    toughness?: string
    loyalty?: string
    colors?: Color[]
    color_indicator?: Color[]
    color_identity: Color[]
    keywords: string[]
    all_parts?: {
        object: 'related_card' | string
        id: string
        component: 'combo_piece' | string
        name: string
        type_line: string
        uri: string
    }[]
    legalities: Record<Format, Legality>
    games: string[]
    reserved: boolean
    foil: boolean
    nonfoil: boolean
    finishes: ('nonfoil' | 'foil' | string)[]
    oversized: boolean
    promo: boolean
    reprint: boolean
    variation: boolean
    set_id: string
    set: string // ~3 character set code
    set_name: string
    set_type: SetType
    set_uri: string
    set_search_uri: string
    scryfall_set_uri: string
    rulings_uri: string
    prints_search_uri: string
    collector_number: string
    digital: boolean
    rarity: Rarity
    flavor_text?: string
    card_back_id: string
    card_faces?: CardFace[]
    artist: string
    artist_ids: string[]
    illustration_id: string
    border_color: 'black' | 'white' | 'borderless' | 'silver' | 'gold'
    frame: '1993' | '1997' | '2003' | '2015' | 'future'
    frame_effects?: FrameEffect[]
    security_stamp: 'oval' | 'triangle' | 'acorn' | 'arena' | 'heart'
    full_art: boolean
    textless: boolean
    booster: boolean
    story_spotlight: boolean
    promo_types?: string[]
    edhrec_rank: number
    penny_rank?: number
    preview?: {
        source: string
        source_uri: string
        previewed_at: string
    }
    prices: Record<string, string | null>
    related_uris: Record<string, string>
    purchase_uris: Record<string, string>
}

export enum CardLayout {
    Normal = 'normal',
    Split = 'split',
    Flip = 'flip',
    Transform = 'transform',
    ModalDfc = 'modal_dfc',
    Meld = 'meld',
    Leveler = 'leveler',
    Class = 'class',
    Saga = 'saga',
    Adventure = 'adventure',
    Battle = 'battle',
    Planar = 'planar',
    Scheme = 'scheme',
    Vanguard = 'vanguard',
    Token = 'token',
    DoubleFacedToken = 'double_faced_token',
    Emblem = 'emblem',
    Augment = 'augment',
    Host = 'host',
    ArtSeries = 'art_series',
    ReversibleCard = 'reversible_card'
}

export enum CardFaceName {
    Front = 'front',
    Back = 'back'
}

export interface CardFace {
    object: 'card_face'
    name: string
    flavor_name?: string
    mana_cost: string
    type_line: string
    oracle_text: string
    colors: Color[]
    color_indicator?: Color[]
    power?: string
    toughness?: string
    defense?: number
    loyalty?: string
    artist: string
    artist_id: string
    illustration_id: string
    image_uris: Record<string, string>
    flavor_text?: string
}

export enum ImageType {
    Small = 'small',
    Normal = 'normal',
    Large = 'large',
    PNG = 'png',
    ArtCrop = 'art_crop',
    BorderCrop = 'border_crop'
}
export const imageTypes = Object.values(ImageType)

export enum Color {
    White = 'W',
    Blue = 'U',
    Black = 'B',
    Red = 'R',
    Green = 'G',
    Colorless = 'C',
    Multicolor = 'M'
}

export enum Rarity {
    Common = 'common',
    Uncommon = 'uncommon',
    Rare = 'rare',
    Mythic = 'mythic',
    Special = 'special',
    Bonus = 'bonus'
}

export enum Format {
    Commander = 'commander',
    Standard = 'standard',
    Pauper = 'pauper',
    PauperCommander = 'paupercommander',
    Pioneer = 'pioneer',
    Explorer = 'explorer',
    Modern = 'modern',
    Premodern = 'premodern',
    Legacy = 'legacy',
    Vintage = 'vintage',
    Penny = 'penny',
    Oathbreaker = 'oathbreaker',
    Gladiator = 'gladiator',
    Duel = 'duel',
    PrEDH = 'predh',
    Oldschool = 'oldschool',
    Future = 'future',
    // Arena-only formats
    Brawl = 'brawl',
    HistoricBrawl = 'historicbrawl',
    Historic = 'historic',
    Alchemy = 'alchemy'
}
export const formats = Object.values(Format)

export enum FrameEffect {
    Colorshifted = 'colorshifted',
    Companion = 'companion',
    Compasslanddfc = 'compasslanddfc',
    Convertdfc = 'convertdfc',
    Devoid = 'devoid',
    Draft = 'draft',
    Etched = 'etched',
    Extendedart = 'extendedart',
    Fandfc = 'fandfc',
    Inverted = 'inverted',
    Legendary = 'legendary',
    Lesson = 'lesson',
    Miracle = 'miracle',
    Mooneldrazidfc = 'mooneldrazidfc',
    Nyxtouched = 'nyxtouched',
    Originpwdfc = 'originpwdfc',
    Shatteredglass = 'shatteredglass',
    Showcase = 'showcase',
    SnOw = 'SnOw',
    Sunmoondfc = 'sunmoondfc',
    Tombstone = 'tombstone',
    Upsidedowndfc = 'upsidedowndfc',
    Waxingandwaningmoondfc = 'waxingandwaningmoondfc'
}

export enum SetType {
    Alchemy = 'alchemy',
    Archenemy = 'archenemy',
    Arsenal = 'arsenal',
    Box = 'box',
    Commander = 'commander',
    Core = 'core',
    DraftInnovation = 'draft_innovation',
    DuelDeck = 'duel_deck',
    Expansion = 'expansion',
    FromTheVault = 'from_the_vault',
    Funny = 'funny',
    Masters = 'masters',
    Masterpiece = 'masterpiece',
    Memorabilia = 'memorabilia',
    Minigame = 'minigame',
    Planechase = 'planechase',
    PremiumDeck = 'premium_deck',
    Promo = 'promo',
    Spellbook = 'spellbook',
    Starter = 'starter',
    Token = 'token',
    TreasureChest = 'treasure_chest',
    Vanguard = 'vanguard'
}

export type Legality = 'legal' | 'not_legal' | 'restricted' | 'banned'