import React from "react";
import API from "../utils/API";
import Table from "./Table";

class Main extends React.Component {
    state = {
        employees: []
    }

    componentDidMount() {
        API.getEmployees()
            .then(res => {
                this.setState({ employees: res.data.results })
            })
            .catch(err => console.log(err));
    }


    render() {
        const employeeInfo = this.state.employees.map((employee, i) => {
            return (
                <Table
                    key={i}
                    first={employee.name.first}
                    last={employee.name.last}
                    image={employee.picture.thumbnail}
                    email={employee.email}
                    age={employee.dob.age}
                    state={employee.location.state}
                    city={employee.location.city}
                />
            )
        })


        return (
            <div>
                <div className={"container-fluid"}>
                    <div className={"table-responsive"}>
                        <table className={"table"}>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Age</th>
                                    <th>City</th>
                                    <th>State</th>
                                </tr>
                            </thead>
                            {employeeInfo}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;