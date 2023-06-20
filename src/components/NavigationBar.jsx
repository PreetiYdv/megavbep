import React, { useState } from "react";
import instagram from "../assets/images/svg/instaIcon.svg";
import whatsapp from "../assets/images/svg/whatsappIcon.svg";
import message from "../assets/images/svg/msgIcon.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const NavigationBar = () => {
  const [show, setshow] = useState(true);
  function showUl() {
    setshow(!show);
  }
  if (!show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <nav className="ps-md-5 px-3 pe-md-4 py-3">
        <div className="max_w1920 mx-auto d-flex justify-content-between align-items-center gap_83 gap_60 gap_35  pt-1">
          <div
            className={`d-flex align-items-center w-100 justify-content-xl-between justify-content-center navBarSM z_50 ${
              show ? "" : "start-0"
            }`}
          >
            <ul className=" d-flex align-items-center flex-xl-row flex-column mb-0 ps-0 gap_136 gap_60 gap_35">
              <li>
                <a
                  className="ff_Forum fw-normal fs_xl fc_dark text-uppercase"
                  href="#"
                >
                  ПОРТФОЛИО
                </a>
              </li>
              <li>
                <a
                  className="ff_Forum fw-normal fs_xl fc_dark text-uppercase"
                  href="#"
                >
                  уСЛУГИ
                </a>
              </li>
              <li>
                <a
                  className="ff_Forum fw-normal fs_xl fc_dark text-uppercase"
                  href="#"
                >
                  оТЗЫВЫ{" "}
                </a>
              </li>
              <li>
                <a
                  className="ff_Forum fw-normal fs_xl fc_dark text-uppercase"
                  href="#"
                >
                  кОНТАКТЫ
                </a>
              </li>
            </ul>
            <ul className="ps-0 mb-0 d-flex flex-column">
              <li>
                <a className=" ff_Montserrat fw-normal fs_xsm fc_grey" href="#">
                  <i>+7 747 274 22 60</i>
                </a>
              </li>
              <li>
                <a className=" ff_Montserrat fw-normal fs_xsm fc_grey" href="#">
                  <i>+7 727 327 73 27</i>
                </a>
              </li>
            </ul>
          </div>
          <div onClick={showUl} className="d-xl-none d-block z_50">
            <h2 className="fc_black fs_xl position-relative z_51">
              {show ? <HiMenuAlt1 /> : <AiOutlineClose />}
            </h2>
          </div>
          <div className="d-flex align-items-center gap_20">
            <img src={instagram} alt="icon" />
            <img src={whatsapp} alt="icon" />
            <img src={message} alt="icon" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
