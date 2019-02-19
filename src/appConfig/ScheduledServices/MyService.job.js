// calling one of my global entry points defined in the index.ts file
let TestManager = new MyServiceTypes.TestManager(_SupercondActor_Context);
await TestManager.runTestCycle();
