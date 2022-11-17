import Card from "../components/Body";
import Inputs from "../components/Inputs";
import Aside from "../components/Aside";
import Body from "../components/Body";
import { useState } from "react";

const Calculadora = () => {
  const [dados, setDados] = useState("");
  return (
    <Body>
      <Card>
        <Inputs setDados={setDados} />
        <Aside dados={dados} />
      </Card>
    </Body>
  );
};

export default Calculadora;
