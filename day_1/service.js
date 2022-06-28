import request from 'request';

export function testPromise(url) {
    return new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
            if (err)
                reject(err);
            resolve(body);
        });
    });
}
