import React from "react";
import { Heading } from "../common/heading";
import { Link } from "react-router-dom";
function Popular() {
    const product = [
        {
            name: "All",
            path: "all"
        },
        {
            name: "Milk & Daries",
            path: "Milk"
        },
        {
            name: "Coffee & tea",
            path: "coffee"
        },
        {
            name: "Peat food",
            path: "food"
        },
        {
            name: "Meat",
            path: "food"
        },
        {
            name: "Fruite",
            path: "Fruite"
        },
        {
            name: "Vegetable",
            path: "vegetable"
        },
    ]
    return (

        <>
            <div className="main-product">
                <div className="product-a">
                    <Heading chead="Popular product" />
                    <ul>
                        {
                            product.map((pd) => {
                                return (
                                    <>
                                        <div className="tproduct">
                                            <Link to={pd.path} ><li>{pd.name}</li></Link>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )

}
export { Popular }