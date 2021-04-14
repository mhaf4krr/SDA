import React from "react";

import { Container, Header, Table } from "semantic-ui-react";

let HOUSING = [
  {
    cat: "Scheduled Cast/Tribes",
    percentage: 5,
  },

  {
    cat:
      "Families of Govt. Servants and other Govt. servants who die in harness",
    percentage: 5,
  },
  {
    cat: "Serving Defense Personal",
    percentage: 2,
  },

  {
    cat: "Ex-Servicemen",
    percentage: 2,
  },
  {
    cat: "War Widows",
    percentage: 1,
  },
  {
    cat:
      "Families of innocent victims of terrorist violence and Law & Order situation",
    percentage: 4,
  },
  {
    cat: "Severly disabled persons/handicapped person",
    percentage: 2,
  },
  {
    cat:
      "Recent window (window within one year prior to the date of applications deserving compassionate treatment",
    percentage: 2,
  },
  {
    cat:
      "Outstanding performers in Arts/Culture/Sports winners of gallantry awards honours of state/central govt.",
    percentage: 2,
  },
];

export default function AllotmentPolicy() {
  return (
    <Container style={{ padding: "3rem" }}>
      <Header>Allotment Policy</Header>

      <Header as="h4">Housing</Header>
      <p>
        The Govt. has already laid down a comprehensive policy on development of
        Housing Colonies by Development Authorities for allotment of residential
        plots in the housing colonies. The policy provides for the development
        of housing colonies on self sustenance basis with elements of cross
        subsidization so that the weaker sections are provided plots on 50% cost
        subsidy. The distribution of plots is on first come first basis or by
        draw of lots barring 5% plots to be allotted under the Discretionary
        Quota of the Government out of the allotment of residential plots in the
        Housing Colonies in the balance 95% plots in housing colony, 75% are to
        be disposed off among the general public and 25 % among different
        categories of people specified below:
      </p>

      <div>
        <Table>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Percentage</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {HOUSING.map((item, index) => {
              return (
                <Table.Row textAlign="center">
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{item["cat"]}</Table.Cell>
                  <Table.Cell>{item["percentage"] + "%"}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
      <p style={{ paddingTop: "1.6rem" }}>
        The applications are invited from the categories specifically indicated
        from general public and are registered in such category separately. The
        No. of plots available are being allotted amongst different categories
        as per percentages indicated above and distributed by lots in public in
        presence of the applicants and the respectable persons of the state.
        Whenever the number of applications in any category is less than the No.
        of plots available in that category, the excess plots available in that
        category will be transferred to the general pool.
      </p>

      <p>
        The Srinagar Development Authority in 2007 advertised plots for its
        allotment to the residents of Jammu and Kashmir and the proposed Housing
        colony will be an extension of the present Bemina Township. The proposed
        colony will be developed on the prescribed standards and will have the
        amenities like roads, drains, electricity, water supply, parks public
        utilities and sufficient land has been earmarked for construction of 300
        flats in multi-storeyed residential blocks for LIG, MIG and HIG
        categories.
      </p>

      <p>
        The number of plots (approximately) available in the proposed colony for
        each category are as under:-
      </p>
      <ol>
        <li>
          Economically weaker sections/ Low Income Groups( EWS/LIG) 105 plots of
          25’x40’ size
        </li>

        <li>Middle Income groups ( MIG) 76 plots of 40’x60’ size</li>

        <li>Higher Income groups (HIG) 52 plots of 45’x80’ size</li>
      </ol>

      <p>
        The allotment of plots were decided by the draw of lots which was held
        on 21st April 2007 in presence of all the registered applicants and the
        Hon’ble Minister, Housing and Urban Development Department.
      </p>

      <Header as="h4"> COMMERCIAL :- </Header>
      <Header as="h5">
        HOW TO APPLY FOR SHOP / SHOP SITE / COMMERCIAL SPACE.
      </Header>

      <p>
        The Shops / Shopsites and Commercial spaces are allotted through auction
        for a period of 20 years in the first instance on lease / licencee.
      </p>

      <p>The Minimum Reserve Premium (Development Charges Non-Refundable) are always indicated in the Auction Notice and the intending applicants / bidders are required to file their sealed bid, which shall be over and above the Minimum Reserve Premium.</p>
    
        <p>
        The bids received are subject to acceptance of the Auction Committee, Srinagar Development Authority and usually the highest bids received are accepted.
        </p>

        <p>
        The rate of monthly rentals for Shops and Commercial Spaces are fixed for a period of five years and subject to increased of 15% after every five years. Likewise the annual ground rentals for Commercial sites are also fixed for (20) twenty years.
        </p>

        <p>
        The Auction Notices are given wide publicity in local leading daily newspapers and on electric media and the auction notices are also available on our official website.
        </p>
    </Container>
  );
}
