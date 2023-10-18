export interface Itvshow {
    id : number;
    name : string;
    director : string ;
    investment:number;
    cast:string;
    precio:number;
    seasons:Iseason[];
}

export interface Iseason {
    id : number ;
    description : string ;
    tvshowid:number;
    episodenumber : number ;
    precio:number;
}