import { Route } from 'src/app/models/routes';

// private _routeId: number;
// private _carrierId: number;
// private _companyName: string;
// private _truckId: number;
// private _orders: Orders[];
// private _stops: string[];
// private _startDate: Date;
// private _endDate: Date;
// private _availablePallets: number;
// private _startLocation: string;
// private _endLocation: string;


export const ROUTES: Route[] = [

new Route(1,1,'TestCarrier',123,null,null,new Date(),new Date(), 0,'Atlanta','Tampa'),
new Route(2,1,'TestCarrier',123,null,null,new Date(),new Date(), 4,'Atlanta','Charleston')

]