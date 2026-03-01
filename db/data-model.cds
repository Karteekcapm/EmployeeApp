namespace emp.db;

entity Employees {
    key employeeId  : UUID;
        name        : String(50);
        address     : String;
        email       : String(50);
        city        : String;
        country     : String;
        designation : String;
        department  : String;
}

entity Designations {
    key code        : UUID;
        description : String;
}
