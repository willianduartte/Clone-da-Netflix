import React, { useEffect, useState } from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(()=>{
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      // Pegando o Featured
      let trending = list.filter(i=>i.slug === 'adventure', 'horror')
      let randonChosen = Math.floor(Math.random() * (trending[0].items.results.length - 1))
      let Chosen = trending[0].items.results[randonChosen]
      let ChosenInfo = await Tmdb.getMovieInfo(Chosen.id, 'movie')
      setFeaturedData(ChosenInfo)
    }

    loadAll()
  }, [])

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className='page'>

      <Header black={blackHeader}/>

      {featuredData && 
        <FeatureMovie item={featuredData}/>
      }

      <section className='listas'>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
          Feito com Amor pela <a href='https://b7web.com.br/'>B7Web</a><br/>
          Refeito por <a href='https://github.com/willianduartte'>Willian Duarte</a><br/>
          Direitos de imagens para <a href='https://www.netflix.com/br/login'>Netflix</a><br/>
          Dados pegos do site <a href='https://www.themoviedb.org/?language=pt-BR'>Themoviedb</a>
      </footer>

      {movieList.length <= 0 && 
        <div className='loading'>
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt='Carregando'></img>
      </div>
      }
      
    </div>
  )
}