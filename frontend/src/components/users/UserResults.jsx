import React, {useEffect, useState} from 'react'
import Spinner from '../layouts/assets/Spinner'


const UserResults = () => {

    const [users, setUsers]=useState([])
    const [loading, setLoading]=useState(true)

useEffect(()=>{

    fetchUsers()
},[])

const fetchUsers= async ()=>{
    const response = await fetch (`${process.env.REACT_APP_GITHUB_URL}/users`, {

        headers:{
            authorization:`token=${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    })
    const data = await response.json();
    setUsers(data)
    setLoading(false)
}
if (!loading) {
  return (
    
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'> 
      {users.map((user)=>(
        <h3>{user.username}</h3>
      ))}
   </div>
  )
} else {
  return <Spinner/>
      

}
  
}

export default UserResults