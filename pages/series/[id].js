import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link"
import React from "react"
import Pagina from "../../components/Pagina"
import apiFilmes from "../ApiConnect/axiosAPIFilms"
import { Card, Col, Row } from "react-bootstrap";
import { dateFormatter } from "../functions/functions";

const Detalhes = ({ filme, creditosFilmes }) => {

  return (
    <Pagina titulo={filme.name}>
      <Row>
        
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={(filme.poster_path == null) ? "https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=2000" : "https://image.tmdb.org/t/p/w500" + filme.poster_path} />
          </Card>
        </Col>

        <Col md={9}>
          <p><b>Data de Lançamento: </b>{dateFormatter(filme.first_air_date)}</p>
          <p><b>Ultimo episódio: </b>{dateFormatter(filme.last_air_date)}</p>
          <p><b>Número de episódios: </b>{filme.number_of_episodes} min</p>
          <p><b>Popularidade: </b>{filme.popularity}</p>
          <p><b>Status: </b>{filme.status}</p>
          <ul>
            {filme.genres.map(element => (
              <li>{element.name}</li>
            ))}
          </ul>
        </Col>
      </Row>

      <Row>
        <h2 className="pt-5">Atores</h2>
        {creditosFilmes.map(element => (
          <Col md={2}>
            <Link href={'/atores/' + element.id}>
              <Card.Img variant="top" title={element.name} src={(element.profile_path == null) ? "https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=2000" : "https://image.tmdb.org/t/p/w500" + element.profile_path} style={{ marginBottom: "20px" }}></Card.Img>
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

  const resultado = await apiFilmes.get("/tv/" + id + "?&language=pt-BR")
  const filme = resultado.data

  const resultadoCreditosFilmes = await apiFilmes.get("/tv/" + id + "/credits")
  const creditosFilmes = resultadoCreditosFilmes.data.cast


  return {
    props: { filme, creditosFilmes },
  }
}