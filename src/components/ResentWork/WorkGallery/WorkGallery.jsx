import "./WorkGallery.css";

export default function WorkGallery({ path, text }) {
  return (
    <>
      <div className="flex-item">
        <div className="flex-img">
          <img
            src={path}
            alt=""
          />
          <div className="hover-img-block">
            <img
              src="/images/ourworks/info-button.svg"
              alt=""
            ></img>
            <img
              src="/images/ourworks/search.svg"
              alt=""
            ></img>
          </div>
        </div>
        <div className="flex-text">{text}</div>
      </div>
    </>
  );
}
