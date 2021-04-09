import React from "react";
import { Container } from "semantic-ui-react";

import styles from "./CardSection.module.css";

import Card from "./Card/Card";

export default function CardSection() {
  return (
    <div className={styles["main_wrapper"]}>
      <div className={styles["sub_wrapper"]}>
        <Card icon="home" title="Housing" />
        <Card icon="map" title="Land" />
        <Card icon="pencil alternate" title="Planning" />
        <Card icon="flag" title="Master Plan" />
        <Card icon="calendar alternate" title="Projects" />
        <Card
          icon="check circle
"
          title="RTI"
        />
        <Card icon="cogs" title="eServices" />
      </div>
    </div>
  );
}
