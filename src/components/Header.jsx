import { Link } from "react-router-dom"

const Header = ()=>{
    return <div style={{height:"4rem", background:"green"}}>
        <h3 style={{float:"left"}}>Finals Smart Egbuchulem</h3>
        <Link to={"/create-task"}><button style={{float:"right"}}>Create Task</button></Link>
    </div>
  }

  export default Header