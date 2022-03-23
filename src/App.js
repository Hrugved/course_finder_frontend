import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Init from "./Containers/Init";
import Finder from "./Containers/Finder";
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.root}>
      <Routes>
        <Route path="/" element={<Init/>} />
        <Route path="/Finder" element={<Finder/>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
