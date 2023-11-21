import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import EmployeeTable from "../../components/Table/EmployeeTable.jsx";

export default function Main() {
  
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.leftUpperDiv}>
          <div className={styles.navbar}></div>
          <div className={styles.menuItem}></div>
          <div className={styles.menuItem}></div>
          <div className={styles.menuItem}></div>
        </div>
        <div className={styles.leftDownDiv}>
          <div className={styles.profileDiv}>
            <div className={styles.profileImage}></div>
            <div className={styles.profileInformation}>
             
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <EmployeeTable />
      </div>
    </div>
  );
}
