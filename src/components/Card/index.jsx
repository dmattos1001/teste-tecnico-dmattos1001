/* eslint-disable no-unused-vars */
import styles from "./styles.css"

function Card() {
    return (
        <>
        <div className="container-card"> 
        <h2 className="title-text">
        Simule sua Antecipação
        </h2>
        <label className="label-card"> Informe o valor da venda*</label>
        <input className="input-card" type="text"></input>

        <label className="label-card"> Em quantas parcelas*</label>
        <input className="input-card" type="text"></input>

        <label className="label-card"> Informe o percentual de MDR*</label>
        <input className="input-card" type="text"></input>
        </div>
        </>
    )
}


export default Card