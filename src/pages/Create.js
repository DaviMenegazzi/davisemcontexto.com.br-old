import React from "react";
import axios from "axios";

import { handleCreate } from "./api/api"
import { AuthConsumer } from "./admin/Admin";

const Create = () => {

    const [ created, setCreate ] = React.useState(null);

    const handleChange = (event) => {
        setCreate({
            ...created,
            [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        handleCreate(created.title, created.content)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                return error;
            });
    }
    
    return (
        <AuthConsumer>
            {({ isAuth }) => (
                <div>
                    <form onSubmit={handleSubmit}>
                        <a>informe um titulo</a>
                        <input name="title" onChange={handleChange}></input>
                        <input name="content" onChange={handleChange}></input>
                        <button type="submit" >ENVIAR</button>
                    </form>
                </div>
            )}
        </AuthConsumer>
    );
}

export default Create;