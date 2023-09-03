import React, { useEffect, useState } from "react";
import Card from '../Components/Card'
import "../App.css";
import { getAllTodo, deleteTodo } from "../utils/HandleApi";

function HomeScreen() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  return(
    <div>
        <div className='cards'>
          {todo.map((item) => (
            <Card
              _id={item._id}
              text={item.text}
              description={item.description}
              image={item.image}
              deleteTodo={() => deleteTodo(item._id, setTodo)}
            />
          ))}
        </div>
        <div className="padding"></div>
    </div>
  );
}

export default HomeScreen;