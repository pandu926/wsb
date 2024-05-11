"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function page() {
  useEffect(() => {
    getData();
  }, []);

  const { id } = useParams();

  const [data, setData] = useState("");

  console.log(data);
  const getData = async () => {
    axios
      .get(`https://pandusubekti.tech/wisata/list?id=${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <div>page ini wisata detail {id}</div>;
}
