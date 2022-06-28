//codigo para ignorar
const user = {
    name: 'Sammy',
    email: 'Sammy@domain.com',
    plan: 'Pro'
  };
  
  const userStr = JSON.stringify(user);
  
  JSON.parse(userStr, (key, value) => {
    if (typeof value === 'string') {
        return value ="";
      
    }
     console.log(value);
    return value;
  });

 