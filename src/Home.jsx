import Menu from "./Menu";
import FPerfil from "./Img/Perfil.jpg";
import "./Pagina.css";

function Home() {
    return (
        <div>
            <h1 className="ht"> Home</h1>
            <img src={FPerfil} className="circle" />
            <Menu />            
            <hr />
            <h2>Redes sociais</h2>
            <div className="container">
            <div className="item">
            <h2>Sobre eu</h2>
            </div>
            <div className="item2">
            <p> Teste</p>
            </div>
            </div>
        </div>
    )
}

export default Home;
