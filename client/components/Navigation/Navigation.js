import React from 'react'

import { Menu, Dropdown } from "semantic-ui-react"

export default function Navigation() {

    let [activeItem, setActive] = React.useState("home")
    let handleItemClick = () => { }
    return (
        <div>
            <Menu size="large" stackable  borderless >
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />

                <Dropdown text='Organization' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>How to Reach</Dropdown.Item>
                        <Dropdown.Item>SDA Borard Members</Dropdown.Item>
                        <Dropdown.Item>Organizational Chart</Dropdown.Item>
                        <Dropdown.Item>Administrative Setup</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Acheivements</Dropdown.Item>
                        <Dropdown.Item>Auction Committee</Dropdown.Item>
                        <Dropdown.Item>Purchase Committee</Dropdown.Item>
                        <Dropdown.Item>Works Committee</Dropdown.Item>
                        <Dropdown.Item>Former V.Cs of SDA</Dropdown.Item>
                        <Dropdown.Item>Telephone Directory</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown text='Projects' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Housing Projects</Dropdown.Item>
                        <Dropdown.Item>Commercial Projects</Dropdown.Item>
                        <Dropdown.Item>Infrastructural Projects</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>



                <Dropdown text='Planning' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Srinagar Master Plan-2035</Dropdown.Item>
                        <Dropdown.Item>BOCA Committees</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown text='Land Management' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Allotment Policy</Dropdown.Item>
                        <Dropdown.Item>Future Land Policy</Dropdown.Item>
                        <Dropdown.Item>Transfer Policy</Dropdown.Item>
                        <Dropdown.Item>Land Bank</Dropdown.Item>
                        <Dropdown.Item>SDA Parking Lots</Dropdown.Item>
                        <Dropdown.Item>Shops/Shopsites</Dropdown.Item>
                        <Dropdown.Item>Government Schemes</Dropdown.Item>
                        <Dropdown.Item>Draw of lots</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown text='RTI' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>J&K Right to Information Act</Dropdown.Item>
                        <Dropdown.Item>J&K Right to Information Rules</Dropdown.Item>
                        <Dropdown.Item>Details of FAA and PIO</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown text='Media Gallery' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Photo Gallery</Dropdown.Item>
                        <Dropdown.Item>Video Gallery</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>



                <Menu.Item
                    name='downloads'
                    active={activeItem === 'downloads'}
                    onClick={handleItemClick}
                />


                <Menu.Item
                    name='contact us'
                    active={activeItem === 'contact us'}
                    onClick={handleItemClick}
                />


            </Menu>
        </div>
    )
}
