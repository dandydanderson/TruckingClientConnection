export class Customer {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    companyName: string;
    shippingPhone: number;
    payablesPhone: number;
    taxId: number;
    phoneNumber: number;
    faxNumber: number;
    pocEmail: string;
    pocFirstName: string;
    pocLastName: string;
    pocPhone: number;
    street: string;
    city: string;
    state: string;
    zip: number;
    dateSubmitted: Date;
    creditLine: number;
    dbScore: number;

    constructor(username, password, firstName, pocEmail, lastName, companyName, shippingPhone,
        payablesPhone, taxId, phoneNumber, faxNumber, pocFirstName, pocLastName,
        pocPhone, street, city, state, zip, dateSubmitted, creditLine, dbScore) {
            this.username = username;
            this.password = password;
            this.firstName = firstName;
            this.pocEmail = pocEmail;
            this.lastName = lastName;
            this.companyName = companyName;
            this.shippingPhone = shippingPhone;
            this.payablesPhone = payablesPhone;
            this.taxId = taxId;
            this.phoneNumber = phoneNumber;
            this.faxNumber = faxNumber;
            this.pocFirstName = pocFirstName;
            this.pocLastName = pocLastName;
            this.pocPhone = pocPhone;
            this.street = street;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.dateSubmitted = dateSubmitted;
            this.creditLine = creditLine;
            this.dbScore = dbScore;

    }
}

