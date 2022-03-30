import { useRef } from "react";

export default function UseRefTest() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` aponta para o evento de `focus` gerado pelo campo de texto
    inputEl.current.focus();
    console.dir(inputEl.current)
  };
  return (
    <>
      <input onFocus={() => console.log("focus")} ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus no input</button>
    </>
  );
}
