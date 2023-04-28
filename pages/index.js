import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '../components/Pagina'
import Item from '../components/Item';

const index = () => {
  return (
    <div>
      <Pagina titulo="Página Inicial" title="Project QAP - NextJS">
        <Item titulo="Filmes" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb54B4HNIUvKTs87zmsL4YMzmIIL4JiRddlxYR5ClPyZaSyu2KeFe6vYABmLSbzTShB9w&usqp=CAU" linkName="/films"></Item>
        <Item titulo="Séries" foto="https://png.pngtree.com/png-clipart/20220116/original/pngtree-linear-cartoon-color-retro-tv-series-png-image_7113201.png" linkName="/series"></Item>
        <Item titulo="Deputados" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-Mhtq_bxPumqnaGPgnxcgr4eSoOlmL_Rtw&usqp=CAU" linkName="/deputados"></Item>
        <Item titulo="Array" foto="https://hpneo.dev/assets/images/arrays-js.png" linkName="/array"></Item>
      </Pagina>

    </div>
  )
}

export default index