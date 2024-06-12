import "./LastNews.css";
import GalleryImg from "./GalleryImg/GalleryImg";

const images = [
  {
    path: "/images/news/zd.jpeg",
    style: { width: "270px", height: "444px", objectFit: "cover" },
    text: "3Д в брендинге",
  },
  {
    path: "/images/news/ads.jpeg",
    style: { width: "270px", height: "342px", objectFit: "cover" },
    text: "Контекстная реклама",
  },
  {
    path: "/images/news/graphic.jpeg",
    style: {
      width: "268px",
      height: "383px",
      objectFit: "cover",
      objectPosition: "left top",
    },
    text: "Графика",
  },
  {
    path: "/images/news/culture.png",
    style: {
      width: "268px",
      height: "210px",
      objectFit: "cover",
      objectPosition: "top",
    },
    text: "Корпоративная культура",
  },
  {
    path: "/images/news/design.jpeg",
    style: {
      width: "270px",
      height: "167px",
      objectFit: "cover",
      objectPosition: "center",
    },
    text: "Уникальный дизайн",
  },
  {
    path: "/images/news/sight.jpeg",
    style: { width: "268px", height: "341px", objectFit: "cover" },
    text: "Взгляд со стороны",
  },
  {
    path: "/images/news/social.jpeg",
    style: { width: "269px", height: "198px", objectFit: "none" },
    text: "Соц сети и их польза",
  },
  {
    path: "/images/news/exclusive.jpeg",
    style: {
      width: "268px",
      height: "436px",
      objectFit: "cover",
      filter: "brightness(70%)",
    },
    text: "Эксклюзивность",
  },
];

export default function LastNews() {
  return (
    <div className="lastnews">
      <div className="lalastnews-header">
        <h2 className="team">Последние Новости</h2>
        <div className="separate-line"></div>
      </div>

      <div className="lastnews-gallery">
        {images.map((image) => (
          <GalleryImg
            path={image.path}
            style={image.style}
            text={image.text}
          />
        ))}
      </div>
    </div>
  );
}
