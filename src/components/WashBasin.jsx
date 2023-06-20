import React from "react";
import { Col, Row } from "react-bootstrap";
import washBasin from "../assets/images/webp//WashBasin2.webp";
const WashBasin = () => {
  return (
    <>
      <section className="py-5">
        <div className="max_w1920 mx-auto py-xl-4 my-lg-2">
          <Row className="align-items-center flex-wrap-reverse">
            <Col className="pe-xl-5 pe-lg-4" lg={6} xs={12}>
              <img className="w-100 pe-xxl-4" src={washBasin} alt="img" />
            </Col>
            <Col lg={6} xs={12}>
              <div
                style={{ maxWidth: "630px" }}
                className="pe-lg-5 me-xl-4 d-flex align-items-center flex-column ms-lg-auto mx-auto mb-lg-0 mb-3"
              >
                <h2 className="text-center fs_5xl fw-normal ff_Forum mb-xxl-5 mb-lg-4 mb-2 fc_black lh_100">
                  все еще сомневаетесь?
                </h2>
                <div
                  style={{ maxWidth: "500px" }}
                  className="d-flex align-items-center flex-column"
                >
                  <p className="text-center ff_Montserrat fw-normal fs_md mb-xl-5 mb-3 fc_dark">
                    Получите консультацию прямо сейчас
                  </p>
                  <button className="ff_Montserrat fw-normal fs_sm fc_black BasinButton bg-transparent">
                    ОСтавить контакты
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default WashBasin;
