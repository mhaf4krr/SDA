import React from 'react'

import {Table} from "semantic-ui-react"

import {main_backend_path} from "../../constants/constants"

export default function InfoTable({data}) {
    return (
        <div>
            <Table celled unstackable>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
              <Table.HeaderCell>Dated</Table.HeaderCell>
              <Table.HeaderCell>Notification Title</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {data.map((item, index) => {
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
        </div>
    )
}
