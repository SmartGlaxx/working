import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const UpdateTask = () => {
    const {id} = useParams()

    const [updateValues, setUpdateValues] = useState({
        title: "",
        desc: "",
        completed: false
    });
    const fetchItems = async()=>{
        try{
            const response = await fetch(`https://working2-eaqw.onrender.com/tasks/${id}`)
            const result = await response.json()
            setUpdateValues(result)
        }catch(error){
            console.log(error.message)
        }
    }

    useEffect(()=>{
        fetchItems()
    },[id])
    const handleSetUpdateValues = (e)=>{
        const {name, value} = e.target
        // setUpdateValues(prev => ({...prev, [name]:value}))
        setUpdateValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const updateItem = async()=>{
        try{
            const response = await fetch(`https://working2-eaqw.onrender.com/update/${id}`, {
                method:"PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(updateValues)
            })
            const result = await response.json()
            // setUpdateValues(prev => ([...prev, ]))
        }catch(error){
            console.log(error.message)
        }
    }
  return (
    <div>
        <form>
            <input type='text' name='title' value={updateValues.title} onChange={handleSetUpdateValues} />
            <input type='text' name='desc' value={updateValues.desc} onChange={handleSetUpdateValues} />
            <button onClick={updateItem}>Update</button>
        </form>
    </div>
  )
}

export default UpdateTask

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const UpdateTask = () => {
//     const { id } = useParams();
//     const [updateValues, setUpdateValues] = useState({
//         title: "",
//         desc: "",
//         completed: false
//     });

    
//     const fetchItems = async () => {
//         try {
//             const response = await fetch(`https://working2-eaqw.onrender.com/tasks/${id}`);
//             const result = await response.json();
//             setUpdateValues(result);
//         } catch (error) {
//             console.log(error.message);
//         }
//     };
    

//     useEffect(() => {
//         fetchItems();
//     }, [id]);

//     const handleSetUpdateValues = (e) => {
//         const { name, value } = e.target;
//         setUpdateValues(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const updateItem = async () => {
//         try {
//             const response = await fetch(`https://working2-eaqw.onrender.com/update/${id}`, {
//                 method: "PATCH",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(updateValues)
//             });
//             const result = await response.json();
//             console.log(result);
//         } catch (error) {
//             console.log(error.message);
//         }
//     };

//     return (
//         <div>
//             <form>
//                 <input type='text' name='title' value={updateValues.title} onChange={handleSetUpdateValues} />
//                 <input type='text' name='desc' value={updateValues.desc} onChange={handleSetUpdateValues} />
//                 <button onClick={updateItem}>Update</button>
//             </form>
//         </div>
//     );
// };

// export default UpdateTask;
