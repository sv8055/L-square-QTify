import React, { useState } from "react";
import Albums from "../../components/albums/Albums";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import { albumData } from "../../data";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <Banner />
      </section>

      {/* Album section */}
      <section>
        <Albums albums={albumData} />
      </section>
    </div>
  );
};

export default Home;
