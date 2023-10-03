import React from "react";
import anillo from "../../images/anillo.png";
import collar from "../../images/collar.png";

export const ProductoLista = () =>{
    return (
        <>
            <h1 className="title">
                PRODUCTOS
            </h1>

            <div className="productos">
                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                            <img src={anillo} alt="" />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1> Title </h1>
                        <p> Categoria </p>
                        <p className="price">$500</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div></div>
                    <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                            <img src={collar} alt="" className="collar" />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1> Title </h1>
                        <p> Categoria </p>
                        <p className="price">$600</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div></div>
                    
            </div>
        </>
    )
}