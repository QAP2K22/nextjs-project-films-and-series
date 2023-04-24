import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link"
import React from "react"
import Pagina from "../../components/Pagina"
import apiFilmes from "../ApiConnect/axiosAPIFilms"
import { Card, Col, Row } from "react-bootstrap";
import { dateFormatter,timeFormatter } from "../functions/functions";

const Detalhes = ({ series, creditosSeries }) => {

  return (
    <Pagina titulo={series.name}>
      <Row>
        
        <Col md={3}>
          <Card>
            <Card.Img variant="top" title={series.name} src={(series.poster_path == null) ? "https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=2000" : `https://image.tmdb.org/t/p/w500${series.poster_path}`} />
          </Card>
        </Col>

        <Col md={9}>
          <p><b>Data de Lançamento: </b>{dateFormatter(series.first_air_date)}</p>
          <p><b>Último episódio: </b>{dateFormatter(series.last_air_date)}</p>
          <p><b>Número de episódios: </b>{series.number_of_episodes}</p>
          <p><b>Popularidade: </b>{series.popularity}</p>
          <p><b>Status: </b>{series.status}</p>
          <ul>
            {series.genres.map(element => (
               <Link href={{
                pathname: `/generosSeries/${element.id}`,
                query: { name: element.name },
              }}>
              <li>{element.name}</li>
            </Link>
            ))}
          </ul>
        </Col>
      </Row>

      <Row>
        <h2 className="pt-5">Atores</h2>
        {creditosSeries.map(element => (
          <Col md={2}>
            <Link href={`/atores/${element.id}`}>
              <Card.Img variant="top" title={element.name} src={(element.profile_path == null) ? "https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=2000" : `https://image.tmdb.org/t/p/w500${element.profile_path}`} style={{ marginBottom: "20px" }}></Card.Img>
            </Link>
          </Col>
        ))}
      </Row>
    </Pagina>
  )
}

export default Detalhes
export async function getServerSideProps(context) {
  const id = context.params.id

  const resultado = await apiFilmes.get(`/tv/${id}"?&language=pt-BR`)
  const series = resultado.data

  const resultadoCreditosSeries = await apiFilmes.get(`/tv/${id}/credits`)
  const creditosSeries = resultadoCreditosSeries.data.cast


  return {
    props: { series, creditosSeries },
  }
}