/* eslint-disable no-unused-vars */
import styles from "./styles.css";

const Aside = (dados) => {
  return (
    <div className="aside-container">
      <div className="container-text">
        <h4 className="aside-title">Você receberá:</h4>
        <div className="line"></div>

        {dados === "" ? (
          <>
            <p className="aside-p">
              Amanhã: <b>R$ 00,00</b>
            </p>
            <p className="aside-p">
              Em 15 dias: <b>R$ 00,00</b>
            </p>
            <p className="aside-p">
              Em 30 dias: <b>R$ 00,00</b>
            </p>
            <p className="aside-p">
              Em 90 dias: <b>R$ 00,00</b>
            </p>
          </>
        ) : (
          <>
            <p className="aside-p">
              Amanhã: <b>R$ {dados["1"]}</b>
            </p>
            <p className="aside-p">
              Em 15 dias: <b>R$ {dados["15"]}</b>
            </p>
            <p className="aside-p">
              Em 30 dias: <b>R$ {dados["30"]}</b>
            </p>
            <p className="aside-p">
              Em 90 dias: <b>R$ {dados["90"]}</b>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Aside;
