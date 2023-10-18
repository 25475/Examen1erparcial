import { Itvshow, Iseason } from './interfaz';

const ITVshow: Itvshow[] = [
    {
        id: 1,
        name: 'Gema',
        director: 'Fernandez',
        investment:12,
        cast:'hhdhjjj',
        precio:25,
        seasons: [
            {
                id: 1,
                description: 'ssssssssss',
                tvshowid: 2,
                episodenumber: 5,
                precio:22
            },
            {
                id: 2, 
                description: 'hhhhhhhhhhhh',
                tvshowid: 5, 
                episodenumber: 5,
                precio:6
            },
            {
                id: 3,
                description: 'llllllllll',
                tvshowid: 5 ,
                episodenumber: 4,
                precio:20
            }
        ]
    }
];

const findtvshows = (Itvshow:string): Itvshow | undefined => void{

    const tvshows = ITVshow.filter (

        (tvshows:Itvshow) => {return tvshows.precio <25}
    )
    tvshows.forEach ((tvshows:Itvshow)=> 
    {
        console.log (tvshows)
    }
    )}