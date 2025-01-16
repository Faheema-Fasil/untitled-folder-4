import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddPosts } from './Services/allAPI';
import { getPosts } from './Services/allAPI';
function App() {
  const [show, setShow] = useState(false);
const [postDetails, setPostDetails] = useState({
    title: "",
    description: "",
    image: "",
})
const Delete=async(id)=>{
  const response=await getPosts(id)
  console.log(response)
}
const Edit=async(id)=>{
  const response=await getPosts(id)
  console.log(response)
  setPostDetails(response)
  handleShow()
}
const[post,setPost]=useState([])
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
const getPOsts=async()=>{
  const response=await getPosts()
  console.log(response)
  setPost(response)
}
useEffect(() => {
  console.log(postDetails)
  getPOsts()
}, [postDetails])
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
        {post.length > 0 ? post.map((item) => (
          <div key={item._id} style={{ display: "flex", marginBottom: "10px" }}>
            <div style={{ border: "1px solid black", width: "300px", padding: "10px" }}>
              <h1>Title: {item.title}</h1>
              <p>Description: {item.description}</p>
              <img
                width="300px"
                src={item.image}
                alt={item.title}
              />
              <br />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button onClick={() => Edit(item._id)}>Edit</button>
                <button onClick={() => Delete(item._id)}>Delete</button>
              </div>
            </div>
          </div>
        )) : (
          <h1>No data available</h1>
        )}
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

