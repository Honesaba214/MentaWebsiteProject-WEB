export class ItemClass {
  private itemNumber = 0;
  private itemName = '';
  private itemCode = 0;
  private itemPrice = '';
  private itemPath = '';

  constructor(init?: Partial<ItemClass>) {
    Object.assign(this, init);
  }

  public get getItem(): number {
    return this.itemNumber;
  }

  public get getName(): string {
    return this.itemName;
  }

  public get getCode(): number {
    return this.itemCode;
  }

  public get getPrice(): string {
    return this.itemPrice;
  }

  public get getPath(): string {
    return this.itemPath;
  }

}


