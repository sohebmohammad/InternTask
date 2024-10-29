import React from "react";

import "../../App.css"; // Correct import path for App.css

import Navbar from "../../components/Navbar/Navbar";

import Section1 from "../../components/Section1/Section1";
import Brands from "../../components/Brands/Brands";
import NewArraivals from "../../components/NewArraivals/NewArraivals";
import Payday from "../../components/Payday/Payday";
import YongsFav from "../../components/YoungsFav/YoungsFav";
import Vouchers from "../../components/Vouchers/Vouchers";
import Community from "../../components/Community/Community";
import Background from "../../components/Background/Background";

function Home() {
  return (
    <>
      <Section1 />
      <Brands />
      <NewArraivals />
      <Payday />
      <YongsFav />
      <Vouchers />
      <Community />
      <Background />
    </>
  );
}

export default Home;
