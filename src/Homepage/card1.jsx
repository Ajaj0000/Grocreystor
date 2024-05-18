import React from "react";
import { Heading } from "../common/heading";
import { Link } from "react-router-dom";
import img1 from "../images/cat-1 - Copy.png"
import img2 from "../images/cat-2 - Copy.png"
import img3 from "../images/cat-3 - Copy.png"
import img5 from "../images/cat-4 - Copy.png"
import img6 from "../images/cat-5 - Copy.png"
import img7 from "../images/cat-14 - Copy.png"
import img8 from "../images/cat-15 - Copy.png"
import img9 from "../images/cat-13 - Copy.png"
import img10 from "../images/cat-12 - Copy.png"
import img11 from "../images/cat-9 - Copy.png"
import aimg1 from "../images/banner-1 - Copy.png"
import aimg2 from "../images/banner-2 - Copy.png"
import aimg3 from "../images/banner-3 - Copy.png"
function Featured() {
    const text = [
        {
            name: "Cake & Milk",
            path: "/cake",
        },
        {
            name: "Coffee & Tea",
            path: "/coffee",
        },
        {
            name: "Pet food",
            path: "/food",
        },
        {
            name: "Vegetable",
            path: "/vegetable",
        },
    ]
    const texta = [
        {
            id: "i1",
            img: `${img1}`,
            iteam: "Organic Kiwi",
            price: "15 iteam"
        },
        {
            id: "i2",
            img: `${img2}`,
            iteam: "Organic Kiwi",
            price: "20 iteam"
        },
        {
            id: "i3",
            img: `${img3}`,
            iteam: "Organic Kiwi",
            price: "25 iteam"
        },
        {
            id: "i4",
            img: `${img5}`,
            iteam: "Organic Kiwi",
            price: "30 iteam"
        },
        {
            id: "i5",
            img: `${img6}`,
            iteam: "Organic Kiwi",
            price: "35 iteam"
        },
        {
            id: "i6",
            img: `${img7}`,
            iteam: "Organic Kiwi",
            price: "40 iteam"
        },
        {
            id: "i7",
            img: `${img8}`,
            iteam: "Organic Kiwi",
            price: "45 iteam"
        },
        {
            id: "i8",
            img: `${img9}`,
            iteam: "Organic Kiwi",
            price: "50 iteam"
        },
        {
            id: "i9",
            img: `${img10}`,
            iteam: "Organic Kiwi",
            price: "55 iteam"
        },
        {
            id: "i10",
            img: `${img11}`,
            iteam: "Organic Kiwi",
            price: "60 iteam"
        },
    ]
    const textb = [
        {
            bimg: `${aimg1}`,
            add: "Everyday Fresh & Clean with Our Products",
            btn: "Shop"
        },
        {
            bimg: `${aimg2}`,
            add: "Make your breakfast Healthy & easy",
            btn: "Shop"
        },
        {
            bimg: `${aimg3}`,
            add: "The best organic products Online",
            btn: "Shop"
        },
    ]
    return (
        <>
            <div className="c-main">
                <div className="category">
                    <Heading chead="Featured Category" />
                    <ul>
                        {
                            text.map((lite) => {
                                return (
                                    <>
                                        <div className="hover">
                                            <Link to={lite.path} ><li>{lite.name}</li></Link>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
            <div className="cat-main">
                <div className="cat-iteam">
                    {
                        texta.map((cat) => {
                            return (
                                <>
                                    <div className="cat1" id={cat.id}>
                                        <div className="img">
                                            <img src={cat.img} alt="" />
                                        </div>
                                        <h4>{cat.iteam}</h4>
                                        <h5>{cat.price}</h5>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
            <div className="card">
                <div className="card-a">
                    {
                        textb.map((add) => {
                            return (
                                <>
                                    <div className="adimg">
                                        <img src={add.bimg} alt="" />
                                        <div className="adtext">
                                            <h4>{add.add}</h4>
                                            <Link><button>Shope   <i class="fa-solid fa-arrow-right"></i></button></Link>
                                        </div>
                                    </div>
                                    
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export { Featured }