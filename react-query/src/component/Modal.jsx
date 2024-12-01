import { useEffect, useState } from "react";

const Modal = ({showModal, changeShowModal}) => {

 const [animationClass, setAnimationClass] = useState("");

 useEffect(() => {
   if (showModal) {
     setAnimationClass("appear-animate"); // Add the appear animation class
   } else if (!showModal) {
     setAnimationClass("disappear-animate"); // Add the disappear animation class
   }
 }, [showModal]);

 const handleAnimationEnd = () => {
   if (animationClass === "disappear-animate") {
     setAnimationClass(""); // Reset animation class after disappearing
   }
 };

 if (!showModal && animationClass === "") return null; 
    

  return (
    <div
      className={`modal-container ${animationClass}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="modal">
        <h1 className="modal-heading">Resolution Options</h1>
        <p className="modal-desc">Select one option you want to choose.</p>
        <div className="modal-select">
          <label htmlFor="resolution-options">Resolution Options</label>
          <select name="resolution-options" id="resolution-options">
            <option value="redo">
              <div className="option-content">
                <span>Re-do Service</span>
                <div className="symbol"></div>
              </div>
            </option>
            <option value="credit">
              <div className="option-content">
                <span>Credit towards future service</span>
                <div className="symbol"></div>
              </div>
            </option>
            <option value="refund">
              <div className="option-content">
                <span>Refund</span>
                <div className="symbol"></div>
              </div>
            </option>
          </select>
        </div>
        <div className="modal-buttons">
          <button className="done" onClick={() => changeShowModal(false)}>
            Done
          </button>
          <button className="cancel" onClick={() => changeShowModal(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal