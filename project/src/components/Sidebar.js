import React from "react";

export const Sidebar = (props)=>{
    const list = ["Home", "Orders", "Products", "Customers", "Discounts", "Online Store"];
    const listitems = list.map( (item)=>{
        return <li className="listitem Border"><img src={props.image} alt="icon"/>{item}</li>
    })

return(
    <div className="sidebar">
        <ul>
            {listitems}
        </ul>
    </div>
)

}
