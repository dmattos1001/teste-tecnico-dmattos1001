import { useHistory } from "react-router-dom";
import "./style.css"

const Error = () => {

    const history = useHistory()

     function voltar() {
        history.push("/")
     }

     return (
        <div className="container-error-page">
        <button className="button-voltar" onClick={voltar}>Voltar</button>
        </div>
     )
}

export default Error