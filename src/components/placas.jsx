
import '../productos'
import '../css/placas.css'
import PlacasDeVideo from "../productos";
import publicg from '../assets/publicg.webp'
import NVIDIA from '../assets/NVIDIA.webp'
import AMD from '../assets/AMD.png'

const Placas = () => {

    return (
        <>

            <div className='public-conteiner'>
                <div className='graficas'>
                    <img src={publicg} alt="publicg" />
                </div>
                <div className='publicText'>
                    <h2>Placas De Video</h2>
                    <p>Lo ultimo en innovación de tarjetas gráficas, con la tecnología de Nvidia y AMD ¡dale una experiencia única a tu juego!</p>
                </div>
            </div>
            <div className='cardcontainer'>
                {PlacasDeVideo.map((PlacasDeVideo) => {
                    const handleBuy = () =>{
                        alert(`compra realizada: ${PlacasDeVideo.modelo}`)
                    }
                    return (
                        <div className='cards'>
                            <div className='img-container'>
                                <img src={PlacasDeVideo.img} alt={PlacasDeVideo.modelo} />
                            </div>
                            <div className='modelo-container'>
                                <h2>{PlacasDeVideo.modelo}</h2>
                                <h3>${PlacasDeVideo.precio}</h3>
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
                    <img src={NVIDIA} alt="NVIDIA" />
                    <h3>Placas de Video NVIDIA</h3>
                </figure>
                <figure className='marcas'>
                    <img src={AMD} alt="AMD" />
                    <h3>Placas de Video AMD</h3>
                </figure>

            </div>
        </>
    )
}
export default Placas;
