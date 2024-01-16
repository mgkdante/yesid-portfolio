import ReactGA from "react-ga4";

export const sendGAEvent = (category, action) => {
  let actionStr;
  if (typeof action === "object") {
    // If the action is an object, extract the action description
    actionStr = action.action;
  } else {
    actionStr = action;
  }

  // console.log(`Sending event: ${category}, ${actionStr}`);
  ReactGA.event({
    category: category,
    action: actionStr,
  });
};
