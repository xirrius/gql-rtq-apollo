import { Image } from "lucide-react"
import "../component.scss"
import { useState } from "react";
import Modal from "./Modal";

const Component = () => {
  const [showModal, setShowModal] = useState(false)

  const changeShowModal = (val) => {
    setShowModal(val)
  }

  return (
    <div className="main">
      <div className="header">
        <div className="heading">
          <div className="heading-symbol"></div>
          <div className="heading-text">Complaint# 2023-CS123</div>
        </div>
        <div className="time">Posted at 12:45 AM</div>
      </div>
      <div className="img">
        <div className="img-item">
          <div className="img-item-text">
            <Image size={14}/> <span>Electrician.jpg</span>
          </div>
        </div>
        <div className="img-item">
          <div className="img-item-text">
            <Image size={14}/> <span>Electrician.jpg</span>
          </div>
        </div>
        <div className="img-item">
          <div className="img-item-text-last">
            <p>+2 more images</p>
            <h4>View all images</h4>
          </div>
        </div>
      </div>
      <div className="content">
        <h2>Service not upto the mark</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quam. Alias obcaecati totam, sunt incidunt expedita quasi commodi vitae beatae deserunt culpa eaque voluptate ipsa architecto hic exercitationem, quam possimus!</p>
      </div>
      <div className="footer">
        <div className="user">
            <div className="user-item">
                <img src="./avatar.jpg.avif" alt="" />
                <div className="user-item-content">
                    <h4>John Snow</h4>
                    <p>Customer</p>
                </div>
            </div>
            <div className="user-item">
                <img src="./avatar.jpg.avif" alt="" />
                <div className="user-item-content">
                    <h4>John Snow</h4>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="resolution" onClick={() => changeShowModal(true)}>Select Resolution</div>
      </div>
      <Modal showModal={showModal} changeShowModal={changeShowModal} />
    </div>
  );
}
export default Component