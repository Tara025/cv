import Certificates from "./components/Certificates";
import Gebrauchsanweisung from "./components/Gebrauchsanweisung";
import me from "/me.jpeg";
import linkedin from "/linkedin.png";
import "./App.css";

function App() {
  return (
    <>
      <Gebrauchsanweisung />
      <h4>Für meine berufliche Zukunft wünsche mir ... </h4>
      
      <ol>
        <li>
        ...in einem guten Team zu arbeiten!
      </li>
      <li>
        ...den Job zu finden, der mich fordert und gleichzeitig erfüllt!
      </li>
      <li>
        ...nie aufzuhören mich weiterzubilden!
      </li>
      <li>
        ...Umgang auf Augenhöhe!
      </li>
      </ol>
      <div className="picLogo">
        <div>
          <img src={me} className="logo" alt="jpeg" />
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/peggy-janocha-526b5a9"
            target="_blank"
          >
            <img src={linkedin} className="logo" alt="png" />
          </a>
        </div>
      </div>
      <Certificates />
    </>
  );
}

export default App;
