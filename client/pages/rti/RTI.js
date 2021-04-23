import React from "react";

import { Header, Container, Divider } from "semantic-ui-react";

import { main_backend_path } from "../../constants/constants";

export default function RTI() {
  return (
    <div style={{ padding: "2rem" }}>
      <Divider />
      <Container>
        <Header as='h2'>Right To Information (RTI)</Header>
        <Header>Right To Information</Header>
        <p>
          The right to information Act, 2005 is a landmark legislation passed by
          the government of India. It is one of very most powerful tool for
          promoting transparency and accountability in the working of every
          public authority with an objective of ushering in good governance.
        </p>

        <Header>RTI PDF DOWNLOADABLE FILES</Header>
        <ul>
          <li>
            <a
              href={
                main_backend_path + "/uploads/JK_RTI_Act_2005_bdf32ec4a9.pdf"
              }>
              RTI ACT 2005
            </a>
          </li>

          <li>
            <a href={main_backend_path + "/uploads/rtiforms1_5e085cde29.pdf"}>
              RTI FORM
            </a>
          </li>

          <li>
            <a
              href={
                main_backend_path +
                "/uploads/handbook10april2021_b490062f24.pdf"
              }>
              RTI HANDBOOK
            </a>
          </li>
        </ul>

        <Header as='h4'>1. First Appellate Authority (FAA)</Header>
        <p>Dr. Fayaz Ahmad Banday, KAS</p>
        <p>Director Land Management,SDA</p>
        <p>Office Phone No. 0194-2493191</p>
        <p>Fax No. 0194-2493180</p>
        <p>Cell No. 9906578093</p>
        <p>Email: srinagardevelopmentauthority[at]gmail.com</p>

        <Header as='h4'>2. Public Information officer, SDA</Header>
        <p>Mr. Showkat Ahmad Mattoo</p>
        <p>Dy. Director Land Management.</p>
        <p>Office Phone No. : 0194-2490443</p>
        <p>Fax No: 0194-2493180</p>
        <p>Email: srinagardevelopmentauthority@gmail.com</p>

        <p>Cell No :9419007319</p>
      </Container>
    </div>
  );
}
