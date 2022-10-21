import Employee from "./components/Employee";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("Software Engineer");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "CEO",
      image:
        "https://images.pexels.com/photos/6758039/pexels-photo-6758039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Bismark Kadogbe",
      role: "Software Engineer",
      image:
        "https://images.pexels.com/photos/6758039/pexels-photo-6758039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Nero Ben",
      role: "Data Miner",
      image:
        "https://images.pexels.com/photos/14034247/pexels-photo-14034247.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      name: "Cynthia Ama",
      role: "Labtician",
      image:
        "https://images.pexels.com/photos/6758039/pexels-photo-6758039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Kofi Baah",
      role: "CEO",
      image:
        "https://images.pexels.com/photos/14034247/pexels-photo-14034247.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      name: "Felcia Aboagye",
      role: "Entreprenure",
      image:
        "https://images.pexels.com/photos/6758039/pexels-photo-6758039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  //? This function allows you to talk to the child component by get the id from the dictionary and change state between the parent and child

  const updateEmployee = (id, newName, newRole) => {
    const updatedEmployee = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployee);
  };

  return (
    <div className="App flex gap-2 flex-wrap w-7/12 mx-auto  items-center mt-10">
      {employees.map((employee) => {
        return (
          <Employee
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            image={employee.image}
            updateEmployee={updateEmployee}
          />
        );
      })}
    </div>
  );
}

export default App;
