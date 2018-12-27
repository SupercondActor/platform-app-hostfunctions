// calling one of my global entry points defined in the index.ts file
let counter = await MyEntryPoints.incrementCounter();
console.log('Message from my service: counter=', counter);
