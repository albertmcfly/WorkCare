import './Hero.css'
import heroVideo from '../assets/videos/network red.mp4'

function Hero(){
    return(
        <section className="hero">
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={heroVideo} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        <div className="content container">
          <div className="back-descr">
            <h1>
              WORK<em className="care">CARE</em>: Revolucionando la Seguridad Laboral
            </h1>
            <p>
              Monitoreo automatizado en tiempo real para garantizar el uso adecuado del EPP
              y reducir riesgos en el trabajo.
            </p>
          </div>
          <div>
            <img src="assets/images/camaras-background.png" alt="Ilustración cámaras" className="cmbck" />
          </div>
        </div>
      </div>
    </section>
    )
}

export default Hero;