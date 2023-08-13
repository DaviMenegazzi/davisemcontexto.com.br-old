import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { act } from "react-dom/test-utils";
import ExpendedPage from "../components/ExpandedPage";

import { handleGetOnly } from "./api/api";

function Expanded() {
  const { id } = useParams();

  /*
    Esse ID agora é procurado no banco de dados pra ver se existe
    um post compatível com o ID procurado e então será exibido na tela.
    Caso não haja um post com o seguinte ID será exibido uma tela de 404.
    */

  const [expPage, setExpPage] = React.useState(null);

  React.useEffect(() => {
    handleGetOnly(id) // pega somente o post baseado no id
      .then((response) => {
        setExpPage(
          <ExpendedPage
            title={response.data[0].title}
            content={response.data[0].content}
          />
        );
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return <div>{expPage}</div>;
}

export default Expanded;
