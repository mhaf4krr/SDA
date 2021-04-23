import React from "react";
import { Container } from "semantic-ui-react";

import styles from "./CardSection.module.css";

import Card from "./Card/Card";

import { main_backend_path } from "../../constants/constants";

export default function CardSection() {
  return (
    <div className={styles["main_wrapper"]}>
      <div className={styles["sub_wrapper"]}>
        <Card icon='flag' title='Master Plan' link='/planning/MasterPlan' />

        <Card
          icon='exclamation triangle'
          title='Enforcement'
          link='/enforcements/'
        />

        <Card
          icon='check circle
'
          title='RTI'
          link='/rti/RTI'
        />

        <Card icon='folder' title='J&K PSG Act' link='/PSGAct' />

        <Card
          icon='home'
          title='Available Properties'
          link='/AvailableProperties'
        />

        <Card icon='file' title='Procedure' link='/Applications' />

        <Card icon='cogs' title='eServices' link='/eServices' />
      </div>
    </div>
  );
}
