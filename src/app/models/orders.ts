export class Orders {

    private _orderId: number;
    private _routeId: number;
    private _customerId: number;
    private _pickupLocation: String;
    private _deliveryLocation: String;
    private _orderSize: number;

    constructor($_pickupLocation: String, $_deliveryLocation: String, $_orderSize: number) {
        // this.customerId = $customerId;
        this._orderSize = $_orderSize;
        this._pickupLocation = $_pickupLocation;
        this._deliveryLocation = $_deliveryLocation;
    }

    public get orderId(): number {
        return this._orderId;
    }

    public set orderId(orderId: number) {
        this._orderId = orderId;
    }

    public get routeId(): number {
        return this._routeId;
    }

    public set routeId(routeId: number) {
        this._routeId = routeId;
    }

    public get customerId(): number {
        return this._customerId;
    }

    public set customerId(customerId: number) {
        this._customerId = customerId;
    }

    public get orderSize(): number {
        return this._orderSize;
    }

    public set orderSize(orderSize: number) {
        this._orderSize = orderSize;
    }

    public get pickupLocation(): String {
        return this._pickupLocation;
    }

    public set pickupLocation(pickupLocation: String) {
        this._pickupLocation = pickupLocation;
    }

    public get deliveryLocation(): String {
        return this._deliveryLocation;
    }

    public set deliveryLocation(deliveryLocation: String) {
        this._deliveryLocation = deliveryLocation;
    }

}