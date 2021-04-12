import Meme from "./meme.js";
export default class MemeCollection{
    id;
    name;
    owner;
    memes=[];
    constructor(id,name,owner,memes){
        this.id=id;
        this.name=name;
        this.owner = owner;
        this.memes = memes;
    }
    add(data){
        if(data instanceof Meme){
            this.memes.push(data);
        }
    }
    update(x,data){
        let ViTri = -1;
        for(let i = 0; i < this.memes.length;i++){
            if(this.memes[i].id == x){
                ViTri = i;
                break;
            }
        if(ViTri == -1) console.log("Khong co id tuong ung");
        else this.memes.splice(ViTri,1,data);
        }
    }
    delete(x){
        let ViTri = -1;
        for(let i = 0; i < this.memes.length;i++){
            if(this.memes[i].id == x){
                ViTri = i;
                break;
            }
        }
        if(ViTri == - 1) console.log("Khong co id tuong ung");
        else{
            this.memes.splice(ViTri,1);
        }

    }
    show(){
        console.log(this.memes);
    }
};