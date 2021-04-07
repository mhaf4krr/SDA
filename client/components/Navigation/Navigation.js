import React from 'react'

import { Menu, Dropdown } from "semantic-ui-react"

export default function Navigation() {

    let [activeItem, setActive] = React.useState("home")
    let handleItemClick = () => { }
    return (
        <div>
            <Menu size="large" compact >
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />

                <Dropdown text='About Us' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>History</Dropdown.Item>
                        <Dropdown.Item>Objectives</Dropdown.Item>
                        <Dropdown.Item>Board of Directors</Dropdown.Item>
                        <Dropdown.Item>Organization Chart</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Acts and Rules</Dropdown.Item>
                        <Dropdown.Item>Sections</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown text='Planning' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Inbox</Dropdown.Item>
                        <Dropdown.Item>Starred</Dropdown.Item>
                        <Dropdown.Item>Sent Mail</Dropdown.Item>
                        <Dropdown.Item>Drafts (143)</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Spam (1009)</Dropdown.Item>
                        <Dropdown.Item>Trash</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown text='Projects' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Inbox</Dropdown.Item>
                        <Dropdown.Item>Starred</Dropdown.Item>
                        <Dropdown.Item>Sent Mail</Dropdown.Item>
                        <Dropdown.Item>Drafts (143)</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Spam (1009)</Dropdown.Item>
                        <Dropdown.Item>Trash</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown text='Housing' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Inbox</Dropdown.Item>
                        <Dropdown.Item>Starred</Dropdown.Item>
                        <Dropdown.Item>Sent Mail</Dropdown.Item>
                        <Dropdown.Item>Drafts (143)</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Spam (1009)</Dropdown.Item>
                        <Dropdown.Item>Trash</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown text='e-Services' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Inbox</Dropdown.Item>
                        <Dropdown.Item>Starred</Dropdown.Item>
                        <Dropdown.Item>Sent Mail</Dropdown.Item>
                        <Dropdown.Item>Drafts (143)</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Spam (1009)</Dropdown.Item>
                        <Dropdown.Item>Trash</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown text='RTI' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Inbox</Dropdown.Item>
                        <Dropdown.Item>Starred</Dropdown.Item>
                        <Dropdown.Item>Sent Mail</Dropdown.Item>
                        <Dropdown.Item>Drafts (143)</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Spam (1009)</Dropdown.Item>
                        <Dropdown.Item>Trash</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown text='Media Gallery' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Inbox</Dropdown.Item>
                        <Dropdown.Item>Starred</Dropdown.Item>
                        <Dropdown.Item>Sent Mail</Dropdown.Item>
                        <Dropdown.Item>Drafts (143)</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Spam (1009)</Dropdown.Item>
                        <Dropdown.Item>Trash</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


                <Dropdown text='Information' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Inbox</Dropdown.Item>
                        <Dropdown.Item>Starred</Dropdown.Item>
                        <Dropdown.Item>Sent Mail</Dropdown.Item>
                        <Dropdown.Item>Drafts (143)</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Spam (1009)</Dropdown.Item>
                        <Dropdown.Item>Trash</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown text='Contact Us' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Inbox</Dropdown.Item>
                        <Dropdown.Item>Starred</Dropdown.Item>
                        <Dropdown.Item>Sent Mail</Dropdown.Item>
                        <Dropdown.Item>Drafts (143)</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Spam (1009)</Dropdown.Item>
                        <Dropdown.Item>Trash</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

     
            </Menu>
        </div>
    )
}
