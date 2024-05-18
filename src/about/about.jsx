import React, { useEffect, useState } from "react";
import { Header } from "../Homepage/header";
import { Slide2 } from "../Homepage/stayhome";
import { Footer } from "../common/footer";
import { Welcome } from "../Aboutpage/welcometonest";
import { Promain } from "../Aboutpage/promain";
import { Aim } from "../Aboutpage/aim";
import { Ourresult } from "../Aboutpage/ourresults";
import { Ourteam } from "../Aboutpage/ourteam";
import { Performanc } from "../Aboutpage/performance";
import ReactLoading from "react-loading";

function About() {
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
          <Header />
          <Welcome />
          <Promain />
          <Performanc />
          <Aim />
          <Ourresult />
          <Ourteam />
          <Slide2 />
          <Footer />
        </>
      )}
    </>
  );
}
export { About };
