import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import EmployeeTable from "../../components/Table/EmployeeTable.jsx";

export default function Main() {
  
  return (
    <div className={styles.main}>
      <div className={styles.right}>
        <EmployeeTable />
      </div>
    </div>
  );
}
