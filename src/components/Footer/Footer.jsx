import "./Footer.css";

export default function Header() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          className="footer-logo-img"
          src="/images/header/logo.png"
          alt="logo"
          style={{ width: "83px", height: "55px", objectFit: "cover" }}
        />
      </div>
      <div className="footer-content">
        <p>
          Мы хотели бы услышать все о вашем проекте.
          <br />
          Свяжись с нами.
        </p>

        <div className="footer-grid">
          <div class="item-left">
            <span>
              <b>F</b>
            </span>
          </div>
          <div class="footer-grid-item">
            <span>
              <b>G+</b>
            </span>
          </div>
          <div class="footer-grid-item">
            <span>
              <b>T</b>
            </span>
          </div>
          <div class="item-right">
            <span>
              <b>P</b>
            </span>
          </div>
          <div class="item-text">
            <span className="footer-title">КОНТАКТЫ</span>
            <span className="footer-description">
              +80 555 55 66 <br />
              digi@gmail.com
            </span>
          </div>
          <div class="item-text">
            <span className="footer-title">АДРЕС</span>
            <span className="footer-description">
              Пр. Науки 107 <br />
              Kиев / Украина
            </span>
          </div>
          <div class="item-text">
            <span className="footer-title">ПОМОЩЬ</span>
            <span className="footer-description">
              Как с нами связаться? <br />
              Что такое диджитал? <br />
              Стоимость услуг
            </span>
          </div>
          <div class="item-text">
            <span className="footer-title">МЕНЮ</span>
            <span className="footer-description">
              Наши проекты <br />
              Команда <br />
              Блог
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
