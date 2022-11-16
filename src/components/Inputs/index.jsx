/* eslint-disable no-unused-vars */
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./styles.css";

import api from "../../api";

const Inputs = () => {
  const formSchema = yup.object().shape({
    amount: yup.number(),
    installments: yup.number(),
    mdr: yup.number(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  function calculate(data) {
    api
      .post(data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
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
      </div>
    </form>
  );
};

export default Inputs;
