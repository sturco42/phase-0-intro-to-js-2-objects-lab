const employee = {
    name: "x",
    streetAddress: "y",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    
    newEmployee[key] = "Sam";
    newEmployee[key] = "11 Broadway"

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = "Sam"
    employee[key] = "12 Broadway"
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }
    delete newEmployee.name;
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ... employee }
    delete employee.name;
    delete employee.streetAddress
    return employee
}