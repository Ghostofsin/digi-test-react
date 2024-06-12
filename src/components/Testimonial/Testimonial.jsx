import Pagination from "../Pagination/Pagination";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div className="testimotial">
      <div className="testimotial-content">
        <div className="testimotial-quote-sign">
          <img
            src="/images/testimonial/quote.svg"
            alt=""
          />
        </div>
        <div className="testimotial-quote">
          Если нужно создавать либо повышать имидж компании, <br />
          то <b className="blue-words">диджитал-маркетинг</b> является наиболее
          подходящим
        </div>
        <div className="testimotial-quote-author">- Маргарита Акулич</div>
        <Pagination color={"rgba(43, 64, 116, 1)"} />
      </div>
    </div>
  );
}
