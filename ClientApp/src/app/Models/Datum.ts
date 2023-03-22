

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
    card_back_id:string;
    card_faces:Card_Face[];
    power:string;
    toughness:string;
    artist:string;
    flavor_text:string;
    id:string;
    

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
    cardmarket:string;
    cardhoarder:string;
}

export interface Prices{
    usd:string;

}

export interface Card_Face{
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
    artist:string;
}

export interface Card_Faces{
    front:Card_Face
    back:Card_Face
}

// public string _object { get; set; }
// public string name { get; set; }
// public string mana_cost { get; set; }
// public string type_line { get; set; }
// public string oracle_text { get; set; }
// public string[] colors { get; set; }
// public string artist { get; set; }
// public string[] artist_ids { get; set; }
// public string illustration_id { get; set; }
// public Image_Uris image_uris { get; set; }
