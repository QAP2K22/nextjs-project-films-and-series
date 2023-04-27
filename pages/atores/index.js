import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Item from '../../components/Item'
import apiFilmes from '../ApiConnect/axiosAPIFilms'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagina from '../../components/Pagina';

const index = (props) => {

    return (
        <>
            <Pagina titulo="Atores do momento" title={"Qaflix"}>
                <Row md={3}>
                    {props.atores.map(item => (
                        <Col className='mt-3'>
                            <Item title={item.name} foto={(item.profile_path == null) ? "http://cdn4.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg" : `https://image.tmdb.org/t/p/w500${item.profile_path}`} titulo={item.name}  id={item.id} linkName="atores"></Item>
                        </Col>
                    ))}
                </Row>
            </Pagina>
        </>
    )
}

export default index


export async function getServerSideProps(context) {
    const resultado = await apiFilmes.get('/person/popular')
    const atores = resultado.data.results

    return {
        props: { atores },
    }
}