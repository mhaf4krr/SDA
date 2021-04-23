import React from "react";

import { Divider, Container, Table, Header } from "semantic-ui-react";

import { backend, main_backend_path } from "../../constants/constants";

import PageContainer from "../../components/PageContainer/PageContainer";

export default function BOCAMinutes(props) {
  return (
    <PageContainer>
      <Divider />
      <Header>BOCA Minutes</Header>

      <Table celled unstackable>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
            <Table.HeaderCell width={3}>Dated</Table.HeaderCell>
            <Table.HeaderCell>Title of Download File</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {console.log(props.data)}

        <Table.Body>
          {props.data.map((item, index) => {
            return (
              <Table.Row textAlign='center'>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>
                  {new Date(item["date"]).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>
                  <a
                    target='_blank'
                    href={main_backend_path + item["file"]["url"]}>
                    {item["title"]}
                  </a>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </PageContainer>
  );
}

export async function getServerSideProps(context) {
  try {
    let result = await fetch(backend + "boca-minutes");

    let data = await result.json();

    console.log(data);

    return {
      props: { data: data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}
