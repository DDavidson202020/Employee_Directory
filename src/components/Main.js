import React from "react";
import API from "../utils/API";
import Table from "./Table";
import Header from "./Header";
class Main extends React.Component {
    state = {
        employees: [],
        search: "",
        filteredEmployees: [],
        isSorted: false
    }

    componentDidMount() {
        API.getEmployees()
            .then(res => {
                this.setState({ employees: res.data.results, filteredEmployees: res.data.results })

            })
            .catch(err => console.log(err));
    }

    handleInput = (event) => {
        this.setState({ search: event.target.value });
        //Use the filter method to filter employees according to what user types in 
        const filtered = this.state.employees.filter((employee) => {

            return (employee.name.first.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
            
        })
        // Set the state of filterEmployees 
        this.setState({ filteredEmployees: filtered })
    }

    handleSortFirst = () => {
        // a function that sorts the array according to their first names starting from A,B,C...

        function compare1(a, b) {
            const firstA = a.name.first.toLowerCase();
            const firstB = b.name.first.toLowerCase();
            let comparison = 0;
            if (firstA > firstB) {
                comparison = 1;
            } else  {
                comparison = -1;
            }
            return comparison;
        }

        // a function that sorts the array according to their last names starting from Z,Y,X...
        function compare2(a, b) {
            const firstA = a.name.first.toLowerCase();
            const firstB = b.name.first.toLowerCase();
            let comparison = 0;
            if (firstB > firstA) {
                comparison = 1;
            } else {
                comparison = -1;
            }
            return comparison;
        }
        if (this.state.isSorted) {
            this.state.filteredEmployees.sort(compare1);
            this.setState({
                isSorted: false
            })
        } else {
            this.state.filteredEmployees.sort(compare2);
            this.setState({
                isSorted: true
            })
            
        }
        
        this.setState({ filteredEmployees: this.state.filteredEmployees });
    }

    handleSortLast = () => {
        function compare1(a, b) {
            const lastA = a.name.last.toLowerCase();
            const lastB = b.name.last.toLowerCase();
            let comparison = 0;
            if (lastA > lastB) {
                comparison = 1;
            } else if (lastA < lastB) {
                comparison = -1;
            }
            return comparison;
        }
        const sortA = this.state.employees.sort(compare1);
        this.setState({ employees: sortA });
    }

    handleSortAge = () => {
        function compare1(a, b) {
            const ageA = a.dob.age;
            const ageB = b.dob.age;
            let comparison = 0;
            if (ageA > ageB) {
                comparison = 1;
            } else if (ageA < ageB) {
                comparison = -1;
            }
            return comparison;
        }
        const sortAge = this.state.employees.sort(compare1);
        this.setState({ employees: sortAge });
    }

    render() {
        const employeeInfo = this.state.filteredEmployees.map((employee, i) => {
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
                <Header
                    handleInput={this.handleInput}
                    value={this.state.search}
                />
                <div className={"container-fluid"}>
                    <div className={"table-responsive"}>
                        <table className={"table"}>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>First Name<i onClick={this.handleSortFirst} className={"fa fa-fw fa-sort"}></i></th>
                                    <th>Last Name<i onClick={this.handleSortLast} className={"fa fa-fw fa-sort"}></i></th>
                                    <th>Email</th>
                                    <th>Age<i onClick={this.handleSortAge} className={"fa fa-fw fa-sort"}></i></th>
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