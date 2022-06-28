import { testPromise } from './service.js';
//const user_ids=[2];

let promises=[];
//user_ids.forEach((id)=>{
    
 //       })

    promises.push(testPromise('https://jsonplaceholder.typicode.com/posts/'))
    Promise.all(promises)
    .then((result)=>{
    console.log('Peticiones resuletas',result)
    })
