import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddPosts } from './Services/allAPI';

function App() {
  const [show, setShow] = useState(false);
const [postDetails, setPostDetails] = useState({
    title: "",
    description: "",
    image: "",
})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const addPosts=async(e)=>{
  e.preventDefault()
const {title,description,image}=postDetails
    console.log(postDetails)
    const response=await AddPosts({title,description,image})
    console.log(response)
    handleClose()
    
}
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>hello</h1>
        <form action="">
          <input type="text" />
          <button type="submit">submit</button>
          <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
          </Button>
          
        </form>
        <div style={{ display: "flex" }}>
          <div style={{ border: "1px solid black", width: "300px" }}>
            <h1 >title: abcd</h1>
            <p>description: abcd</p>
            <img
              width="300px"
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button>edit</button>
              <button>delete</button>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .modal-top-middle .modal-dialog {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
          }
        `}
      </style>
      <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            dialogClassName="modal-top-middle"
          >
            <Modal.Header closeButton>
              <Modal.Title>enter details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input onChange={(e)=>setPostDetails({...postDetails,title:e.target.value})} type="text" placeholder='enter title' /> <br />
              <input onChange={(e)=>setPostDetails({...postDetails,description:e.target.value})} type="text"  placeholder='enter description'/> <br />
              <input onChange={(e)=>setPostDetails({...postDetails,image:e.target.value})} type="text" placeholder='enter image url' name="" id="" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={addPosts} variant="primary">add</Button>
            </Modal.Footer>
          </Modal>
    </>
  );
}

export default App;

