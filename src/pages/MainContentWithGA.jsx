import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import usePageScroll from "../hooks/usePageScroll";
import MainContent from "./MainContent";

ReactGA.initialize("G-TLYPGQ6X12");

const MainContentWithGA = () => {
  const location = useLocation();

  usePageScroll(location);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return <MainContent />;
};

export default MainContentWithGA;
