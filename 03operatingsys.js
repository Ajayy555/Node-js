const { log } = require('console');
const os = require('os');
const user=os.userInfo();
console.log(user);

console.log(`system run time : ${os.uptime/6000} in min`);

const currentOs= {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem()/1024,
    freeMem:os.freemem()/1024,
}

console.log(currentOs);