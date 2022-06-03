export class Mail {
    
   private  _tipo: string;
   private  _direccion: string;
   constructor(a: string, b: string) {
        this._tipo= a;
        this._direccion= b;
    }

    set tipo (a:string){
        this._tipo= a;
    }
    
    set direccion(b:string){
        this._direccion= b;
    }
    
    get tipo (){
        return this._tipo;
       }
    get direccion (){
        return this.direccion;
    }
    
}
