import React from "react";

import { Container, Header, Table } from "semantic-ui-react";

let members = [
  {
    name: "Vice Chairman, SDA ",
    designation: "Chairman",
  },

  {
    name: "Special Secretary to Govt, H&UDD",
    designation: "Member",
  },
  {
    name: "Secretary, SDA",
    designation: "Member",
  },
  {
    name: "Secretary, SDA",
    designation: "Member",
  },
  {
    name: "Financial Advisor/CAO,SDA",
    designation: "Member",
  },
  {
    name: "Administrative Officer, SDA",
    designation: "Member Secretary",
  },
];

export default function PromotionCommittee() {
  return (
    <div style={{ padding: "3.5rem" }}>
      <Container>
        <Header>Departmental Promotion Committee</Header>

        <p>
        As per the Government Order No: 171-HUD of 2010 dated 12-05-2010, the Departmental Promotion Committee in SDA constitutes following Members:
        </p>
        <Table celled unstackable>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
              <Table.HeaderCell>Member</Table.HeaderCell>
              <Table.HeaderCell>Designation</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {members.map((member, index) => {
              return (
                <Table.Row textAlign="center">
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{member["name"]}</Table.Cell>
                  <Table.Cell>{member["designation"]}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}
