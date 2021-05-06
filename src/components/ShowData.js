import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './styles.css'
import AddModal from './AddModal'
const ShowData = () => {
    const [posts , setPosts] = useState([])
    const [open, setOpen] = React.useState(false);

    const handleAddModal = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(()=>{
        axios.get('https://young-harbor-60375.herokuapp.com/api/books')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
  function DeleteUser (id) {
      fetch(`https://young-harbor-60375.herokuapp.com/api/books${id}`,{
          method:'DELETE'
      }).then((result)=>{
          result.json().then((res)=>{
              console.log(res)
          })
      })
   }
    return (
        <div>
            <h1 className = 'heading'>Dashboard</h1>
             <table className = "table">
                 <thead>
                     <tr className = "table-head">
                         <th className = "headings">ID</th>
                         <th className = "headings">Title</th>
                         <th className = "headings">Author</th>
                         <th className = "headings">Published Year</th>
                         <th className = "headings">Action</th>
                         <th className = "headings">Action</th>
                         <th className = "headings">Action</th>
                     </tr>
                 </thead>
                 <tbody>
                         {posts.map((item)=>(
                             <tr className = "table-body">
                             <td className="content">{item.id}</td>
                             <td className="content">{item.title}</td>
                             <td className="content">{item.author.name}</td>
                             <td className="content">{item.publishedYear}</td>
                             <td className="content"><button className = "btn-style" onClick = {()=>DeleteUser(item.id)}>Delete</button></td>
                             <td className="content"><button style ={{background:'#000000b5'}}
                             onClick = {handleAddModal}
                             className = "btn-style">Add</button></td>
                             <td className="content"><button style ={{background:'#0e7fffb5'}} className = "btn-style">View</button></td>
                             </tr>
                         ))}
                 </tbody>
             </table>
             <AddModal open = {open} handleClose = {handleClose}/>
        </div>
    );
};

export default ShowData;