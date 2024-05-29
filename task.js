const employee = [
  {
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      address: {
        city: "Anytown",
        state: "NY",
        postalCode: "12345",
      },
    },
  },
  [
    {
      employmentDetails: {
        position: "Software Engineer",
        department: "Engineering",
        startDate: "2022-01-01",
        endDate: null,
        manager: {
          firstName: "Alice",
          lastName: "Smith",
          email: "alice@example.com",
        },
      },
    },
  ],
];

const getEmployeeInfo = (employee, key) => {
  const info = employee[0].personalInfo;
  const details = employee[1][0].employmentDetails;
  const employeeAdress = info.address;
  const detailsManager = details.manager;
  if (info.hasOwnProperty(key)) {
    return info[key];
  } else if (details.hasOwnProperty(key)) {
    return details[key];
  } else if (employeeAdress.hasOwnProperty(key)) {
    return employeeAdress[key];
  } else if (detailsManager.hasOwnProperty(key)) {
    return detailsManager[key];
  } else {
    return "Klucz nie istnieje!";
  }
};

console.log(getEmployeeInfo(employee, "firstName")); // Powinno zwrócić: "John"
console.log(getEmployeeInfo(employee, "lastName")); // Powinno zwrócić: "Doe"
console.log(getEmployeeInfo(employee, "position")); // Powinno zwrócić: "Software Engineer"
console.log(getEmployeeInfo(employee, "street")); // Powinno zwrócić: "Klucz nie istnieje"
console.log(getEmployeeInfo(employee, "email"));
