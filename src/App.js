import React from "react";
import PageTitle from "react";
import styles from "../styles/modules/app.module.scss";
import AppContent from "./Components/AppContent";
import AppHeader from "./Components/AppHeader";
import { toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />

          <AppContent></AppContent>
        </div>
      </div>
      <toaster></toaster>
    </>
  );
}

export default App;
