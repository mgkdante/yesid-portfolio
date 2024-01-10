const TextareaInput = ({ name, value, onChange, placeholder, label }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <textarea
      rows={7}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

export default TextareaInput;
