import React from "react";

import PageContainer from "../components/PageContainer/PageContainer";

import { Header, Table, Divider } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

import { main_backend_path } from "../constants/constants";

export default function AvailableProperties() {
  return (
    <PageContainer>
      <Header>Available Properties</Header>
      <Divider />

      <p>
        The updated list of available commerical and housing properties can be
        downloaded by clicking on the button below
      </p>
      <a
        href={
          main_backend_path + "/uploads/Available_Properties_578f997172.pdf"
        }>
        <Button primary>Download Available Properties Document</Button>
      </a>
    </PageContainer>
  );
}
