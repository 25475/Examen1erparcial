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

interface TVShowCallback {
    (filteredTVShows: Itvshow[]): void;
}

function filterTVShowsByInvestment(tvshows: Itvshow[], referencial: number, callback: TVShowCallback) {
    const filteredTVShows = tvshows.filter(tvshow => tvshow.investment < referencial);
    callback(filteredTVShows);
}

function displayFilteredTVShows(filteredTVShows: Itvshow[]) {
    if (filteredTVShows.length === 0) {
        console.log("No TV shows found with investment lower than the referencial.");
    } else {
        console.log("TV Shows with investment lower than the referencial:");
        filteredTVShows.forEach(tvshow => {
            console.log(`Name: ${tvshow.name}, Investment: ${tvshow.investment}`);
        });
    }
}

const referencial = 20;
filterTVShowsByInvestment(ITVshow, referencial, displayFilteredTVShows);