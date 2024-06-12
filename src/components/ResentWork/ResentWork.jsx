import "./ResentWork.css";
import WorkGallery from "./WorkGallery/WorkGallery";

const gallery = [
  {
    path: "/images/ourworks/butik.png",
    text: "Lalique бутик",
  },
  {
    path: "/images/ourworks/home.jpeg",
    text: "Строительство домов",
  },
  {
    path: "/images/ourworks/kofe.jpeg",
    text: "Кофейня",
  },
  {
    path: "/images/ourworks/unique.png",
    text: "Уникальные туры",
  },
];

export default function ResentWork() {
  return (
    <div className="resentwork">
      <div className="resentwork-header">
        <h2>Наши Проекты</h2>
        <div className="resent-separate-line"></div>
        <div className="resentwork-flex">
          {gallery.map((img) => (
            <WorkGallery
              path={img.path}
              text={img.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
