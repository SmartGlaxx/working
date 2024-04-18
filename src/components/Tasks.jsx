import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
const Tasks = ()=>{
    const [tasks, setTasks] = useState([])
    const fetchTasks = async()=>{
        try{
            const response = await fetch("https://working2-eaqw.onrender.com/tasks")
            const result = await response.json()
            setTasks(result)
        }catch(error){
            console.log("error fetching tasks")
        }
    }
    useEffect(() => {
        fetchTasks()
    }, [])

    const deleteItem = async(id)=>{
        try{
            const deletedItem = await fetch(`https://working2-eaqw.onrender.com/delete/${id}`,{
                method: "DELETE"
            })
            if(deletedItem){
               const newTasks = tasks.filter(task => task._id !== id)
               setTasks(newTasks)
            }
        }catch(error){
            console.log(error.message)
        }
    }
    
    return <div>
        {
            tasks.map(task =>{
                const {_id, title, desc} = task
                return<div key={_id}>
                    {title} {desc}<Link to={`/update-task/${_id}`}>Update</Link>
                    <button onClick={()=>deleteItem(_id)}>delete</button>
                </div>
            })
        }
    </div>
  }

  export default Tasks