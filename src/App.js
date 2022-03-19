import React from "react";
import { Routes, Route } from "react-router";
import Init from "./Containers/Init";
import Finder from "./Containers/Finder";
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.root}>
      <Routes>
        <Route path="/" element={<Init/>} />
        <Route path="/Finder" element={<Finder/>} />
      </Routes>
    </div>
  );
}

export default App;
