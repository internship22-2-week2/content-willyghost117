import { testPromise } from './service.js';
//const user_ids=[2];

let promises=[];
//user_ids.forEach((id)=>{
    
 //       })

    promises.push(testPromise('https://flagcdn.com/es/codes.json'))
    Promise.all(promises)
    .then((result)=>{

        const FlagStr = JSON.stringify(result);
  
        JSON.parse(FlagStr, (key, value) => {
          if (typeof value === 'string') {
              return value ="";
            
          }
           console.log(value);
          return value;
        });
    })