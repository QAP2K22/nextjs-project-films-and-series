import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import { Col, Row } from "react-bootstrap";
import Item from "../../components/Item";
import Pagina from '../../components/Pagina'
import apiDeputados from "../ApiConnect/axiosAPIDeputados";
import { dateFormatter } from "../functions/functions";

const index = (props) => {
    return (
        <>
            <Pagina titulo="Câmara Legislativa" title="Deputados">

                <h2 className="pt-5">Deputados</h2>
                <Row md={3}>
                    {props.Deputados.map(item => (
                        <Col className='mt-3'>
                            <Item title={item.nome} foto={(item.urlFoto == null) ? "http://cdn4.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg" : `${item.urlFoto}`} titulo={item.nome} texto={`Inicio: ${dateFormatter(item.dataInicio)}`} data={`Fim: ${dateFormatter(item.dataFim)}`} id={item.id} linkName=""></Item>
                        </Col>
                    ))}
                </Row>
            </Pagina>

        </>
    )
}

export default index


export async function getServerSideProps(context) {
    const resultadoDeputados = await apiDeputados.get('/deputados')
    const Deputados = resultadoDeputados.data.dados

    return {
        props: {Deputados},
    }
}