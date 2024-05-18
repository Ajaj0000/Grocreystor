import React, { useEffect, useState } from "react";
import { Header } from "../Homepage/header";
import { Slide } from "../Homepage/slider";
import { Featured } from "../Homepage/card1";
import { Popular } from "../Homepage/popular";
import { Card } from "../Homepage/popularcard";
import { Sell } from "../Homepage/selliteam1";
import { Deal } from "../Homepage/daelofday";
import { Slide2 } from "../Homepage/stayhome";
import { Footer } from "../common/footer";
import ReactLoading from "react-loading";

function Home() {
  const [value, setvalue] = useState();
  const getInputValue = (data) => {
    setvalue(data);
  };
 

  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1300);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <div
            className="center"
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <ReactLoading
                type="bubbles"
                color="green"
                height={"10%"}
                width={"100%"}
              />
              <h1 style={{ color: "green" }}>Loading.......</h1>
            </div>
          </div>
        </>
      ) : (
        <>
          <Header send={getInputValue}/>
          <Slide />
          <Featured />
          <Popular />
          <Card inputValue = {value}/>
          <Sell />
          <Deal/>
          <Slide2 />
          <Footer />
        </>
      )}
    </>
  );
}
export { Home };
