import React from 'react'


function Maincontent(props){

    const completedStyle={
        fontStyle:"italic",
        color:"#cdcdcd",
        textDecoration:"line-through"
    }

    return(
        <div className="todo-item">
            <input type="checkbox" 
            checked={props.itemm.completed}
            onChange={()=>props.handleChange(props.itemm.id)}
            />
        <p style={props.itemm.completed ? completedStyle : null}>{props.itemm.text} </p>
        </div>
    )}
export default Maincontent;