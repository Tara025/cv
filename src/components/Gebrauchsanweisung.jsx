import { FaTools } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { CgDanger } from "react-icons/cg";
import {BsCloudRainFill} from "react-icons/bs";
import {AiOutlineStop} from "react-icons/ai";
import {MdBackHand} from "react-icons/md";

function Gebrauchsanweisung() {
  return (
    <> 
    <div className="container">
      <h3>
        <FaTools />
        &nbsp;Gebrauchsanleitung <br></br>Peggy Janocha 2.0
      </h3>
     
        <br />
        <div className="container-box">
          <div className="box">
            <div className="icon">
              <GiCheckMark />
            </div>
            <div className="text">
              <p>DAS IST MEIN STIL</p>
              <p>Motivierend im Team und 100 % Hands on Mentalität</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              {/* Icon für KEINE GEDULD */}
              <AiOutlineStop />
            </div>
            <div className="text">
              <p>KEINE GEDULD</p>
              <p>Gib mir Zeit und alles wird gut.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              {/* Icon für SO KANN MAN MIR HELFEN */}
              <MdBackHand />
            </div>
            <div className="text">
              <p>SO KANN MAN MIR HELFEN</p>
              <p>Wenn ich zu ruhig werde, kannst Du gern nachfragen warum.</p>
            </div>
          </div>
        </div>
        <div className="container-box">
          <div className="box">
            <div className="icon">
              <CgDanger />
            </div>
            <div className="text">
              <p>DAS IST MIR WICHTIG</p>
              <p>Sei immer loyal & ehrlich, dann werden wir beste Freunde.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              {/* Icon für KOMMUNIKATION */}
              <FaTools />
            </div>
            <div className="text">
              <p>KOMMUNIKATION</p>
              <p>Ich telefoniere gern, aber Du kannst mir auch schreiben!</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              {/* Icon für MISSVERSTÄNDNISSE */}
              <BsCloudRainFill />
            </div>
            <div className="text">
              <p>MISSVERSTÄNDNISSE</p>
              <p>Entstehen durch fehlende Kommunikation!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gebrauchsanweisung;
