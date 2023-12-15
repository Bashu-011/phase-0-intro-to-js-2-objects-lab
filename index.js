let employee = {
    name: "Tom",
    streetAddress: "123 Nairobi",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updateEmployee = {
        ...employee,
    [key]: value,}
    return updateEmployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const updateEmployee = {...employee};
    delete updateEmployee[key];
    return updateEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee[key];
        return employee;
}