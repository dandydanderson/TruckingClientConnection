
export interface Carrier{
    carrier_id?:number;
    carrier_name: string;
    carrier_username: string;
    carrier_password?: string;
    mc_number: string;
    tax_id: number;
    phone_number: number;
    fax_number: number;
    truck_number: number;
    date_submitted: Date; 
}