let timeout = setTimeout(() => {
    console.log('test');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout);
}, 1500);

let interval = setInterval(() => {
    console.log('testInt');
}, 3000);

setTimeout(() => {
    clearInterval(interval);
}, 10000);