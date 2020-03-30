export class Orders {

    private orderId: number;
    private routeId: number;
    private customerId: number;
    private pickupLocation: String;
    private deliveryLocation: String;
    private orderSize: number;

    constructor(pickupLocation: String, deliveryLocation: String, orderSize: number) {
        this.orderSize = orderSize;
        this.pickupLocation = pickupLocation;
        this.deliveryLocation = deliveryLocation;
    }

    public get _orderId(): number {
        return this.orderId;
    }

    public set _orderId(orderId: number) {
        this.orderId = orderId;
    }

    public get _routeId(): number {
        return this.routeId;
    }

    public set _routeId(routeId: number) {
        this.routeId = routeId;
    }

    public get _customerId(): number {
        return this.customerId;
    }

    public set _customerId(customerId: number) {
        this.customerId = customerId;
    }

    public get _orderSize(): number {
        return this.orderSize;
    }

    public set _orderSize(orderSize: number) {
        this.orderSize = orderSize;
    }

    public get _pickupLocation(): String {
        return this.pickupLocation;
    }

    public set _pickupLocation(pickupLocation: String) {
        this.pickupLocation = pickupLocation;
    }

    public get _deliveryLocation(): String {
        return this.deliveryLocation;
    }

    public set _deliveryLocation(deliveryLocation: String) {
        this.deliveryLocation = deliveryLocation;
    }

}