import React, {useState} from 'react'


const RegisterPage = () => {
  const [data,setData] = useState({
    name : "",
    email : "",
    password : "",
    profile_pic : ""
  })
  const handleOnChange = (e) => {
    const {name,value} = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name] : value
      }
    })
  }
  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4">
        <h3>Welcome to Chat App!</h3>
        <form className="grid gap-4 mt-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="enter your name"
              value={data.name}
              onChange={handleOnChange}
              required
              className="bg-slate-100 px-2 py-1 focus:outline-blue-300 h-10"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              value={data.email}
              onChange={handleOnChange}
              required
              className="bg-slate-100 px-2 py-1 focus:outline-blue-300 h-10"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              value={data.password}
              onChange={handleOnChange}
              required
              className="bg-slate-100 px-2 py-1 focus:outline-blue-300 h-10"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage
