import React from 'react'


const Hello = () => {
    const fruits = ["Apple","Banana","Mango","Guava"];
    const user =[ {
        firstName : "Alisha",
        lastName : "Sedai",
        age : 20
    },
    {
         firstName : "Sonu",
        lastName : "Basnet",
        age : 24
    }]
    

        function fullname(users){
            return users.firstName + " " + users.lastName;
        }
  return (
    <>
    
    <div>
        <h2>Fruit Lists</h2>
        <ul>
            {fruits.map((fruits,index) => (
                <li>{index} - {fruits}</li>
            )) }
        </ul>
    </div>
    <div>
        <h2>User Details</h2>
        {/* <p>Fisrt name : {user.firstName}</p>
        <p>Last name : {user.lastName}</p>
        <p>Age : {user.age}</p> */}
        <ul>
            {user.map((users) => (
                <li>{fullname(users)} is {users.age} years old </li>
            ))}
        </ul>
        

    </div>
    </>
  )
}

export default Hello
