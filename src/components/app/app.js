import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import React from "react";
// import Test from "../test/test";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John S.", salary: 800, id: 1, increase: false, star: false },
        { name: "Alex J.", salary: 1400, id: 2, increase: false, star: false },
        { name: "Louis M.", salary: 1100, id: 3, increase: false, star: false },
      ],
      term: "",
      filter: "all",
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  createItem = (name, salary) => {
    if (name !== "" && salary !== "") {
      this.setState(({ data }) => {
        return {
          data: [
            ...data,
            { name, salary, increase: false, star: false, id: data.length + 1 },
          ],
        };
      });
    }
  };

  showEmployees = () => {
    return this.state.data.length;
  };

  showIncrease = () => {
    return this.state.data.filter((item) => item.increase === true).length;
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length < 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toUpperCase().indexOf(term.toUpperCase()) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "star":
        return items.filter((item) => item.star);
      case "moreThen1000":
        return items.filter((item) => item.salary >= 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) =>{
    this.setState({filter});
  }

  render() {
    const { data, term, filter } = this.state;
    return (
      <div className="app">
        <AppInfo
          showEmployees={this.showEmployees}
          showIncrease={this.showIncrease}
        />
        <div className="search-panel">
          <SearchPanel term={term} onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        <EmployeesList
          data={this.filterPost(this.searchEmp(data, term), filter)}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm createItem={this.createItem} />
        {/* <Test number="25" head="head" /> */}
      </div>
    );
  }
}

export default App;
