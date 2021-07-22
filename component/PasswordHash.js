import { JSHash, CONSTANTS } from "react-native-hash";

export const hashPassword = async (password , passFunction) => {
    console.log('password recieved = ',password)
    JSHash(password,CONSTANTS.HashAlgorithms.sha512)
    .then( (hash) => {
        console.log('hash = ' + hash)
        passFunction(hash)
    })
}