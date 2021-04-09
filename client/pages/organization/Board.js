import React from "react";

import { Table, Header, Icon } from "semantic-ui-react";

import styles from "../../styles/Board.module.css"

let members = [
  {
    name:
      "Principal Secretary to Government, Housing  &  Urban Development Department",
    designation: "Chairman",
  },

  {
    name: "Administrative Secretary, Finance Department",
    designation: "Member",
  },
  {
    name: "Administrative Secretary, Planning Dev and Monitoring Department.",
    designation: "Member",
  },
  {
    name: "Administrative Secretary, Revenue Department",
    designation: "Member",
  },
  {
    name: "Divisional Commissioner, Kashmir",
    designation: "Member",
  },

  {
    name: "Deputy Commissioner, Srinagar",
    designation: "Member",
  },

  {
    name: "Vice Chairman Srinagar Development Authority",
    designation: "Member Secretary",
  },
  {
    name: "Commissioner, Srinagar Municipal Corporation",
    designation: "Member",
  },

  {
    name: "Chief Architect",
    designation: "Member",
  },

  {
    name: "Chief Town Planner, Kashmir",
    designation: "Member",
  },

  {
    name: "Chief Engineer (R&B), Kashmir",
    designation: "Member",
  },
];

export default function Board() {
  return (
    <div className={styles["main_wrapper"]} style={{ padding: "3.5rem" }}>
      <Header>SDA Board Members</Header>

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
    </div>
  );
}
