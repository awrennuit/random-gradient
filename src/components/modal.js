import { useEffect, useState } from "react";
import "../stylesheets/_modal.scss";

export default function Modal({ gradient, name }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 500);
  }, []);

  const selectText = (text) => {
    if (document.selection) {
      // for IE
      const range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(text));
      range.select();
    } else if (window.getSelection) {
      const range = document.createRange();
      range.selectNode(document.getElementById(text));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  };

  return (
    <div className={`modal ${isOpen ? null : "modal--hidden"}`}>
      <h1 className="modal__name">{name}</h1>
      <p
        id="gradient"
        className="modal__code"
        onClick={() => selectText("gradient")}
      >
        {gradient}
      </p>
    </div>
  );
}
