import "./Intro.css";
import Pagination from "../Pagination/Pagination";

export default function Intro() {
  return (
    <div className="intro">
      <div className="main-block">
        <h1>
          МЫСЛИ <br /> ГЛОБАЛЬНО
        </h1>
        <p>
          Di Gі - это диджитал агентство полного цикла, направленное на самый{" "}
          <br /> лучший результат наших клиентов в маркетинге, продажах и
          управлении
        </p>
        <button>ПОДРОБНЕЕ</button>

        <Pagination color={"rgba(255, 255, 255, 1)"} />
      </div>
      <div className="arrows">
        <div className="arrow-back">
          <div></div>
        </div>
        <div className="arrow-forward">
          <div></div>
        </div>
      </div>
    </div>
  );
}
