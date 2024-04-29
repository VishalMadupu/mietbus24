import React from "react";
// import { Link } from 'react-router-dom';
// import logo from '../images/Logo.png';
import banner from '../images/banner.png';
import socialmedia1 from '../images/Ebene-2.png';
import socialmedia2 from '../images/Ebene-3.png';
import socialmedia3 from '../images/Ebene-4.png';
import '../App.css';

function Start() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <div className='Container'>
          <img src={logo} className='logo' alt='logo' />
          <div className="text">
            <p>info@mietbus24.com</p>&nbsp;
            <p>040 - 555 02 999 0</p>&nbsp;
          </div>
        </div>
        <div className='Menu'>
          <nav>
            <ul>
              <li><Link to="/Start">Start</Link></li>
              <li><Link to="/Busanfrage">Busanfrage</Link></li>
              <li><Link to="/leistungen">Leistungen</Link></li>
              <li><Link to="/Uber">Uber uns</Link></li>
              <li><Link to="/FAQ">FAQ</Link></li>
              <li><Link to="/Kontakt">Kontakt</Link></li>
            </ul>
          </nav>
        </div>
      </header> */}
      <img src={banner} alt='banner' className='banner' />
      <div className='Container'>
        <div className='Frame'>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/75Rx4YwTiFo?si=8T6TLPIVDqSdc001"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div id="box">
            <h1>
              Vom Achtsitzer <br />bis zum Luxusliner!
            </h1>
            <p >
              <strong>Starten Sie mit Ihrem Wunschbus durch! mietbus24.com ist Ihr
              erfahrener und zuverlässiger Partner für europaweite Busvermietungen
              und internationale Bustransfers.</strong> <br/><br/>Sie bestimmen, wohin und wie Sie
              verreisen möchten, mietbus24.com vermittelt Ihnen den dafür passenden
              Bus. Ob Kurztrip, Flughafentransfer, Ausflug, bequeme Bustour,
              Messetransfer, Kurzstrecke oder lange Reise Mieten Sie bei uns jede
              erdenkliche Form von Bussen für Ihre Busreise.<br/><br/>
              Sie bestimmen, wohin und wie Sie
              verreisen möchten, mietbus24.com vermittelt Ihnen den dafür passenden
              Bus. Ob Kurztrip, Flughafentransfer, Ausflug, bequeme Bustour,
              Messetransfer, Kurzstrecke oder lange Reise Mieten Sie bei uns jede
              erdenkliche Form von Bussen für Ihre Busreise.
            </p>
          </div>



          <div className="row row-cols-4">
            <div className="col-1">
              <h3>Ihre Vorteile auf einen Blick!</h3>
              <br />

              <i class="bi bi-check2"></i>&nbsp;
              <p>Flexible Angebote</p>  <br />


              <i class="bi bi-check2"></i>&nbsp;
              <p>Fairer Preis</p>  <br />


              <i class="bi bi-check2"></i>&nbsp;
              <p> Europaweit</p>   <br />


              <i class="bi bi-check2"></i>&nbsp;
              <p> Europaweit</p>    <br />


            </div>
            <div className="col-2">
              <h3>Wünschen Sie Beratung?</h3>
              <p>
                Gerne beraten wir Sie auch persönlich. Schreiben Sie uns oder
                rufen Sie uns an!
              </p>
              <button /*onClick={}*/>Anfrage stellen</button>
            </div>
            <div className="col-3">
              <h3>Unsere Partner</h3>
              <img src={socialmedia1} width='163px' height='50px' alt='media1' />
              <img src={socialmedia2} width='163px' height='50px' alt='media2' />
              <img src={socialmedia3} width='163px' height='50px' alt='media3' />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className='Container'>
          <div className="row-cols-4" id='footer'>
            <div className="col">
              <b>Reisen</b> Spanien, Italien, Ungarn oder Frankreich, ob
              Jugend-, Kl Spanien, Italien, Ungarn oder Frankreich, ob Jugend-, Kl
              <br /><br />
              <button /*onClick={}*/>Anfrage stellen</button>
            </div>
            <div className="col">
              <b>Reisen</b> Spanien, Italien, Ungarn oder Frankreich, ob
              Jugend-, Kl Spanien, Italien, Ungarn oder Frankreich, ob Jugend-, Kl
              <br /><br />
              <button /*onClick={}*/>Anfrage stellen</button>
            </div>
            <div className="col">
              <b>Reisen</b> Spanien, Italien, Ungarn oder Frankreich, ob
              Jugend-, Kl Spanien, Italien, Ungarn oder Frankreich, ob Jugend-, Kl
              <br /><br />
              <button /*onClick={}*/>Anfrage stellen</button>
            </div>
          </div>
        </div>
      </footer>
     
    </div>
  );
}
export default Start;
