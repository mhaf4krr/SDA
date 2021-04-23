import React from "react";
import { Header } from "semantic-ui-react";

import PageContainer from "../../components/PageContainer/PageContainer";

import { main_backend_path } from "../../constants/constants";

export default function DocumentsRequired() {
  return (
    <PageContainer>
      <Header>Building Plan Approval</Header>
      <div>
        <ol>
          <li>
            <a
              target='_blank'
              href={main_backend_path + "/uploads/form_A_80a512113c.pdf"}>
              Building Permission Application Form (Form "A")
            </a>
          </li>

          <li>
            <a
              target='_blank'
              href={
                main_backend_path + "/uploads/doc_list_0001_c9abf39ed8.pdf"
              }>
              Building Permission Application Processing Steps
            </a>
          </li>

          <li>
            <a
              target='_blank'
              href={
                main_backend_path + "/uploads/unertaking_bp_b0dc6ccaeb.pdf"
              }>
              Undertaking Proforma
            </a>
          </li>

          <li>
            <a
              target='_blank'
              href='http://jkapp.ulb.gov.in/bld_public_noc_JK/UserType.htm'>
              Track your online building permission status with Submit No. and
              Date
            </a>
          </li>

          <li>
            <a
              target='_blank'
              href={
                main_backend_path + "/uploads/plinth_proced_43f709ab2a.pdf"
              }>
              Procedure for Plinth Inspection
            </a>
            <ol>
              <li>
                <a
                  target='_blank'
                  href={
                    main_backend_path +
                    "/uploads/plinth_level_Annex_1_d4f999a170.pdf"
                  }>
                  Annexure-I
                </a>
              </li>

              <li>
                <a
                  target='_blank'
                  href={
                    main_backend_path +
                    "/uploads/plinth_level_Annex_11_37ffc3d193.pdf"
                  }>
                  Annexure-II
                </a>
              </li>

              <li>
                <a
                  target='_blank'
                  href={
                    main_backend_path +
                    "/uploads/plinth_level_Annex_111_f131eb0dcc.pdf"
                  }>
                  Annexure-III
                </a>
              </li>
            </ol>
          </li>

          <li>
            <a
              target='_blank'
              href={
                main_backend_path + "/uploads/procedure_occup_426502d68a.pdf"
              }>
              Procedure for Obtaining Occupancy Certificate
            </a>
            <ol>
              <li>
                <a
                  target='_blank'
                  href={
                    main_backend_path + "/uploads/occup_annex_iv_a6c4717b28.pdf"
                  }>
                  Annexure-IV
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href={
                    main_backend_path + "/uploads/occup_annex_v_d0acb42ab6.pdf"
                  }>
                  Annexure-V
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href={
                    main_backend_path + "/uploads/occup_annex_vi_db6d292f67.pdf"
                  }>
                  Annexure-VI
                </a>
              </li>
            </ol>
          </li>

          <li>
            <a
              target='_blank'
              href={
                main_backend_path + "/uploads/Occupancy_cer_bp_0a6f560950.pdf"
              }>
              Format of Completion-cum-Occupancy Certificate
            </a>
          </li>
        </ol>
      </div>
    </PageContainer>
  );
}
