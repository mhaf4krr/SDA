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
          title='BOCA'
          link='/planning/BOCAMinutes'
        />

        <Card icon='folder' title='J&K PSG Act' link='/PSGAct' />

        <Card icon='file' title='Downloads' link='/downloads/Downloads' />

        <Card
          icon='file'
          title='Procedure for Building Plan Approval'
          link='/land_management/DocumentsRequired'
        />

        <Card
          icon='cogs'
          title='Services'
          external
          link={main_backend_path + "/uploads/services_2428bdef1e.pdf"}
        />
      </div>
    </div>
  );
}
