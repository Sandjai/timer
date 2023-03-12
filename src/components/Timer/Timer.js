import React, { useEffect, useState } from "react";
import styles from "./styles.module.sass";
import { padStart } from "../../utils/padStart";
import classNames from "classnames";

export const Timer = ({ secondsLeft }) => {
  const [secLeft, setSecLeft] = useState(secondsLeft);

  const hours = Math.floor(secLeft / 3600);
  const minutes = Math.floor((secLeft - hours * 3600) / 60);
  const seconds = secLeft - hours * 3600 - minutes * 60;

  useEffect(() => {
    const interval = setInterval(
      () => (secLeft > 0 ? setSecLeft(secLeft - 1) : 0),
      1000
    );

    return () => clearInterval(interval);
  }, [secLeft]);

  return (
    <div className={styles.root}>
      <div className={classNames(styles.num, styles.hours)}>
        {padStart(hours)}
        <br />
        <span className={styles.txt}>hours</span>
      </div>
      <div className={classNames(styles.num, styles.minutes)}>
        {padStart(minutes)}
        <br />
        <span className={styles.txt}>minutes</span>
      </div>
      <div className={classNames(styles.num, styles.seconds)}>
        {padStart(seconds)}
        <br />
        <span className={styles.txt}>seconds</span>
      </div>
    </div>
  );
};
