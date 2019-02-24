require('../dist/Scripts/bundle.js');

describe("_SupercondActor object", () => {
    it("should save and increment counter", async () => {
        let hostObject = {}; //comes from external parameters into the function call
        let TestManager = new MyServiceTypes.TestManager(hostObject);
        let res = await TestManager.getRootApiServiceConfig(1);
        expect(res.serviceName).toBe('Root API Service #1');
    });
});