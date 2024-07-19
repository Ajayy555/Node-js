console.log("start");

setTimeout(()=>{console.log('INSIDE SETTIMEOUT');},0);

new Promise((resolve)=>{
    console.log('iNSIDE PROMIES');
    resolve();

}).then(()=>{
    console.log('inside Promise resolved');
});
 console.log('end');