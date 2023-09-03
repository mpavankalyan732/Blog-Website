import React , {useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "../utils/HandleApi";
import './ReadScreen.css'
import {Link} from 'react-router-dom'

export default function ReadScreen() {
   
    
  useEffect(() => {
    getAllTodo(setTodo);
    updateMode(_id,uptext,updescription,img,isUpdate)
  }, []);

  const location=useLocation();
  const isUpdate=location.state?.isUpdating;
  const _id=location.state?._id;
  const uptext=location.state?.text;
  const updescription=location.state?.description;
  const img=location.state?.image;

  console.log(_id);

  const updateMode = (_id, text, description,image,isUpdating) => {
    setTodoId(_id);
    setText(text);
    setDescription(description);
    setImage(image);
    setIsUpdating(isUpdating)
  };
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [todoId, setTodoId] = useState("");
  const [isUpdating, setIsUpdating] = useState(true);
    
  return (
    <div>
        <img className='image2' src={image} alt="" />
    <div style={{paddingLeft:'20px' , textAlign:'center'}}>
        <h1><b>{text}</b></h1>
    </div>
    <div style={{paddingLeft:'20px'}}>
        <p><b>{description}</b></p>
    </div>
    <Link to={'/addblog'} state={{
              isUpdating: `${isUpdating}`,
              _id: `${_id}`,
              text: `${text}`,
              description: `${description}`,
              image: `${image}`,
            }}><button className='read-button' >Update</button>    </Link>
    </div>
  )
}
