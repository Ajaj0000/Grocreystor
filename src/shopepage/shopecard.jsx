import React, { useState } from "react";
import img1 from "../images/category-1 - Copy.45eceefd086f515f7374cfc6d213cde3.svg";
import img2 from "../images/category-2 - Copy.e99f16ef42c59fd2d3d39d5dddfdc187.svg";
import img3 from "../images/category-3 - Copy.d873081cb655e0714af6d92a9fa765e9.svg";
import img4 from "../images/category-4 - Copy.38003cc41169c8855d9949205fba9454.svg";
import img5 from "../images/category-5 - Copy.fb1b8b0e96edbefd24a8567cc686b4f8.svg";
import imgg from "../images/thumbnail-3.jpg";
import { Rating } from "../common/ratting";

function Shopecard() {
  const cate = [
    {
      img: `${img1}`,
      name: "Milk & Daries",
      label: "0",
    },
    {
      img: `${img2}`,
      name: "Clothing",
      label: "0",
    },
    {
      img: `${img3}`,
      name: "Pet food",
      label: "0",
    },
    {
      img: `${img4}`,
      name: "Baking material",
      label: "0",
    },
    {
      img: `${img5}`,
      name: "Vagetable & Fruits",
      label: "0",
    },
  ];
  const cate2 = [
    {
      name: "Red(56)",
    },
    {
      name: "Green(56)",
    },
    {
      name: "Blue(56)",
    },
  ];
  const cate3 = [
    {
      nameb: "New(1556)",
    },
    {
      nameb: "Refurbished (154)",
    },
    {
      nameb: "Used (52)",
    },
  ];
  const cate4 = [
    {
      img: `${imgg}`,
      name: "Chen Sweater",
      rate: "$50",
    },
    {
      img: `${imgg}`,
      name: "Chen Sweater",
      rate: "$50",
    },
    {
      img: `${imgg}`,
      name: "Chen Sweater",
      rate: "$50",
    },
  ];
  const cate5 = [
    {
      name: "Organic",
      detail: "save 17% on organic juic",
    },
    {
      name: "Organic",
      detail: "save 17% on organic juic",
    },
    {
      name: "Organic",
      detail: "save 17% on organic juic",
    },
  ];
  const [on, off]= useState(false)

  const btn1 = () => {
    off(true);
  };
  const btn2 = () => {
    off(false);
  };

  return (
    <>  

        <div className="shopp" >
          <div className="main-shope">
            <div className="texta">
              <h1>Category</h1>

              {cate.map((list) => {
                return (
                  <>
                    <div className="cate-a">
                      <div className="img">
                        <img src={list.img} alt="" />
                      </div>
                      <p>{list.name}</p>
                      <span>{list.label}</span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="main-shopeb">
            <div className="textb">
              <h1>Fill by price</h1>
              <div className="txt">
                <p>Choose your color:</p>
              </div>
              {cate2.map((list2) => {
                return (
                  <>
                    <div className="check">
                      <input type="checkbox" />
                      <p> {list2.name}</p>
                    </div>
                  </>
                );
              })}
              <div className="txtc">
                <p>Item Condition:</p>
              </div>
              {cate3.map((list3) => {
                return (
                  <>
                    <div className="check">
                      <input type="checkbox" />
                      <p> {list3.nameb}</p>
                    </div>
                  </>
                );
              })}
              <button>Filter</button>
            </div>
          </div>
          <div className="main-shopec">
            <div className="textc">
              <h1>New product</h1>

              {cate4.map((lit) => {
                return (
                  <>
                    <div className="cate-c">
                      <div className="imgc">
                        <img src={lit.img} alt="" />
                      </div>

                      <div className="nex">
                        <h3>{lit.name}</h3>
                        <span>{lit.rate}</span>
                        <div className="rate">
                          <Rating />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {cate5.map((save) => {
            return (
              <>
                <div className="main-shoped">
                  <div className="mainb">
                    <div className="mainc">
                      <p>{save.name}</p>
                      <h1>{save.detail}</h1>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/* <button className={(on === true)? "none1" : "bt1"} onClick={btn1}>open</button> */}
   {/* <button  className={(on=== false)? "none1" : "bt2"} onClick={btn2}>close</button> */}
    </>
  );
}
export { Shopecard };
