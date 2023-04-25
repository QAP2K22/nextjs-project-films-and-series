import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Pagina from '../components/Pagina'
import Item from '../components/Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button } from 'react-bootstrap';


const veiculos = [
  {
    Nome: "fusion",
    Montadora: "sdf",
    Imagem: "https://cdn.autopapo.com.br/box/uploads/2019/02/11194010/ford-fusion-2019-titanium-7.jpg",
    Ano: 125000,
  },
  {
    Nome: "corolla",
    Montadora: "df",
    Imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/582b6f3c0e216302700e8c4fcorolla-dynamic-1.jpg?quality=70&strip=all",
    Ano: 138000,
  },
  {
    Nome: "punto",
    Montadora: "fd",
    Imagem: "https://http2.mlstatic.com/D_NQ_NP_997251-MLB49024061235_022022-O.jpg",
    Ano: 88000,
  },
  {
    Nome: "jetta",
    Montadora: "dfsd",
    Imagem: "https://s2.glbimg.com/6wBFAsvZqImuXxP-PZd9vGeFJF4=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/w/D/Jw1hgsQLqdLEv6ntglRw/2019-08-09-jettagli.jpg",
    Ano: 180000,
  },
  {
    Nome: "actros 2660",
    Montadora: "sdf",
    Imagem: "https://transportemundial.com.br/wp-content/uploads/2013/11/20200923_526d94e215b24334b68282b3131a5a66_novo-actros-f-2-1536x1024.jpg",
    Ano: 350875,
  }
]

const array = () => {
  return (
    <div>
      <Pagina titulo="Página Array">
      <Row md={3}>
          {veiculos.map(element => (
            <Col className='mt-3'>
              <Card>
                <Card.Img variant="top" src={element.Imagem} />
                <Card.Body>
                  <Card.Title>{element.Nome} - {element.Montadora}</Card.Title>
                  <Card.Text>
                    Ano: <b>{element.Ano}</b>

                    <Button variant="primary">Detalhes</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Pagina>
    </div>
  )
}

export default array


/*   
const veiculos = [
   {
    Nome:"fusion",
    Montadora: "ford",
    Imagem:"https://cdn.autopapo.com.br/box/uploads/2019/02/11194010/ford-fusion-2019-titanium-7.jpg",
    Preco:125000,
    Texto:"Sedã chega, no que deve ser sua última geração, com teto solar de série e versão topo de linha híbrida - preços vão de R$ 149 mil a R$ 182 mil"},
   {
    Nome:"corolla",
    Montadora: "ford",
    Imagem:"https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/582b6f3c0e216302700e8c4fcorolla-dynamic-1.jpg?quality=70&strip=all",
    Preco:138000,
    Texto:"Por R$ 95.800, versão esportivada é bem equipada, mas perde atratividade perante os concorrentes"},
   {
    Nome:"punto",
    Montadora: "ford",
    Imagem:"https://http2.mlstatic.com/D_NQ_NP_997251-MLB49024061235_022022-O.jpg",
    Preco:88000,
    Texto:"Fiat Punto Punto ATTRACTIVE ITALIA 1.4 F.Flex 8V 5p"},
   {
    Nome:"jetta",
    Montadora: "ford",
    Imagem:"https://s2.glbimg.com/6wBFAsvZqImuXxP-PZd9vGeFJF4=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/w/D/Jw1hgsQLqdLEv6ntglRw/2019-08-09-jettagli.jpg",
    Preco:180000,
    Texto:"Volkswagen Jetta GLI é preparado e ultrapassa o Golf GTI"},
   {
    Nome:"actros 2660",
    Montadora: "ford",
    Imagem:"https://transportemundial.com.br/wp-content/uploads/2013/11/20200923_526d94e215b24334b68282b3131a5a66_novo-actros-f-2-1536x1024.jpg",
    Ano:350875,
    Texto:"A cabine do novo Mercedes-Benz Actros desenvolvida para o Brasil vai equipar o modelo Actros F começou a ser lançada no início de 2021 em 24 países, incluindo os alguns da União Europeia, pela matriz da empresa."}
]



{veiculos.map(element => (
            <Item carro={element.Nome} foto={element.Imagem} preco={element.Preco}  texto={element.Texto}/>
          ))} */