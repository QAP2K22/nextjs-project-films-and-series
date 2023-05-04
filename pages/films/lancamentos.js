import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import apiFilmes from '../ApiConnect/axiosAPIFilms'
import Row from 'react-bootstrap/Row';
import Pagina from '../../components/Pagina';

const index = ({ filmes }) => {

    return (
        <>
            <Pagina titulo="Lançamentos" title={"Qaflix"} navBarLink="/films" navBarItem="films">
                <Row md={3}>
                  
                </Row>
            </Pagina>
        </>
    )
}

export default index


export async function getServerSideProps(context) {
    const resultado = await apiFilmes.get('/movie/latest')
    const filmes = resultado.data

    return {
        props: { filmes },
    }
}