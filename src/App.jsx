import {useEffect,useState} from 'react' 
import styles from "../src/App.module.css";

function App() {
  const [name, setName] = useState("Daniel");
  const sector = "Desenvolvimento";
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
              <span className={styles.name} {...name}></span>
              <span className={styles.sector} {...sector}></span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}></div>
    </div>
  );
}

export default App;
