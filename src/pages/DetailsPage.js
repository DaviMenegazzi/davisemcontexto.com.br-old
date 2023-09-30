import React from "react";
import { useParams } from "react-router-dom";

import Details from "src/components/Details";
import { NotFound } from "src/pages/errors/NotFound";
import { handleGetOnly } from "src/pages/api/api";

function DetailsPage () {
  const { slug } = useParams();

  /*
    Esse SLUG agora é procurado no banco de dados pra ver se existe
    um post compatível com o SLUG procurado e então será exibido na tela.
    Caso não haja um post com o seguinte SLUG será exibido uma tela de 404.
    */

  const [expPage, setExpPage] = React.useState(null);

  React.useEffect(() => {
    /** Redireciona para o site usando o slug criado ao adicionar o post */
    handleGetOnly("slug", slug)
      .then((response) => {
        setExpPage(
          <Details
            title={response.data[0].title}
            content={response.data[0].content}
          />
        );
      })
      .catch((error) => {
        setExpPage(<NotFound />);
        return error;
      });
  }, []);

  return <div>{expPage}</div>;
}

export default DetailsPage;
