import React from "react";

import { Container, Header, Divider, Table } from "semantic-ui-react";

let CONTACT = [
  {
    name: "Dr. Bashir Ahmad Lone,KAS",
    designation: "Vice Chairman",
    phone: "0194-2493191",
    mobile: "9419097824",
    email: "vcsda-jk@nic.in",
  },
  {
    name: "Fayaz Ahmad Banday,KAS",
    designation: "Director Land Management",
    phone: "0194-2490443",
    mobile: "9906578093",
    email: "srinagardevelopmentauthority@gmail.com",
  },
  {
    name: "Ms. Farzana Naqashbandi",
    designation: "Senior Town Planner",
    phone: "0194-2492841",
    mobile: "9419553470",
    email: "srinagardevelopmentauthority@gmail.com",
  },
  {
    name: "Ms. Mantasha Binti Rashid,KAS",
    designation: "Secretary",
    phone: "0194-2493221",
    mobile: "9419445357",
    email: "srinagardevelopmentauthority@gmail.com",
  },
  {
    name: "Showkat Ahmad Mattoo",
    designation: "DDLM/PIO",
    phone: "0194-2490443",
    mobile: "9419007319",
    email: "srinagardevelopmentauthority@gmail.com",
  },

  {
    name: "Javaid Hassan Qadri",
    designation: "Executive Engineer",
    phone: "0194-2493199",
    mobile: "9419095058",
    email: "srinagardevelopmentauthority@gmail.com",
  },
];

export default function Contact() {
  return (
    <div style={{ padding: "2rem" }}>
      <Container>
        <Header>Contact Us</Header>
        <Divider />
        <Table celled unstackable selectable>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Designation</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>Mobile</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {CONTACT.map((member, index) => {
              return (
                <Table.Row textAlign='center'>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{member["name"]}</Table.Cell>
                  <Table.Cell>{member["designation"]}</Table.Cell>
                  <Table.Cell>{member["phone"]}</Table.Cell>
                  <Table.Cell>{member["mobile"]}</Table.Cell>
                  <Table.Cell>{member["email"]}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}
