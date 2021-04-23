import React from "react";

import styles from "./People.module.css";

import Card from "./Card/Card";

export default function People() {
  return (
    <div className={styles["main_wrapper"]}>
      <Card
        img='/assets/ps.jpg'
        name='Mr. Dheeraj Gupta(IAS)'
        designation='Principal Secretary to Govt, Housing and UD Dept.'
      />
      <Card
        img='/assets/vc.jpeg'
        name='Dr. Bashir Ahmad Lone(KAS)'
        designation='Vice Chairman, Srinagar Development Authority'
      />
    </div>
  );
}
