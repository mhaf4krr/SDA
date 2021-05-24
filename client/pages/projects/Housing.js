import React from "react";

import { backend } from "../../constants/constants";

import { Header, Container } from "semantic-ui-react";

import Markdown from "../../components/Markdown/Markdown";
import styles from "../../styles/TextAlign.module.css";

export default function Housing(props) {
  return (
    <div style={{ padding: "2rem" }}>
      <Container className={styles["wrapper"]}>
        <Header as='h3'>Housing Projects</Header>
        <Markdown markdown={props["data"]["desc"]} />
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(backend + "projects/607079435a5e8927cedabd35");
  let data = await response.json();

  return {
    props: {
      data: data,
    },
  };
}
