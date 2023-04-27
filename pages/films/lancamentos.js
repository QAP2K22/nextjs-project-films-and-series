import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Item from '../../components/Item'
import apiFilmes from '../ApiConnect/axiosAPIFilms'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagina from '../../components/Pagina';
import { dateFormatter } from '../functions/functions';

const index = ({filmes}) => {

    console.log(filmes)

    return (
        <>
            <Pagina titulo="Lançamentos" title={"Qaflix"}>
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