

export interface Datum {
    name:string;
    type_line:string;
    mana_cost:string;
    colors:string;
    color_identity:string;
    rarity:string;
    cmc:number;
    oracle_text:string;
    normal:string;
    image_uris: Image_Uris;
    prices: Prices;
    purchase_uris: Purchase_Uris;
    games:string[];

}

export interface Image_Uris{
    small:string;
    normal:string;
    large:string;
    png:string;
    art_crop:string;
    border_crop:string;
}

export interface Purchase_Uris{
    tcgplayer:string;
}

export interface Prices{
    usd:string;
}