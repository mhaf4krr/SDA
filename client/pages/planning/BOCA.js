import React from "react";

import PageContainer from "../../components/PageContainer/PageContainer";

import { Container, Header, Table } from "semantic-ui-react";

let SMA = [
  {
    name: "Municipal commissioner",
    designation: "Chairman",
  },

  {
    name: " Senior Town Planner, SDA",
    designation: "Member",
  },
  {
    name: "Assistant Commissioners, Nazool  ",
    designation: "Member",
  },
  {
    name: "Executive Engineer, Public Health Engineering",
    designation: "Member",
  },
  {
    name: "Executive Engineer, Power Dev. Department",
    designation: "Member",
  },
  {
    name: "Executive Engineer, Sewerage & Drainage",
    designation: "Member",
  },
  {
    name: " Secretary lakes and WWDA",
    designation: "Member",
  },
  {
    name: " Joint Municipal Commissioner",
    designation: "Member Secretary",
  },
];

let NSMA = [
  {
    name: "Vice Chairman of SDA",
    designation: "Chairman",
  },

  {
    name: " Director Land Management, SDA",
    designation: "Member",
  },

  {
    name: "Executive Engineer, Public Health Engineering",
    designation: "Member",
  },
  {
    name: "Executive Engineer, Power Dev. Department",
    designation: "Member",
  },
  {
    name: "Executive Engineer, Sewerage & Drainage",
    designation: "Member",
  },
  {
    name: " Secretary lakes and WWDA",
    designation: "Member",
  },
  {
    name: " Senior Town Planner,SDA",
    designation: "Member Secretary",
  },
];

export default function BOCACommittee() {
  return (
    <PageContainer>
      <Header>BOCA Committee</Header>

      <p>
        SRO 152 :-In exercise of the powers conferred by sub-section (2) of
        section 3 of Jammu and Kashmir control of Building operation Act, 1988,
        the Government hereby rescind the notification SRO 463 Dated 13-12-2000
        and SRO 273 dated:18-08-2004 and in partial notification of notification
        SRO 289 Dated:21-07-1999 appoint the following authorities in respect of
        (a) Srinagar municipal area and (b) local area of Srinagar not included
        in the municipal area of Srinagar :-
      </p>

      <Header as='h4'>Srinagar Muncipal Area</Header>
      <Table celled unstackable>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
            <Table.HeaderCell>Member</Table.HeaderCell>
            <Table.HeaderCell>Designation</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {SMA.map((member, index) => {
            return (
              <Table.Row textAlign='center'>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{member["name"]}</Table.Cell>
                <Table.Cell>{member["designation"]}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      <Header as='h4'>
        Local Area of Srinagar not included in Muncipal Area of Srinagar
      </Header>
      <Table celled unstackable>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
            <Table.HeaderCell>Member</Table.HeaderCell>
            <Table.HeaderCell>Designation</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {NSMA.map((member, index) => {
            return (
              <Table.Row textAlign='center'>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{member["name"]}</Table.Cell>
                <Table.Cell>{member["designation"]}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </PageContainer>
  );
}
