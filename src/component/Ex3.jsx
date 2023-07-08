import React,{useState} from 'react'
//state=>internal var of react,state can b of number,string,boolean,obj,array 
const Ex3=(props)=>{
    //useState=>react hook
    //const[state,handler]=useState(initial val)
    const [x,setX]=useState(123)
    const[title,setTitle]=useState("Welcome to react")
    const[view,setView]=useState(true)

    const[user,setUser]=useState({
        name:'Raju',
        email:'raju@gmail.com',
        age:24
    })
    const[colors,setColors]=useState(['red','blue','green'])
    return(
        <div>
            <h3>States in functional components </h3>
            <h4>var x={x}</h4>
            <h4>var title={title}</h4>
            <hr/>
            <h4>{view ? "say true":"say false"}</h4>
            <hr/>
            <h4>{user.name},{user.email}and{user.age}years</h4>
            <hr/>
            <ol>
                {
                    colors.map((item,index)=>{
                        return(
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
} 
export default Ex3