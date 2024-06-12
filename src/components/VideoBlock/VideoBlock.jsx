import "./VideoBlock.css";

export default function VideoBlock() {
  return (
    <div className="videoblock">
      <div>
        <img
          className="videoblock-img"
          src="/images/team/workplace.jpeg"
          alt=""
        />
      </div>
      <div className="videoblock-content">
        <h2 className="team">Команда</h2>
        <div className="separate-line"></div>
        <p className="team-text">
          Наша команда - это наша самая большая ценность. Мы трудились, чтобы
          собрать группу экспертов, чьи навыки дополняют друг друга. У членов
          нашей команды разные истории, но мы разделяем общую страсть к идеалу.
          Мы верим, чтобы оставаться профессионалом, нужно развиваться, поэтому
          мы постоянно ищем способы, как стать лучше в том, что мы делаем.
        </p>
        <button className="team-button">СМОТРЕТЬ ВИДЕО</button>
      </div>
    </div>
  );
}
