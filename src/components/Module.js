import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

const Module=({activeBand,show,handleClose})=>{
 
    return(
<>
  
       
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
    <Modal.Title>{activeBand.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{activeBand.info}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}

export default Module;