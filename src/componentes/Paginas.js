import React from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from "./Inicio/index";
import  {ProductoLista } from "./Productos/index";

export const Paginas = () =>{
    return(
        <div>
            <section>
                <Switch>
                    <Route path="/" exact Component={Inicio} />
                    <Route path="/productos" exact Component={ProductoLista}/>
                </Switch>
            </section>
        </div>
    )
}