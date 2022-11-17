/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./styles.css";
import axios from "axios";

import api from "../../api";

const Inputs = ({ setDados }) => {
  const [result, setResult] = useState(false);

  const history = useHistory();

  const formSchema = yup.object().shape({
    amount: yup.number(),
    installments: yup.number(),
    mdr: yup.number(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  function apiInternalError() {
    axios
      .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app?internalError")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  function calculate(data) {
    setResult(true);
    axios
      .post(
        "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=4000",
        data
      )
      .then((response) => {
        console.log(response.data);
        setDados(response.data);
        setResult(false);
      })
      .catch((err) => {
        apiInternalError();
        history.push("/error");
      });
  }

  return (
    <form onChange={handleSubmit(calculate)} className="card-input">
      <div className="container-input">
        <h3 className="title-text">Simule sua Antecipação</h3>

        <div className="container-text">
          <label className="label-input">Informe o valor da venda *</label>
          <input
            {...register("amount")}
            name="amount"
            className="input-style"
            placeholder="R$ 1.000,00 "
            type="number"
          ></input>
        </div>

        <div className="container-text">
          <label className="label-input">Em quantas parcelas *</label>
          <input
            {...register("installments")}
            name="installments"
            className="input-style"
            type="number"
          ></input>
          <p className="paragraph">Máximo de 12 parcelas</p>
        </div>

        <div className="container-text">
          <label className="label-input-bottom">
            Informe o percentual de MDR *
          </label>
          <input
            {...register("mdr")}
            name="mdr"
            className="input-style"
            type="number"
          ></input>
        </div>

        <div className="container-button">
          {result === false ? (
            <button className="button-enviar" type="submit">
              Enviar
            </button>
          ) : (
            <button disabled className="button-enviar">
              ...Enviar
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Inputs;
