import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";

const PeopleAxios = () => {
  const [insanlar, setInsan] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setInsan(res.data.results[0]));
  };

  console.log(insanlar);

  return (
    <div className="container">
      <div className="card">
        <div className="div div2">
          <img className="img" src={insanlar.picture?.large} alt="" />
          <h3 >
            {insanlar.name?.title} {insanlar.name?.first} {insanlar.name?.last}
          </h3>
        </div>
        <div className="div div1">
          <img className="kleinImg" src={email}  alt="" />
          <h3> {insanlar.email}</h3>
        </div>
        <div className="div div1">
          <img className="kleinImg" src={phone} alt="" />
          <h3>{insanlar.phone}</h3>
        </div>
        <div className="div div1">
          <img className="kleinImg" src={location} alt="" />
          <h3>
            {insanlar.location?.city} - {insanlar.location?.country}
          </h3>
        </div>
        <div className="div div5">
          <h3>Age:{insanlar.dob?.age}</h3>
        </div>
        <div className="div div6">
          <h3>Register Date:{insanlar.registered?.date.slice(0, 10)}</h3>
        </div>
      </div>
      <button className="btn" onClick={getUser}>
        Random User
      </button>
    </div>
  );
};

export default PeopleAxios;
