import "./GalleryImg.css";

export default function GalleryImg({ path, style, text }) {
  return (
    <>
      <div className="lastnews-gallery-img">
        <img
          className="lastnews-img"
          src={path}
          alt=""
          style={style}
        />
        <div className="text-overlay">{text}</div>
        <div className="hover-gallery-block">
          <img
            src="/images/news/info-btn.svg"
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
}
