import "./Modal.css";
import { useGetPokemonByNameQuery } from "../../../services/pokemon";
import ReactDOM from "react-dom";

export default function Modal({ onClose, pokemon }) {
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon);

  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal">
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              <h3>{data.species.name}</h3>
              <img
                src={data.sprites.front_shiny}
                alt={data.species.name}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
