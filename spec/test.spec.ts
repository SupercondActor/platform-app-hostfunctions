require('../dist/Scripts/bundle');
import { _SupercondActorMock } from "./SupercondActorMock";

// When running in the Service Fabric Business Platform
// the _SupercondActor instance will be provided by the environment.
// For testing we need a mock.
(global as any)._SupercondActor = new _SupercondActorMock();

describe("_SupercondActor object", () => {
    it("should save and increment counter", async () => {
        let nbr = 7;
        let res = await (global as any).SetCounter(nbr);
        expect(res).toBe(nbr);

        res = await (global as any).IncrementCounter();
        expect(res).toBe(8);

        res = await (global as any).IncrementCounter();
        expect(res).toBe(9);
    });
});