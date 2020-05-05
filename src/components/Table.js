import React from "react";

function Table(props) {
    return (
        <div className={"container-fluid"}>
                <div class="table-responsive">
                    <table class="table">
                        <tr>
                            <th>Image</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                        <tr>
                            <td>{props.image}</td>
                            <td>{props.first}</td>
                            <td>{props.last}</td>
                            <td>{props.email}</td>
                            <td>{props.age}</td>
                            <td>{props.city}</td>
                            <td>{props.state}</td>
                        </tr>
                    </table>
                </div>
            </div>
    )
}
export default Table;