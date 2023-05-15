import React from 'react'
import Pagina from '../../components/Pagina'
import apiDeputados from "../ApiConnect/axiosAPIDeputados";
import ItemGaleria from "@/components/ItemGaleria";

const index = ({ Deputados }) => {
    return (
        <>
            <Pagina titulo="Câmara Legislativa" title="Deputados">
                <ItemGaleria
                    rowMd={4}
                    titleText="Câmara Legislativa"
                    arrayName={Deputados}
                    photoName="urlFoto"
                    titleName="nome"
                    linkId="id"
                    linkName="deputados"
                    linkPlaceHolder="Detalhes"
                />
            </Pagina>

        </>
    )
}

export default index


export async function getServerSideProps(context) {
    const resultadoDeputados = await apiDeputados.get('/deputados')
    const Deputados = resultadoDeputados.data.dados

    return {
        props: { Deputados },
    }
}