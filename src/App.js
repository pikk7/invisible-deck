import "./App.css";
import PatternLock from "react-pattern-lock";
import { useState } from "react";
import Card2S from "./img/2S.png";
import Card2H from "./img/2H.png";
import Card2C from "./img/2C.png";
import Card2D from "./img/2D.png";
import Card3S from "./img/3S.png";
import Card3H from "./img/3H.png";
import Card3C from "./img/3C.png";
import Card3D from "./img/3D.png";
import Card4S from "./img/4S.png";
import Card4H from "./img/4H.png";
import Card4C from "./img/4C.png";
import Card4D from "./img/4D.png";
import Card5S from "./img/5S.png";
import Card5H from "./img/5H.png";
import Card5C from "./img/5C.png";
import Card5D from "./img/5D.png";
import Card6S from "./img/6S.png";
import Card6H from "./img/6H.png";
import Card6C from "./img/6C.png";
import Card6D from "./img/6D.png";
import Card7S from "./img/7S.png";
import Card7H from "./img/7H.png";
import Card7C from "./img/7C.png";
import Card7D from "./img/7D.png";
import Card8S from "./img/8S.png";
import Card8H from "./img/8H.png";
import Card8C from "./img/8C.png";
import Card8D from "./img/8D.png";
import Card9S from "./img/9S.png";
import Card9H from "./img/9H.png";
import Card9C from "./img/9C.png";
import Card9D from "./img/9D.png";
import Card10S from "./img/10S.png";
import Card10H from "./img/10H.png";
import Card10C from "./img/10C.png";
import Card10D from "./img/10D.png";
import CardAS from "./img/AS.png";
import CardKS from "./img/KS.png";
import CardJS from "./img/JS.png";
import CardQS from "./img/QS.png";
import CardAH from "./img/AH.png";
import CardKH from "./img/KH.png";
import CardJH from "./img/JH.png";
import CardQH from "./img/QH.png";
import CardAC from "./img/AC.png";
import CardKC from "./img/KC.png";
import CardJC from "./img/JC.png";
import CardQC from "./img/QC.png";
import CardAD from "./img/AD.png";
import CardKD from "./img/KD.png";
import CardJD from "./img/JD.png";
import CardQD from "./img/QD.png";

function App() {
  const [state, setState] = useState({
    path: [],
    isLoading: false,
    error: false,
    success: false,
    disabled: false,
    size: 4,
  });

  const [cardString, setCardString] = useState("7S");
  /*
  const onReset = () => {
    setState({
      path: [],
      isLoading: false,
      error: false,
      success: false,
      disabled: false,
      size: 4,
    });
  };*/
  const onChange = (path) => {
    setState({ ...state, path: [...path] });
  };

  const numbToPic = (num) => {
    switch (num) {
      case 1:
        return "A";
      case 11:
        return "J";
      case 12:
        return "Q";
      case 13:
        return "K";
      default:
        return num;
    }
  };

  const onFinish = () => {
    setState({ ...state, isLoading: true });
    let image = "S";
    let last = state.path[state.path.length - 1];
    switch (state.path[0]) {
      case 0:
        image = "S";
        break;
      case 3:
        image = "H";
        break;
      case 12:
        image = "C";
        break;
      case 15:
        image = "D";
        break;

      default:
        return "S";
    }
    setCardString("card" + numbToPic(last) + image);
    setTimeout(() => {
      setState({ ...state, success: true });
    }, 1000);
  };

  const returnCompinents = (name) => {
    console.log(name);
    switch (name) {
      case "card2S":
        return (
          <img
            src={Card2S}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card2H":
        return (
          <img
            src={Card2H}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card2C":
        return (
          <img
            src={Card2C}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card2D":
        return (
          <img
            src={Card2D}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card3S":
        return (
          <img
            src={Card3S}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card3H":
        return (
          <img
            src={Card3H}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card3C":
        return (
          <img
            src={Card3C}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card3D":
        return (
          <img
            src={Card3D}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card4S":
        return (
          <img
            src={Card4S}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card4H":
        return (
          <img
            src={Card4H}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card4C":
        return (
          <img
            src={Card4C}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card4D":
        return (
          <img
            src={Card4D}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card5S":
        return (
          <img
            src={Card5S}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card5H":
        return (
          <img
            src={Card5H}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card5C":
        return (
          <img
            src={Card5C}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card5D":
        return (
          <img
            src={Card5D}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card6S":
        return (
          <img
            src={Card6S}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card6H":
        return (
          <img
            src={Card6H}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card6C":
        return (
          <img
            src={Card6C}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card6D":
        return (
          <img
            src={Card6D}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card7S":
        return (
          <img
            src={Card7S}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card7H":
        return (
          <img
            src={Card7H}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card7C":
        return (
          <img
            src={Card7C}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card7D":
        return (
          <img
            src={Card7D}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card8S":
        return (
          <img
            src={Card8S}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card8H":
        return (
          <img
            src={Card8H}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card8C":
        return (
          <img
            src={Card8C}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card8D":
        return (
          <img
            src={Card8D}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card9S":
        return (
          <img
            src={Card9S}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card9H":
        return (
          <img
            src={Card9H}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card9C":
        return (
          <img
            src={Card9C}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card9D":
        return (
          <img
            src={Card9D}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card10S":
        return (
          <img
            src={Card10S}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card10H":
        return (
          <img
            src={Card10H}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card10C":
        return (
          <img
            src={Card10C}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "card10D":
        return (
          <img
            src={Card10D}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardAS":
        return (
          <img
            src={CardAS}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardKS":
        return (
          <img
            src={CardKS}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardJS":
        return (
          <img
            src={CardJS}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardQS":
        return (
          <img
            src={CardQS}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardAH":
        return (
          <img
            src={CardAH}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardKH":
        return (
          <img
            src={CardKH}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardJH":
        return (
          <img
            src={CardJH}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardQH":
        return (
          <img
            src={CardQH}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardAC":
        return (
          <img
            src={CardAC}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardKC":
        return (
          <img
            src={CardKC}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardJC":
        return (
          <img
            src={CardJC}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardQC":
        return (
          <img
            src={CardQC}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardAD":
        return (
          <img
            src={CardAD}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardKD":
        return (
          <img
            src={CardKD}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardJD":
        return (
          <img
            src={CardJD}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      case "cardQD":
        return (
          <img
            src={CardQD}
            alt="Gondolt lap"
            style={{ height: "100%", width: "100%" }}
          />
        );
      default:
        break;
    }
  };

  return (
    <>
      {!state.success && (
        <div className="center">
          <PatternLock
            size={state.size}
            onChange={onChange}
            path={state.path}
            error={state.error}
            onFinish={onFinish}
            connectorThickness={5}
            disabled={state.disabled || state.isLoading}
            success={state.success}
            allowOverlapping={true}
          />
        </div>
      )}

      {/* <div className="output">
        Select the top 3 points starting from the left
      </div> */}
      {/* <div className="output">Output : {state.path.join(", ")}</div> */}
      {state.success && (
        <>
          {returnCompinents(cardString)}
          {/* <button
            style={{ margin: "0 auto", display: "block" }}
            onClick={onReset}
          >
            Click here to reset
          </button> */}
        </>
      )}
    </>
  );
}

export default App;
