import { useRef } from "react";

export default function UseRefTest() {
  const inputEl = useRef();
  const onButtonClick = () => {
    // `current` aponta para o evento de `focus` gerado pelo campo de texto
    console.log(inputEl.current);
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <input ref={inputEl} type="text" />
      <input  ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus no input</button>
    </>
  );
}
