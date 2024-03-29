import React from "react";

import { handleCreate, handleGetOnly, handleRating } from "src/pages/api/api";

import Posts from "src/components/Posts";

/**
 * Classe de posts.
 * Será usado quando for pego os dados feitos pelo request da API.
 */
class Post {
  constructor(title, content) {
    this.id = 0;
    this.title = title;
    this.content = content;
    this.upvotes = 0;
    this.downvotes = 0;
    this.timestamp = 0;
    this.slug = null;
  }

  setId(id) {
    this.id = id;
  }

  setTitle(title) {
    this.title = title;
  }

  setContent(content) {
    this.content = content;
  }

  setRating(upvotes, downvotes) {
    this.upvotes = upvotes;
    this.downvotes = downvotes;
  }

  setTimestamp(timestamp) {
    this.timestamp = timestamp;
  }

  setSlug(slug) {
    this.slug = slug;
  }

  /**
   * Se o post não existe, ele cria um novo com esses atributos.
   */
  create() {
    handleCreate(this.title, this.content)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        return error;
      });
  }

  /**
   * Define o post pelo Id
   */
  setById(id) {
    handleGetOnly("_id", id)
      .then((response) => {
        this.id = id;
        this.title = response[0].title;
        this.content = response[0].content;
        this.upvotes = response[0].upvotes;
        this.downvotes = response[0].downvotes;
        this.timestamp = response[0].timestamp;
        this.slug = response[0].slug;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Retorna a TAG do post para a página home.
   */
  getTag() {
    return <Posts postObject={this} />;
  }

  /**
   * Faz o update dos likes e deslikes, ainda, a porcentagem e cálculo do rating do post.
   */
  updateRating(rtype) {
    // Previne TypeError
    if (this.id != 0) {
      handleRating(this.id, rtype)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Error while performing updateRating: Id not found");
    }
  }
}

export { Post };
