import React, { useEffect, useRef } from "react";
import styles from './Scrollbar.module.css';

function Scrollbar() {
  const progressRef = useRef(null);

  useEffect(() => {
    const updateProgressBar = () => {
      const progress = progressRef.current;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progressHeight = (window.scrollY / totalHeight) * 100;
      progress.style.height = progressHeight + '%';
    };

    window.addEventListener('scroll', updateProgressBar);

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return (
    <>
      <div className={styles.progressbar} ref={progressRef}></div>
      <div className={styles.scrollPath}></div>
    </>
  );
}

export default Scrollbar;
