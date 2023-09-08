import React from "react";

import Posts from "../../components/Posts";
import { handleGet } from "../api/api";
import { Post } from "../api/models";


const useGenerateFeed = () => {

    /** A lista com todas as CLASSES para os posts */
    var feedList = [];

    /** A lista com todas as TAGS para os posts */
    var postList = [];

    /**
     * A variável `response` possui todos os posts do servidor.
     */
    const [response, setResponse] = React.useState(null);
    React.useEffect(() => {
        handleGet()
            .then((response) => {
                setResponse(response.data);
            })
            .catch((error) => {
                return error;
            });
    }, []);

    /** 
     * IF Previne TypeError 
     * Note: AXIOS é horrível
     */
    if (response != null) {

        for (let i = 0; i < response.length; i++) {
            const post = new Post(null, null);
            post.setId(response[i]._id);
            post.setTitle(response[i].title);
            post.setContent(response[i].content);
            post.setRating(response[i].upv, response[i].downv);
            post.setTimestamp(response[i].timestamp);
            post.setSlug(response[i].slug);

            // Adiciona a classe do post para a variável `feedList` e
            // a tag do post para `postList`. 
            feedList.push(post); postList.push(post.getTag());
        }
    }
    
    return postList;
}

export {
    useGenerateFeed
};