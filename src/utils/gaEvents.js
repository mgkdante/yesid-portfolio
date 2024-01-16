import ReactGA from "react-ga4";

export const sendGAEvent = (category, action) => {
  const excludedHostnames = [
    "localhost",
    "192.168.50.41",
    "172.30.208.1",
    "172.26.208.1",
  ];
  let actionStr;
  if (typeof action === "object") {
    // If the action is an object, extract the action description
    actionStr = action.action;
  } else {
    actionStr = action;
  }
  if (excludedHostnames.includes(window.location.hostname)) {
    //console.log(`Skipping event: ${category}, ${actionStr}`);
    return;
  }

  //console.log(`Sending event: ${category}, ${actionStr}`);
  ReactGA.event({
    category: category,
    action: actionStr,
  });
};
