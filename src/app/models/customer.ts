export class Customer {
    customerId: number;
    username: string;
    password: string;
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

    constructor(username: string, password: string, companyName: string, shippingPhone: number, 
        payablesPhone: number, taxId: number, phoneNumber: number, faxNumber: number, 
        pocEmail: string, pocFirstName: string, pocLastName: string, pocPhone: number, street: string, 
        city: string, state: string, zip: number, dateSubmitted: Date, creditLine: number, dbScore: number,) {
            this.username = username;
            this.password = password;
            this.pocEmail = pocEmail;
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

