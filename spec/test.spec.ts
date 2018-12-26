/// <reference path="../SupercondActorTypes.d.ts" />

// When running in the Service Fabric Business Platform
// the global _SupercondActor instance will be provided by the environment.
// For testing we need a mock.
import { _SupercondActorMock } from "./SupercondActorMock";
(global as any)._SupercondActor = new _SupercondActorMock();

// entry points from the index.ts file
import { MyEntryPointsDefinition } from "../src";

// Here is our code files bundled together
require('../dist/Scripts/bundle');

describe("_SupercondActor object", () => {
    it("should save and increment counter, get state key", async () => {
        let entry: MyEntryPointsDefinition = (global as any).MyEntryPoints;
        
        let nbr = 7;
        let res = await entry.SetCounter(nbr);
        expect(res).toBe(nbr);

        res = await entry.IncrementCounter();
        expect(res).toBe(8);

        res = await entry.IncrementCounter();
        expect(res).toBe(9);

        let keys = await entry.ListStateKeys();
        expect(keys.length).toBe(1);
        expect(keys[0]).toBe('counter');
    });
});
