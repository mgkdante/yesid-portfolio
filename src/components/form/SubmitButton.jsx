const SubmitButton = ({ loading }) => (
  <button
    type="submit"
    className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
  >
    {loading ? "Sending..." : "Send"}
  </button>
);

export default SubmitButton;
