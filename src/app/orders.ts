export class Orders {
    private orderNo: number;
    private truckNo: number;
    private noOfPallets: number;
    private puDest: String;
    private doDest: String;

    constructor($orderNo: number, $truckNo: number, $puDest: String, $doDest: String, $noOfPallets: number) {
        this.orderNo = $orderNo;
        this.truckNo = $truckNo;
        this.noOfPallets = $noOfPallets;
        this.puDest = $puDest;
        this.doDest = $doDest;
    }
    public getOrderNo(): number {
        return this.orderNo;
    }

    public setOrderNo(orderNo: number): void {
        this.orderNo = orderNo;
    }

    public getTruckNo(): number {
        return this.truckNo;
    }

    public setTruckNo(truckNo: number): void {
        this.truckNo = truckNo;
    }

    public getNoOfPallets(): number {
        return this.noOfPallets;
    }

    public setNoOfPallets( noOfPallets: number): void {
        this.noOfPallets = noOfPallets;
    }

    public getPuDest(): String {
        return this.puDest;
    }

    public setPuDest(puDest: String): void {
        this.puDest = puDest;
    }

    public getDoDest(): String {
        return this.doDest;
    }

    public setDoDest(doDest: String): void {
        this.doDest = doDest;
    }

}