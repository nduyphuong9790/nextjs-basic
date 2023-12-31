"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [err, setErr] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //       setIsLoading(false);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setIsLoading(false);
  //   };

  //   getData();
  // }, []);
  // console.log(data);

  const session = useSession();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return <div>Dashboard</div>;
};

export default Dashboard;
