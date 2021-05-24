import React from "react";

import { backend } from "../../constants/constants";

import { Header, Container } from "semantic-ui-react";

import Markdown from "../../components/Markdown/Markdown";

import styles from "../../styles/TextAlign.module.css";

export default function Infrastructural(props) {
  return (
    <div style={{ padding: "2rem" }}>
      <Container className={styles["wrapper"]}>
        <Header as='h3'>Infrastructural Projects</Header>
        <Markdown markdown={props["data"]["desc"]} />
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(backend + "projects/607079de5a5e8927cedabd36");
  let data = await response.json();

  return {
    props: {
      data: data,
    },
  };
}
