"use client";

import React, { useEffect, useState } from "react";

const CountryLookup = () => {
  const [location, setLocation] = useState<string>("Location");
  useEffect(() => {
    const location = fetch("http://ip-api.com/json/")
      .then((data) => data.json())
      .then((result) => {
        setLocation(`${result.city} : ${result.country}`);
      });
  }, []);

  return <div>{location}</div>;
};

export default CountryLookup;
