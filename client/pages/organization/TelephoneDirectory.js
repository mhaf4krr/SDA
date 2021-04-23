import React from "react";

import { Container, Header, Table } from "semantic-ui-react";

import PageContainer from "../../components/PageContainer/PageContainer";

let members = [
  {
    name: "Dr. Bashir Ahmad Lone,KAS",
    designation: "Vice Chairman",
    phone: "0194-2493191",
    mobile: "NA",
  },
  {
    name: "Fayaz Ahmad Banday,KAS",
    designation: "Director Land Management",
    phone: "0194-2490443",
    mobile: "NA",
  },

  {
    name: "Ms. Mantasha Binti Rashid,KAS",
    designation: "Secretary",
    phone: "0194-2493221",
    mobile: "NA",
  },

  {
    name: "Showkat Ahmad Mattoo",
    designation: "DDLM / PIO",
    phone: "0194-2490443",
    mobile: "9419007319",
  },

  {
    name: "Ms. Farzana Naqshbandi",
    designation: "Senior Town Planner",
    phone: "0194-2492841",
    mobile: "9419553470",
  },

  {
    name: "Javed Ahmad Qadri",
    designation: "Executive Engineer",
    phone: "0194-2493199",
    mobile: "9419095058",
  },
];

export default function TelephoneDirectory() {
  return (
    <PageContainer>
      <Header>Telephone Directory</Header>

      <Table celled unstackable>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Mobile</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {members.map((member, index) => {
            return (
              <Table.Row textAlign='center'>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{member["name"]}</Table.Cell>
                <Table.Cell>{member["designation"]}</Table.Cell>
                <Table.Cell>{member["phone"]}</Table.Cell>
                <Table.Cell>{member["mobile"]}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </PageContainer>
  );
}
