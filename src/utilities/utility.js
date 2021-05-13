export const trimInput = (item)=> item.replace(/ /g,'').toLowerCase();

export const getImage = (images, str)=>{
    let hashNum = 0;
    for (let i = 0; i < str.length; i++){
      hashNum += str[i].charCodeAt(0);
    }
    return images[hashNum%images.length]
}
