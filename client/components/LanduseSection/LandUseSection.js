import React from "react";
import { Header, Container, Image } from "semantic-ui-react";

import { main_backend_path } from "../../constants/constants";

import styles from "./LandUseSection.module.css";

export default function LandUseSection() {
  return (
    <div className={styles["main_wrapper"]}>
      <Container>
        <a target="_blank" href={main_backend_path+"/uploads/Final_Landuse_Plan_0eed3696ed.pdf"}>
          <div className={styles["sub_wrapper"]}>
            <div className={styles["map_wrapper"]}>
              <Header style={{ color: "white" }} as="h3">
                LAND USE MAP
              </Header>
              <Image
                rounded
                src="https://www.sdasrinagar.com/wp-content/uploads/2017/03/Land-use-map.jpg"
                size="small"
              />
            </div>

            <div className={styles["map_wrapper"]}>
              <Header style={{ color: "white" }} as="h3">
                NORTH SRINAGAR
              </Header>
              <Image
                rounded
                src="https://www.sdasrinagar.com/wp-content/uploads/2017/03/Land-use-map.jpg"
                size="small"
              />
            </div>

            <div className={styles["map_wrapper"]}>
              <Header style={{ color: "white" }} as="h3">
                SOUTH SRINAGAR
              </Header>
              <Image
                rounded
                src="https://www.sdasrinagar.com/wp-content/uploads/2017/03/Land-use-map.jpg"
                size="small"
              />
            </div>
          </div>
        </a>
      </Container>
    </div>
  );
}
