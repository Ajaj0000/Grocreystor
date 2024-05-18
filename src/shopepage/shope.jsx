import React, { useEffect, useState } from "react";
import { Header } from "../Homepage/header";
import { Slide2 } from "../Homepage/stayhome";
import { Footer } from "../common/footer";
import { Snack } from "./snaklist";
import { Shopecard } from "./shopecard";
import ReactLoading from "react-loading";
import { Card1 } from "./shopemaincard";
import { Deal } from "../Homepage/daelofday";



function Shope() {
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
          <Header send={getInputValue} />
          <Snack />

          <div className="mix">
         <Shopecard />

            <div className="mixb">
              <Card1 inputValue={value} />
              <Deal />
            </div>
          </div>
          <Slide2 />
          <Footer />
        </>
      )}
    </>
  );
}
export { Shope };
