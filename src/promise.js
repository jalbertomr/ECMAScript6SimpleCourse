const myPromise = new Promise( (resolve, reject) => {
  setTimeout( () => {
      const asyncProcessCompleted = true;
      if (asyncProcessCompleted){
        resolve( "process Success");
      }else{
        reject( "process Not Success");
      }
  },3000);
});

myPromise.then( ( message) => {
    alert( message);
});

myPromise.catch( ( message) => {
    alert( message);
});