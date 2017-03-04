import React,{ PropTypes } from "react"
import { render } from "react-dom"

const Hello = ({ name }) => {
  return <h1>{ name }</h1>
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
}

render(
  <Hello name={"Hi"} />,
  document.getElementById("app")
)
