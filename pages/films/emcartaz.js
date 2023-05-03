import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import apiFilmes from '../ApiConnect/axiosAPIFilms'
import Pagina from '../../components/Pagina';
import ItemGaleria from '@/components/ItemGaleria';

const index = ({ films }) => {

    return (
        <>
            <Pagina titulo="Filmes em cartaz" title={"Qaflix"} navBarLink="/films" navBarItem="films">
                <ItemGaleria
                    arrayName={films}
                    photoName="backdrop_path"
                    titleName="original_title"
                    primaryText="Data de lançamento:"
                    primaryTextFormatter="dateFormatter"
                    primaryTextName="release_date"
                    secondaryText="Popularidade:"
                    secondaryTextName="vote_average"
                    linkId="id"
                    linkName="films"
                />

            </Pagina>
        </>
    )
}

export default index


export async function getServerSideProps(context) {
    const resultado = await apiFilmes.get('/movie/now_playing?&language=pt-BR')
    const films = resultado.data.results

    return {
        props: { films },
    }
}