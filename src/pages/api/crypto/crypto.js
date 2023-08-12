import CryptoJS from "crypto-js";


const Md5Crypto = (message) => {
    return CryptoJS.MD5(message);
}


export { Md5Crypto };