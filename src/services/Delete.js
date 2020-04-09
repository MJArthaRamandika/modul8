import { domainPATH } from "./Config";

const DeleteAPI = (path,data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`)
        .then(response => response.json())
        .then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })
}
export default DeleteAPI;