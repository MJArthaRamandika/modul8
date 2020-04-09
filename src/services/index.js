const domainPath = 'http://localhost:3001';
const GetAPI = (path) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`)
        .then(response => response.json())
        .then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}
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

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDiKirim) => PostAPI('posts',dataYgDiKirim);
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts',dataYgDiHapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;