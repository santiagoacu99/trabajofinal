import React from "react";
import '../notebooks'
import '../css/placas.css'
import Notebooks from '../assets/notebooks.webp'
import Notebooksp from "../notebooks";
import notebookG from "../assets/notebookGaming.png"
import preciosN from "../assets/preciosNotebooks.png"

const Notebooks1 = () => {
    return (
        <>
            <div >
                <div className='graficas'>
                    <img src={Notebooks} alt="publicg" />
                </div>
                <div className='publicText'>
                    <h2>Compra tu notebook</h2>
                    <p>¡Ey! ¿Querés llevar tu experiencia de juego con vos a todos lados? ¡Entonces necesitás nuestras notebooks de alta calidad! Diseñadas especialmente para los gamers más exigentes, nuestras notebooks cuentan con la tecnología más avanzada y una potente placa de video que te permitirá disfrutar de tus juegos favoritos en cualquier lugar y en cualquier momento.
                        Ya sea que estés en el bondi, yendo al laburo o en una sala de espera, con nuestras notebooks vas a poder jugar a tus juegos sin límites. <br />Y no te preocupes por el rendimiento, nuestras notebooks te brindan la potencia que necesitás para jugar con la máxima calidad gráfica y rapidez.
                        No te quedes con una computadora vieja y pesada. Elegí una notebook de alta calidad y llevá tu experiencia de Gaming con vos a todos lados. ¡No esperes más, chequeá nuestra selección de notebooks de última generación y llevá tu experiencia de gaming al siguiente nivel en cualquier momento y en cualquier lugar!</p>
                </div>
            </div>
            <div className='cardcontainer'>
                {Notebooksp.map((Notebooksp) => {
                    const handleBuy = () =>{
                        alert(`compra realizada: ${Notebooksp.modelo}`)
                    }
                    return (
                        <div className='cards'>
                            <div className='img-container'>
                                <img src={Notebooksp.img} alt={Notebooksp.modelo} />
                            </div>
                            <div className='modelo-container'>
                                <h2>{Notebooksp.modelo}</h2>
                                <h3>${Notebooksp.precio}</h3>
                            </div>
                            <button onClick={handleBuy}>comprar</button>
                        </div>

                    );
                }
                )
                }
            </div>
            <div className='marcas-container'>
                <figure className='marcas'>
                    <img src={notebookG} alt="NVIDIA" />
                    <h3>Notebooks gamers</h3>
                </figure>
                <figure className='marcas'>
                    <img src={preciosN} alt="AMD" />
                    <h3>Los mejores precios en notebooks</h3>
                </figure>

            </div>
       
        </>

    )
}
export default Notebooks1;