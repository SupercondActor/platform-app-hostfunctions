// calling one of my global entry points defined in the index.ts file
let TestServiceManager = new MyServiceTypes.ServiceManager(_SupercondActor_Context);
await TestServiceManager.runTestCycle();
