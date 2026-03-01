using {emp.db as model} from '../db/data-model';

service EmplyeeDataAPIService {
    entity EmployeeSet as projection on model.Employees;
}