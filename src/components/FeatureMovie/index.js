import React from "react";
import './FeatureMovie.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
export default ({item}) => {
    console.log(item)

    let firstDate = new Date(item.release_date)
    let Duration = new Date(item.runtime)
    let genres = []

    const converter = (minutos) => {
        const hours = Math.floor(minutos/ 60);          
        const min = minutos % 60;
        const texthours = (`00${hours}`).slice(-2);
        const textmin = (`00${min}`).slice(-2);
        
        return `${texthours }:${textmin}`;
      };

    for(let i in item.genres) {
        genres.push( item.genres[i].name )
    }

    let desc = item.overview
    if(desc.length > 225) {
        desc = desc.substring(0, 225)+'...'
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.title}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} Pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{converter(Duration)}</div>
                    </div>
                    <div className="featured--desc">{desc}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className='featured--watch'><PlayArrowIcon style={{fontsize: 30}}/> Assistir</a>
                        <a href={`/list/add/${item.id}`} className='featured--mylist'><AddIcon style={{fontsize: 30}}/> Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gênero{item.genres.length !== 1 ? 's' : ''}:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}