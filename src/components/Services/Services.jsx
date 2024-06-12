import "./Services.css";
import Catalog from "./Catalog/Catalog";

const services = [
  {
    path: "/images/services/strategy.svg",
    title: "СТРАТЕГИЯ",
    subtext: "Создадим уникальную стратегию",
    pokemon: "bulbasaur",
  },
  {
    path: "/images/services/analise.svg",
    title: "АНАЛИЗ",
    subtext: "Создадим уникальный анализ",
    pokemon: "ivysaur",
  },
  {
    path: "/images/services/networks.svg",
    title: "СОЦ СЕТИ",
    subtext: "Создадим уникальные соцсети",
    pokemon: "charmander",
  },
  {
    path: "/images/services/develop.svg",
    title: "РАЗВИТИЕ",
    subtext: "Создадим уникальное развитие",
    pokemon: "charmeleon",
  },
  {
    path: "/images/services/content.svg",
    title: "КОНТЕНТ",
    subtext: "Создадим уникальный контент",
    pokemon: "charizard",
  },
  {
    path: "/images/services/design.svg",
    title: "ДИЗАЙН UX",
    subtext: "Создадим уникальный дизайн",
    pokemon: "squirtle",
  },
  {
    path: "/images/services/ads.svg",
    title: "ТАРГЕТИРОВАННАЯ РЕКЛАМА",
    subtext: "Создадим уникальнцю рекламу",
    pokemon: "pikachu",
  },
  {
    path: "/images/services/product.svg",
    title: "ПРОДУКТ",
    subtext: "Создадим уникальный продукт",
    pokemon: "butterfree",
  },
];

export default function Services() {
  return (
    <div className="services">
      <div className="content">
        <h2>Сервис</h2>
        <p className="big-text">
          От идеи до незабываемого и измеримого результата.
        </p>
        <div className="separate-line"></div>
        <p className="small-text">
          Интеграция безупречного производства, передовых технологий и
          тщательного измерения производительности
        </p>
      </div>
      <div className="grid">
        {services.map((service) => (
          <Catalog
            path={service.path}
            title={service.title}
            subtext={service.subtext}
            pokemon={service.pokemon}
          />
        ))}
      </div>
    </div>
  );
}
