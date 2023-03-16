import { Datum } from "./Datum";

export interface CardModel {
    _object:string;
    total_cards:number;
    has_more:boolean;
    data:Datum[];
}
