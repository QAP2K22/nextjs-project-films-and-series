import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Item from '../../components/Item'
import apiFilmes from '../ApiConnect/axiosAPIFilms'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagina from '../../components/Pagina';
import { dateFormatter } from '../functions/functions';

const index = ({filmes}) => {

    return (
        <>
            <Pagina titulo="Lançamentos">
                <Row md={3}>
                    {filmes.map(item => (
                        <Col className='mt-3'>
                            <Item title={item.original_title} foto={(item.backdrop_path == null) ? "http://cdn4.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg" : `https://image.tmdb.org/t/p/w500${item.backdrop_path}`} titulo={item.original_title} texto={`Lançamento: ${dateFormatter(item.release_date)}`} data={`Nota: ${item.vote_average}`} id={item.id} linkName="films"></Item>
                        </Col>
                    ))}
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