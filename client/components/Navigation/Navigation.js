import React from "react";

import Link from "next/link";

import { Menu, Dropdown, Icon } from "semantic-ui-react";

import styles from "./Navigation.module.css";

import { main_backend_path } from "../../constants/constants";

import Router from "next/router";

export default function Navigation() {
  let [activeItem, setActive] = React.useState("home");
  let handleItemClick = () => {};

  let [menuHidden, setMenuHidden] = React.useState(true);

  let menuClassName = "";

  if (menuHidden) {
    menuClassName = ["main_wrapper", "menu_hidden"]
      .map((item) => styles[item])
      .join(" ");
  } else {
    menuClassName = styles["main_wrapper"];
  }

  Router.events.on("routeChangeStart", () => {
    setMenuHidden(true);
  });

  return (
    <div className={styles["supreme_wrapper"]}>
      <div className={styles["icons_wrapper"]}>
        <Icon
          name='unordered list'
          size='big'
          style={{ color: "white", margin: "1rem" }}
          onClick={(e) => {
            setMenuHidden(!menuHidden);
          }}
        />
      </div>
      <div className={menuClassName}>
        <Menu size='large' stackable borderless>
          <Menu.Item
            name='home'
            active={activeItem === "home"}
            onClick={handleItemClick}>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </Menu.Item>

          <Dropdown text='Organization' className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link href='About'>
                  <a>Mission & Objectives</a>
                </Link>
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item>
                <Link href='/organization/Board'>
                  <a>SDA Borard Members</a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href='/pdfs/organization.pdf' target='_blank'>
                  Organizational Chart
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href='/organization/AdministrativeSetup'>
                  <a>Administrative Setup</a>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link href='/organization/Achievements'>
                  <a>Achievements</a>
                </Link>
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item>
                <Link href='/organization/SeniorityList'>
                  <a>Seniority List</a>
                </Link>
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item>
                <Link href='/organization/AuctionCommittee'>
                  <a>Auction Committee</a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href='/organization/PromotionCommittee'>
                  <a>Departmental Promotion Committee</a>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link href='/organization/PurchaseCommittee'>
                  <a>Purchase Committee</a>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link href='/organization/WorksCommittee'>
                  <a>Works Committee</a>
                </Link>
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item>
                <a
                  target='_blank'
                  href={
                    main_backend_path + "/uploads/former_V_Cs_6f9db65fde.png"
                  }>
                  Former VCs of SDA
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href='/organization/TelephoneDirectory'>
                  Telephone Directory
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link href='/organization/Reach'>
                  <a>How to Reach</a>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown text='Notifications' className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link href='/information/Notices'>Public Notices</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link href='/information/Tenders'>Tenders</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link href='/information/Circular_Order'>
                  Circulars and Orders
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link href='/information/EOI'>Expression of Interest</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link href='/information/STQ'>Short Term Quotations</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown text='Projects' className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link href='/projects/Housing'>Housing Projects</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href='/projects/Commercial'>Commercial Projects</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href='/projects/Infrastructural'>
                  Infrastructural Projects
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown text='Planning' className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link href='/planning/MasterPlan'>
                  Srinagar Master Plan-2035
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href='/land_management/DocumentsRequired'>
                  Building Plan Approval
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href='/planning/BOCA'>BOCA Committees</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown text='e-Governance' className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <a
                  target='_blank'
                  href='http://jkapp.ulb.gov.in/bld_public_noc_JK/UserType.htm'>
                  Online Building Permission Status
                </a>
              </Dropdown.Item>

              <Dropdown.Item>
                <a
                  target='_blank'
                  href='https://jkgrievance.in/AwazAAwam/index.aspx'>
                  Online Public Grievance Monitoring
                </a>
              </Dropdown.Item>

              <Dropdown.Item>
                <a target='_blank' href='https:/jktenders.gov.in'>
                  Online Tenders
                </a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown text='Land Management' className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link href='/land_management/AllotmentPolicy'>
                  Allotment Policy
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link href='/land_management/TransferPolicy'>
                  Transfer Policy
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href='/land_management/FutureLandPolicy'>
                  Future Land Policy
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <a
                  href={
                    main_backend_path +
                    "/uploads/Land_Bank_Srinagar_Development_Authority_57b8c1cc60.pdf"
                  }
                  target='_blank'>
                  Land Bank
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href='/land_management/ParkingLots'>
                  SDA Parking Lots
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <a
                  target='_blank'
                  href={main_backend_path + "/uploads/Shops1_d12d0f2a94.pdf"}>
                  Shops/Shopsites
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href='/land_management/Schemes'>Government Schemes</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href='/land_management/DrawOfLots'>Draw of lots</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown text='RTI' className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link href='/rti/RTI'>RTI Details</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href='/rti/Applications'>RTI Applications</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown text='Media Gallery' className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link href='/gallery/PhotoGallery'>Photo Gallery</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <a
                  target='_blank'
                  href='https://www.youtube.com/channel/UCjo52sg8J-hLuAihb1csZDQ'>
                  Video Gallery
                </a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* <Menu.Item
            name='downloads'
            active={activeItem === "downloads"}
            onClick={handleItemClick}>
            <Link href='/downloads/Downloads'>Downloads</Link>
          </Menu.Item> */}

          <Menu.Item>
            <Link href='/contact/Contact'>Contact Us</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
