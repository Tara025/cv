import EBM from "/EBM.png";
import Kanban from "/Kanban.png";
import SCRUM from "/SCRUM.png";
import PO from "/PO.png";
import PAL from "/PAL.png";
import Beginner from "/Beginner.png";
import DevelopmentNewbie from "/DevelopmentNewbie.png";
import UserInterfaceDeveloper from "/UserInterfaceDeveloper.png";
import JavascriptDeveloper from "/JavascriptDeveloper.png";

function Certificates() {
  return (
    <div>
      <h6></h6>
      <a
        href="https://www.credly.com/badges/45d457c6-cf76-4968-ac5a-ebe51a9d5638"
        target="_blank"
      >
        <img src={SCRUM} className="certificat" alt="png" />
      </a>

      <a
        href="https://www.credly.com/badges/0deb913a-8353-487b-988b-433f2146f9d0"
        target="_blank"
      >
        <img src={PO} className="certificat" alt="png" />
      </a>

      <a
        href="https://www.credly.com/badges/13bcd930-b602-4055-8b65-a493d4f5d2d7"
        target="_blank"
      >
        <img src={Kanban} className="certificat" alt="png" />
      </a>

      <a
        href="https://www.credly.com/badges/bca6bd4f-7329-4192-8795-8faccafdd2e0?source=linked_in_profile"
        target="_blank"
      >
        <img src={EBM} className="certificat" alt="png" />
      </a>

      <a
        href="https://www.credly.com/badges/bca6bd4f-7329-4192-8795-8faccafdd2e0?source=linked_in_profile"
        target="_blank"
      >
        <img src={PAL} className="certificat" alt="png" />
      </a>
      <br />
      <a
        href=" https://api.eu.badgr.io/public/assertions/mdOHmcfkQN-KE4I4uJrf7g?identity__email=tara_jones%40web.de"
        target="_blank"
      >
        <img src={Beginner} className="logo" alt="png" />
      </a>

      <a
        href=" https://api.eu.badgr.io/public/assertions/e-aSbeFIQpiPzi9DT7lE8w?identity__email=tara_jones%40web.de"
        target="_blank"
      >
        <img src={DevelopmentNewbie} className="logo" alt="png" />
      </a>

      <a
        href=" https://api.eu.badgr.io/public/assertions/vT7uOlPYRRKQHVCbuXFEiQ?identity__email=tara_jones%40web.de"
        target="_blank"
      >
        <img src={UserInterfaceDeveloper} className="logo" alt="png" />
      </a>

      <a
        href="https://api.eu.badgr.io/public/assertions/eHvBVPdLRk-sa8_ksIxgTw?identity__email=tara_jones%40web.de"
        target="_blank"
      >
        <img src={JavascriptDeveloper} className="logo" alt="png" />
      </a>
    </div>
  );
}

export default Certificates