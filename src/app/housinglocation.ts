export class HousingLocation {
  private _id=0;
  private _itemName='';
  private _itemPrice='';
  private _itemCode='';
  private _photo='';

  constructor(init?: Partial<HousingLocation>) {
    Object.assign(this, init);
  }

  get id():number{
    return this._id;
  }

  set id(id:number){
    this._id = id;
  }

  get itemName():string{
    return this._itemName;
  }

  set itemName(itemName:string){
    this._itemName = itemName;
  }
  get itemPrice():string{
    return this._itemPrice;
  }

  set itemPrice(itemPrice:string){
    this._itemPrice = itemPrice;
  }

  get itemCode():string{
    return this._itemCode;
  }

  set itemCode(itemCode:string){
    this._itemCode = itemCode;
  }

  get photo():string{
    return this._photo;
  }

  set photo(photo:string){
    this._photo = photo;
  }
}


