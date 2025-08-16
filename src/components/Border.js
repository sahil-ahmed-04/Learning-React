import React from 'react';
import "./Border.css"

function Border({children}){
    const childArr = React.Children.toArray(children)
    return(
        <span>
        {childArr.map((child,i)=><div key={i} style={{border:"2px solid black", display:"inline-block"}} >{child}</div>)}
        </span>
    )
  }

export default Border;