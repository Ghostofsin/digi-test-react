import "./Catalog.css";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Catalog({ path, title, subtext, pokemon }) {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <div class="item">
        <img
          className="img"
          src={path}
          alt=""
        />
        <span>{title}</span>
        <p className="hover-text">{subtext}</p>
        <button
          className="hover-link"
          onClick={() => {
            setToggleModal((prev) => !prev);
          }}
        >
          {" "}
          ПОДРОБНЕЕ →
        </button>
        {toggleModal && (
          <div
            className="modalWindow"
          >
            <Modal pokemon={pokemon} onClose={() => setToggleModal(false)}/>
          </div>
        )}
      </div>
    </>
  );
}
