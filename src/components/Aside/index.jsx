/* eslint-disable no-unused-vars */
import styles from "./styles.css";

const Aside = () => {
  return (
    <div className="aside-container">
      <div className="container-text">
        <h4 className="aside-title">Você receberá:</h4>
        <div className="line"></div>
        <p className="aside-p">
          Amanhã: <b>R$ 0,00</b>
        </p>
        <p className="aside-p">
          Em 15 dias: <b>R$ 0,00</b>
        </p>
        <p className="aside-p">
          Em 30 dias: <b>R$ 0,00</b>
        </p>
        <p className="aside-p">
          Em 90 dias: <b>R$ 0,00</b>
        </p>
      </div>
    </div>
  );
};

export default Aside;
