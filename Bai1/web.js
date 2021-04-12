
import Meme from "./meme.js";
import MemeCollection from "./memeCollection.js";
let meme_1 = new Meme(1,"ga","https://vnn-imgs-f.vgcloud.vn/2019/05/17/14/nuoi-ga-tam-hang-ngay-lon-do-duoi-tinh-tien-co-con-len-den-hon-100-trieu-dong.jpg","22/10");
//meme_1.show();
let meme_2 = new Meme(2,"dog","https://www.chotot.com/kinhnghiem/wp-content/uploads/2019/02/cho-nhat.jpg","1/5");
let meme_3 = new Meme(3,"cat","https://tindongvat.com/wp-content/uploads/2019/07/meo-trang-scottish.jpg","12/6");
// meme_1.update(meme_2);
// meme_1.show();
let memes_1 = new MemeCollection(1,"Bo suu tap","Tuan",[meme_1,meme_2]);
console.log(memes_1);
memes_1.add(meme_3);
memes_1.delete(2);
memes_1.show();