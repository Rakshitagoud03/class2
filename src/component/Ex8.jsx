import React, { useState } from 'react'
import Personal from './sub/Personal'
import Address from './sub/Address'
import Edu from './sub/Edu'

function Ex8(props){
    const[user,setUser]=useState({
        name:"David",
        email:"david@gmail.com",
        mobile:"8618893544",
        address:{
            city:"Manglore",
            zip:566789
        },
        edu:{
            type:"Degree",
            title:"B.E",
            year:2020
        }
    })
    return(
        <div>
            <h1>Props in Functional component</h1>
            <Personal fName={user.name} fEmail={user.email} fMobile={user.mobile}/>
            <Address fCity={user.address.city} fZip={user.address.zip}/>
            <Edu fType={user.edu.type} fTitle={user.edu.title} fYear={user.edu.year}></Edu>
        </div>
    )
}
export default Ex8