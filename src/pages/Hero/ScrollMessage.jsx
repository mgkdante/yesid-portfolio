// ScrollMessage.jsx
import useShowMessage from "./useShowMessage";
import useTimerEffect from "./useTimerEffect";

const ScrollMessage = () => {
  const [showMessage, setShowMessage] = useShowMessage(true);

  useTimerEffect(() => {
    setShowMessage(false);
  }, 5000); // 5000ms = 5s

  return showMessage ? (
    <div className="absolute top-0 right-full mr-2 w-32 text-center text-white p-2 rounded">
      Click here to scroll to the next section
    </div>
  ) : null;
};

export default ScrollMessage;
