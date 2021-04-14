import React from "react";

import { Container, Header, Table } from "semantic-ui-react";

let members = [
  {
    name: "Vice Chairman / Chairpoerson ,SDA",
    designation: "Chairman",
  },

  {
    name: "Director, Land Management",
    designation: "Member",
  },
  {
    name: "Administrative Secretary, Planning Dev and Monitoring Department.",
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
    name: "Executive Engineer,SDA",
    designation: "Member",
  },
];

export default function AuctionCommittee() {
  return (
    <div style={{ padding: "3.5rem" }}>
      <Container>
        <Header>Auction Committee</Header>

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
