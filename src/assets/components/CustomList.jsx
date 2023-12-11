export default function ({ type, list, buttons }) {
  const Lista = ({ children }) =>
    type === "ul" ? <ul>{children}</ul> : <ol>{children}</ol>;
  return (
    <Lista type={type}>
      {list.map((text, i) => (
        <li key={`li${i}`}>
          {text}
          {buttons.map((text) => (
            <button>{text}</button>
          ))}
        </li>
      ))}
    </Lista>
  );
}
