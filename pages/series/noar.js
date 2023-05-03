import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import apiFilmes from '../ApiConnect/axiosAPIFilms'
import Pagina from '../../components/Pagina';
import ItemGaleria from '@/components/ItemGaleria';

const index = ({ filmes }) => {

    return (
        <>
            <Pagina titulo="Séries no ar" title={"Qaflix"} navBarLink="/series" navBarItem="films">
                <ItemGaleria
                    arrayName={filmes}
                    photoName="backdrop_path"
                    titleName="name"
                    primaryText="Data de lançamento:"
                    primaryTextFormatter="dateFormatter"
                    primaryTextName="first_air_date"
                    secondaryText="Popularidade:"
                    secondaryTextName="vote_average"
                    linkId="id"
                    linkName="series"

                />
            </Pagina>
        </>
    )
}

export default index
export async function getServerSideProps(context) {
    const resultado = await apiFilmes.get('/tv/on_the_air?&language=pt-BR')
    const filmes = resultado.data.results

    return {
        props: { filmes },
    }
}