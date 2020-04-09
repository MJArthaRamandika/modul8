import { domainPATH } from "./Config";

const PostAPI = (path) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`)
        method: 'post',
        headers; {
            'accept' ; 'application/json',
            'Content-Type';'application/json'
        }
        body; JSON.stringify(data)
        .then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

export default PostAPI;