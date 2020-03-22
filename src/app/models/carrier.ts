
export interface Carrier{
    carrier_id?:number;
    carrier_name: string;
    carrier_username: string;
    carrier_password?: string;
    mc_number: string;
    dot_number: string;
    tax_id: number;
    poc_firstname:string,
    poc_lastname: string,
    phone_number: number;
    fax_number: number;
    truck_number: number;
    address:string;
    city:string;
    state:string;
    zipcode:string;
    classification:string;
    numberOfTrucks:number;
    dateSubmitted: Date; 
}