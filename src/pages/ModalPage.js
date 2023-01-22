import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an immportant agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veritatis id labore perspiciatis sequi autem esse doloribus nemo odit ducimus, maxime animi omnis aspernatur ipsum dignissimos exercitationem tempora quibusdam!</p>
    </div>
  );
}

export default ModalPage;
