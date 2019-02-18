require('../dist/Scripts/bundle.js');

describe("_SupercondActor object", () => {
    it("should save and increment counter", async () => {
        let hostObject = {}; //comes from external parameters into the function call
        let TestServiceManager = new MyServiceTypes.ServiceManager(hostObject);
        let res = await TestServiceManager.getApiServiceConfig();
        expect(res.serviceName).toBe('Test Api Service');
    });
});