export default class Meme{
    id;
    name;
    image;
    dateModified;
    constructor(id,name,image,dateModified){
        this.id=id;
        this.name=name;
        this.image=image;
        this.dateModified=dateModified;
    }
    show(){
        console.log(`
            Name: ${this.name},
            ID: ${this.id},
            Image: ${this.image},
            DateModified: ${this.dateModified}
        `)
    }
    update(data){
        this.name = data.name;
        this.id = data.id;
        this.image = data.image;
        this.dataModified = data.dataModified;
    }
}