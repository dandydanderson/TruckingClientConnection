export class Orders {
    private orderId: number;
    private routeId: number;
    private customerId: number;
    private pickupLocation: String;
    private deliveryLocation: String;
    private orderSize: number;

    constructor($orderId: number, $routeId: number, $pickupLocation: String, $deliveryLocation: String, $orderSize: number) {
        this.orderId = $orderId;
        this.routeId = $routeId;
        this.orderSize = $orderSize;
        this.pickupLocation = $pickupLocation;
        this.deliveryLocation = $deliveryLocation;
    }

    public getOrderId(): number {
        return this.orderId;
    }

    public setOrderId(orderId: number): void {
        this.orderId = orderId;
    }

    public getRouteId(): number {
        return this.routeId;
    }

    public setRouteId(routeId: number): void {
        this.routeId = routeId;
    }

    public getCustomerId(): number {
        return this.customerId;
    }

    public setCustomerId(customerId: number): void {
        this.customerId = customerId;
    }

    public getOrderSize(): number {
        return this.orderSize;
    }

    public setOrderSize(orderSize: number): void {
        this.orderSize = orderSize;
    }

    public getPickupLocation(): String {
        return this.pickupLocation;
    }

    public setPickupLocation(pickupLocation: String): void {
        this.pickupLocation = pickupLocation;
    }

    public getDeliveryLocation(): String {
        return this.deliveryLocation;
    }

    public setDeliveryLocation(deliveryLocation: String): void {
        this.deliveryLocation = deliveryLocation;
    }

}