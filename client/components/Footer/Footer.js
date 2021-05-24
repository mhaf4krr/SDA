import React from "react";

import styles from "./Footer.module.css";

import FooterNav from "./ListItem/ListItem";
export default function Footer() {
  let ABOUT_LINKS = [
    { title: "Mission & Objectives", link: "/About" },
    {
      title: "Organizational Chart",
      link: "/pdfs/organization.pdf",
    },
    {
      title: "Administrative Setup",
      link: "/organization/AdministrativeSetup",
    },
    {
      title: "Achievements",
      link: "/organization/Achievements",
    },
    {
      title: "Telephone",
      link: "/organization/TelephoneDirectory",
    },
  ];

  let QUICK_LINKS = [
    {
      title: "Srinagar Master Plan",
      link: "/planning/MasterPlan",
    },
    {
      title: "Available Properties",
      link: "/AvailableProperties",
    },
    {
      title: "List of Documents for Applications",
      link: "/Applications",
    },
    {
      title: "Allotment Policy",
      link: "/land_management/AllotmentPolicy",
    },
    {
      title: "Transfer Policy",
      link: "/land_management/TransferPolicy",
    },
  ];

  let EXTERNAL_LINKS = [
    {
      title: "Srinagar Muncipal Corporation",
      link: "http://www.smcsrinagar.in/",
    },
    {
      title: "Housing & Urban Development",
      link: "http://jkhudd.gov.in/",
    },
    {
      title: "Urban Local Bodies",
      link: "http://www.ulbk.org/",
    },
    {
      title: "Jammu Development Authority",
      link: "http://www.jda.jk.gov.in",
    },
    {
      title: "General Administrative Dept.",
      link: "https://www.jkgad.nic.in/",
    },
  ];

  return (
    <div className={styles["main_wrapper"]}>
      <div className={styles["sub_wrapper"]}>
        <FooterNav title='About SDA' data={ABOUT_LINKS} />
        <FooterNav title='Quick Links' data={QUICK_LINKS} />
        <FooterNav title='External Links' data={EXTERNAL_LINKS} />
      </div>
      <div>
        <p>
          Website Designed, Developed and Maintained by Jammu & Kashmir
          e-Governance Agency (JaKeGA)
        </p>
      </div>
    </div>
  );
}
