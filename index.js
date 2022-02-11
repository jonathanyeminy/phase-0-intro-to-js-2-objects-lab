// Write your solution in this file!
const employee = {}

function updateEmployeeWithKeyAndValue(employee,key,value) {
    updatedEmployee = {...employee,
            [key]: value}
    return updatedEmployee
    }
