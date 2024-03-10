import React, { useState } from "react";
import "./CSS/index.css";
import listData from "./Data/videoData";
import List from "./Components/List";

export default function App() {
  const [list, setList] = useState(listData);

  return <List list={list} />;
}
