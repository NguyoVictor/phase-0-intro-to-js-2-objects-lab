// Write your solution in this file!
const employee = {
    name: "Mike",
    streetAddress: "7 Kikuyu Rd",
}

function updateEmployeeWithKeyAndValue(obj,key,value){
    return {
        ...obj,
        [key]: value,
    };
}

const newEmployee = updateEmployeeWithKeyAndValue(employee,"name","Sam");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;

    return obj;
}

const secondNewEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"name",'Fish');

function deleteFromEmployeeByKey(employee,key){
    const editedEmployee = Object.assign({}, employee);
    delete editedEmployee[key];
    return editedEmployee;
}

const editedEmployee = deleteFromEmployeeByKey(employee, "streetAddress");

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}

const revisedEmployee = destructivelyDeleteFromEmployeeByKey(employee,"name");