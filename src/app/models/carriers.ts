
export interface Carrier{
    carrierId:number;
    carrierName: string;
    username: string;
    password?: string;
    mcNumber: string;
    dotnumber: string;
    taxId: number;
    pocFirstName:string,
    pocLastName: string,
    phoneNumber: String;
    faxNumber: String;
    truck_number?: number;
    address:string;
    city:string;
    state:string;
    zipcode:string;
    classification:string;
    numberOfTrucks:number;
    dateSubmitted: Date; 
}