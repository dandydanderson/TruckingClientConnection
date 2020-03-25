import { Orders } from '../models/orders';

export class Route {

    private _routeId: number;
    private _carrierId: number;
    private _companyName: string;
    private _truckId: number;
    private _orders: Orders[];
    private _stops: string[];
    private _startDate: Date;
    private _endDate: Date;
    private _availablePallets: number;
    private _startLocation: string;
    private _endLocation: string;
  

    constructor(routeId: number, carrierId: number, companyName: string, truckId: number, orders: Orders[],
        stops: string[], startDate: Date, endDate: Date, availablePallets: number, startLocation: string, endLocation: string) {

        this.routeId = routeId;
        this.carrierId = carrierId;
        this.companyName = companyName;
        this.truckId = truckId;
        this.orders = orders;
        this.stops = stops;
        this.startDate = startDate;
        this.endDate = endDate;
        this.availablePallets = availablePallets;
        this.startLocation = startLocation;
        this.endLocation = endLocation;
    }


    public get routeId(): number {
        return this._routeId;
    }
    public set routeId(value: number) {
        this._routeId = value;
    }

    public getcarrierId(): number {
        return this._carrierId;
    }
    public set carrierId(value: number) {
        this._carrierId = value;
    }
    public get companyName(): string {
        return this._companyName;
    }
    public set companyName(value: string) {
        this._companyName = value;
    }
    public get truckId(): number {
        return this._truckId;
    }
    public set truckId(value: number) {
        this._truckId = value;
    }
    public get orders(): Orders[] {
        return this._orders;
    }
    public set orders(value: Orders[]) {
        this._orders = value;
    }
    public get stops(): string[] {
        return this._stops;
    }
    public set stops(value: string[]) {
        this._stops = value;
    }
    public get startDate(): Date {
        return this._startDate;
    }
    public set startDate(value: Date) {
        this._startDate = value;
    }
    public get endDate(): Date {
        return this._endDate;
    }
    public set endDate(value: Date) {
        this._endDate = value;
    }
    public get availablePallets(): number {
        return this._availablePallets;
    }
    public set availablePallets(value: number) {
        this._availablePallets = value;
    }
    public get startLocation(): string {
        return this._startLocation;
    }
    public set startLocation(value: string) {
        this._startLocation = value;
    }
    public get endLocation(): string {
        return this._endLocation;
    }
    public set endLocation(value: string) {
        this._endLocation = value;
    }

}