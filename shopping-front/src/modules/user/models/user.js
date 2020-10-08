export class User {
    constructor(elem = { lastname: "", firstname: "", birthdate: "", bills: [] }) {
        this.lastname = elem.lastname
        this.firstname = elem.firstname
        this.birthdate = elem.birthdate
        this.bills = elem.bills
    }
}