const API_KEY = '5cbcce7817f843dbfc6bf3131554a262'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'animation',
                title: 'Filmes de Animações',
                items: await basicFetch(`/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'family',
                title: 'Para a Familia',
                items: await basicFetch(`/discover/movie?with_genres=10751&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'fantasy',
                title: 'Fantasia',
                items: await basicFetch(`/discover/movie?with_genres=14&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'adventure',
                title: 'Aventura',
                items: await basicFetch(`/discover/movie?with_genres=12&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'drama',
                title: 'Drama',
                items: await basicFetch(`/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'music',
                title: 'Musica',
                items: await basicFetch(`/discover/movie?with_genres=10402&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action & adventure series',
                title: 'Séries de Ação e Aventura',
                items: await basicFetch(`/discover/tv?with_genres=10759&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy series',
                title: 'Séries de Comédia',
                items: await basicFetch(`/discover/tv?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'kids series',
                title: 'Para as Crianças',
                items: await basicFetch(`/discover/tv?with_genres=10762&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'drama series',
                title: 'Séries de Drama',
                items: await basicFetch(`/discover/tv?with_genres=18&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'mystery series',
                title: 'Séries de Mistério',
                items: await basicFetch(`/discover/tv?with_genres=9648&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'war & politcs series',
                title: 'Séries de Guerra e Politica',
                items: await basicFetch(`/discover/tv?with_genres=10768&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {}

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break
                default:
                    info = null
                break
            }
        }

        return info
    }   
}