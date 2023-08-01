import { Outlet } from "react-router-dom"

function About() {
  return (
    <>
      <div>
        <h1>About</h1>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default About