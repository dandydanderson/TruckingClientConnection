import { Orders } from '../models/orders';

export class Route {

    private routeId: number;
    private carrierId: number;
    private truckId: number;
    private orders: Orders[];
    private stops: string[];
    private startDate: Date;
    private endDate: Date;
    private availablePallets: number;
    private startLocation: string;
    private endLocation: string;


    constructor(truckId: number, orders: Orders[], stops: string[], startDate: Date,
        endDate: Date, availablePallets: number, startLocation: string, endLocation: string) {

        this.truckId = truckId;
        this.orders = orders;
        this.stops = stops;
        this.startDate = startDate;
        this.endDate = endDate;
        this.availablePallets = availablePallets;
        this.startLocation = startLocation;
        this.endLocation = endLocation;
    }


    public get _routeId(): number {
        return this.routeId;
    }
    public set _routeId(value: number) {
        this.routeId = value;
    }

    public get _carrierId(): number {
        return this.carrierId;
    }
    public set _carrierId(value: number) {
        this.carrierId = value;
    }
    public get _truckId(): number {
        return this.truckId;
    }
    public set _truckId(value: number) {
        this.truckId = value;
    }
    public get _orders(): Orders[] {
        return this.orders;
    }
    public set _orders(value: Orders[]) {
        this.orders = value;
    }
    public get _stops(): string[] {
        return this.stops;
    }
    public set _stops(value: string[]) {
        this.stops = value;
    }
    public get _startDate(): Date {
        return this.startDate;
    }
    public set _startDate(value: Date) {
        this.startDate = value;
    }
    public get _endDate(): Date {
        return this.endDate;
    }
    public set _endDate(value: Date) {
        this.endDate = value;
    }
    public get _availablePallets(): number {
        return this.availablePallets;
    }
    public set _availablePallets(value: number) {
        this.availablePallets = value;
    }
    public get _startLocation(): string {
        return this.startLocation;
    }
    public set _startLocation(value: string) {
        this.startLocation = value;
    }
    public get _endLocation(): string {
        return this.endLocation;
    }
    public set _endLocation(value: string) {
        this.endLocation = value;
    }

}