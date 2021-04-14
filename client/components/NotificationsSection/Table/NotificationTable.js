import React from 'react'

import { Icon, Table } from "semantic-ui-react"

import {main_backend_path} from "../../../constants/constants"

export default function NotificationTable(props) {
    return (

        <Table celled unstackable>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
            <Table.HeaderCell width={3}>Dated</Table.HeaderCell>
            <Table.HeaderCell>Title of Download File</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.data.map((item, index) => {
            return (
              <Table.Row textAlign="center">
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>
                  {new Date(item["date"]).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell textAlign="left">
                  <a
                    target="_blank"
                    href={main_backend_path + item["file"]["url"]}
                  >
                    {item["title"]}
                  </a>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

    )
}
