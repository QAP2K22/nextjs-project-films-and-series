import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link"
import React, { useState } from "react"
import Pagina from "../../components/Pagina"
import apiDeputados from "../ApiConnect/axiosAPIDeputados"
import { Accordion, Button, Card, Col, Modal, Row, Table } from "react-bootstrap";
import { dateFormatter } from "../functions/functions";

const Detalhes = ({ deputados }) => {

  return (
    <Pagina titulo="Despesas" title={"Deputados"} navBarLink="/deputados" navBarItem="deputados">
      {deputados.map(element => (
        <Accordion key={element.codDocumento} defaultActiveKey={element.codDocumento}>
        <Accordion.Item eventKey={element.codDocumento}>
          <Accordion.Header>{`#${element.codDocumento} - ${element.nomeFornecedor} (${element.tipoDespesa})`}</Accordion.Header>
          <Accordion.Body>
            {`Ano: ${element.ano}`} <br/>
            {`Cnpj/Cpf fornecedor: ${element.cnpjCpfFornecedor}`}<br/>
            {`Código documento: ${element.codDocumento}`}<br/>
            {`Código lote: ${element.codLote}`}<br/>
            {`Código tipo documento: ${element.codTipoDocumento}`}<br/>
            {`Data de emissão${element.dataDocumento}`}<br/>
            {`Mês: ${element.mes}`}<br/>
            {`Nome fornecedor: ${element.nomeFornecedor}`}<br/>
            {`Número doumento: ${element.numDocumento}`}<br/>
            {`Número de ressarcimento: ${element.numRessarcimento}`}<br/>
            {`Nº parcelas: ${element.parcela}`}<br/>
            {`Tipo de despesa: ${element.tipoDespesa}`}<br/>
            {`Tipo de documento: ${element.tipoDocumento}`}<br/>
            <a href={element.urlDocumento}>Documento</a><br/>
            {`Documento R$${element.valorDocumento}`}<br/>
            {`Valor Glosa R$${element.valorGlosa}`}<br/>
            {`Valor Liquido R$${element.valorLiquido}`}<br/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      ))}


    
    </Pagina>
  )
}

export default Detalhes
export async function getServerSideProps(context) {
  const id = context.params.id

  const resultado = await apiDeputados.get(`/deputados/${id}/despesas`)
  const deputados = resultado.data.dados

  return {
    props: { deputados },
  }
}