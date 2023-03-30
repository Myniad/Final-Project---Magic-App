﻿//https://github.com/Myniad/Final-Project---Magic-App
namespace Final_Project___Magic_App.Models
{

    public class CardModel
    {
        public string _object { get; set; }
        public int total_cards { get; set; }
        public bool has_more { get; set; }
        public Datum[] data { get; set; }
    }

    public class Datum
    {
        public string _object { get; set; }
        public string id { get; set; }
        public string oracle_id { get; set; }
        public object[] multiverse_ids { get; set; }
        public int tcgplayer_id { get; set; }
        public string name { get; set; }
        public string lang { get; set; }
        public string released_at { get; set; }
        public string uri { get; set; }
        public string scryfall_uri { get; set; }
        public string layout { get; set; }
        public bool highres_image { get; set; }
        public string image_status { get; set; }
        public Image_Uris image_uris { get; set; }
        public string mana_cost { get; set; }
        public float cmc { get; set; }
        public string type_line { get; set; }
        public Card_Face[] card_faces { get; set; }
        public string oracle_text { get; set; }
        public string[] colors { get; set; }
        public string[] color_identity { get; set; }
        public object[] keywords { get; set; }
        public Legalities legalities { get; set; }
        public string[] games { get; set; }
        public bool reserved { get; set; }
        public bool foil { get; set; }
        public bool nonfoil { get; set; }
        public string[] finishes { get; set; }
        public bool oversized { get; set; }
        public bool promo { get; set; }
        public bool reprint { get; set; }
        public bool variation { get; set; }
        //public string set_id { get; set; }
        public string set { get; set; }
        //public string set_name { get; set; }
        public string set_type { get; set; }
       // public string set_uri { get; set; }
        public string set_search_uri { get; set; }
        public string scryfall_set_uri { get; set; }
        public string rulings_uri { get; set; }
        public string prints_search_uri { get; set; }
        public string collector_number { get; set; }
        public bool digital { get; set; }
        public string rarity { get; set; }
        public string card_back_id { get; set; }
        public string artist { get; set; }
        public string[] artist_ids { get; set; }
        public string illustration_id { get; set; }
        public string border_color { get; set; }
        public string frame { get; set; }
        public bool full_art { get; set; }
        public bool textless { get; set; }
        public bool booster { get; set; }
        public bool story_spotlight { get; set; }
        public int edhrec_rank { get; set; }
        public int penny_rank { get; set; }
        public Prices prices { get; set; }
        public Related_Uris related_uris { get; set; }
        public Purchase_Uris purchase_uris { get; set; }
        public string power { get; set; }
        public string toughness { get; set; }
        public string flavor_text { get; set; }
    }

    public class Image_Uris
    {
        public string small { get; set; }
        public string normal { get; set; }
        public string large { get; set; }
        public string png { get; set; }
        public string art_crop { get; set; }
        public string border_crop { get; set; }
    }

    public class Legalities
    {
        public string standard { get; set; }
        public string future { get; set; }
        public string historic { get; set; }
        public string gladiator { get; set; }
        public string pioneer { get; set; }
        public string explorer { get; set; }
        public string modern { get; set; }
        public string legacy { get; set; }
        public string pauper { get; set; }
        public string vintage { get; set; }
        public string penny { get; set; }
        public string commander { get; set; }
        public string oathbreaker { get; set; }
        public string brawl { get; set; }
        public string historicbrawl { get; set; }
        public string alchemy { get; set; }
        public string paupercommander { get; set; }
        public string duel { get; set; }
        public string oldschool { get; set; }
        public string premodern { get; set; }
        public string predh { get; set; }
    }

    public class Prices
    {
        public string usd { get; set; }
        public string usd_foil { get; set; }
        public string usd_etched { get; set; }
        public object eur { get; set; }
        public object eur_foil { get; set; }
        public object tix { get; set; }
    }

    public class Related_Uris
    {
        public string tcgplayer_infinite_articles { get; set; }
        public string tcgplayer_infinite_decks { get; set; }
        public string edhrec { get; set; }
    }

    public class Purchase_Uris
    {
        public string tcgplayer { get; set; }
        public string cardmarket { get; set; }
        public string cardhoarder { get; set; }
    }

    public class Card_Faces
    {
        public Card_Face front { get; set; }
        public Card_Face back { get; set; }

    }

    public class Card_Face
    {
        public string _object { get; set; }
        public string name { get; set; }
        public string mana_cost { get; set; }
        public string type_line { get; set; }
        public string oracle_text { get; set; }
        public string[] colors { get; set; }
        public string artist { get; set; }
        public string[] artist_ids { get; set; }
        public string illustration_id { get; set; }
        public Image_Uris image_uris { get; set; }
        //somewhere we are using the wrong data type
    }

}
