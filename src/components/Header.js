import React from "react";

function Header(props) {
    return (
        <div className={"jumbotron"}>
            <h1>Employee Management</h1>
            <input
            type="text"
            name="search"
            onChange={props.handleInput}
            placeholder="Enter first name"
            />
        </div>
    )
}
export default Header;