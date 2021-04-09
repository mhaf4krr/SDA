import React from 'react'

import { Container, Divider, Input, Menu, Segment, Table } from 'semantic-ui-react'

import NotificationTable from "./Table/NotificationTable"

export default function NotificationsSection() {

    let [activeItem, setActiveItem] = React.useState("Public Notices")
    let handleItemClick = (e, { name }) => setActiveItem(name)

    return (
       
        <div style={{ padding: "1.5rem 2rem",backgroundColor:"#EEF0F1" }}>
            <Divider/>
             
            <Menu attached='top' stackable tabular>

                <Menu.Item
                    name='Public Notices'
                    active={activeItem === 'Public Notices'}
                    onClick={handleItemClick}
                />

                <Menu.Item
                    name='Circulars and Orders'
                    active={activeItem === 'Circulars and Orders'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Tenders'
                    active={activeItem === 'Tenders'}
                    onClick={handleItemClick}
                />

                <Menu.Item
                    name='Expression of Interest'
                    active={activeItem === 'Expression of Interest'}
                    onClick={handleItemClick}
                />

                <Menu.Item
                    name='Short Term Quotations'
                    active={activeItem === 'Short Term Quotations'}
                    onClick={handleItemClick}
                />

            </Menu>

            <Segment attached='bottom'>

                <NotificationTable />

            </Segment>
           
           <Divider/>

        </div>
       
    )
}
