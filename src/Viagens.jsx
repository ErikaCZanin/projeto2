import Menu from "./Menu";
import FtGlobo from "./Img/Globo.png";
import "./Pagina.css";
import "./Viagens.css"

function Viagens() {
    return (
        <div>
            <h1>Viagens</h1>
            <div className="centered-container">
            <img src={FtGlobo} className="imgviagens"/>
            </div>
            <div className="container-menuv">
            <Menu />
            </div>
            <div className="aolado">
            <div className="cima">
            <h2>Curitiba</h2>
            <h2>Floripa</h2>
            <h2>Suiça</h2> 
            </div>
            <div className="baixo">
            <h2>Morretes</h2>
            <h2>Pomerode</h2>
            <h2>Outros</h2>
            </div>
        </div>
        </div>
    )
}

export default Viagens;
