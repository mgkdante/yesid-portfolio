import { useState } from "react";

const useShowMessage = (initialState) => {
  const [showMessage, setShowMessage] = useState(initialState);

  return [showMessage, setShowMessage];
};

export default useShowMessage;
