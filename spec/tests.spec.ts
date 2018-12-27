/// <reference path="../SupercondActorTypes.d.ts" />

// When running in the Service Fabric Business Platform
// the global _SupercondActor instance will be provided by the environment.
// For testing we need a mock.
import { _SupercondActorMock } from "./support/SupercondActorMock";
(global as any)._SupercondActor = new _SupercondActorMock();

// entry points class definition from the index.ts file
import { MyEntryPointsDefinition } from "../src/index";

// Here is our source code for entry points
require('../src/index.ts');

//  Instead of testing source code we can test the final bundle
//  to make sure we have everything we need in it
//  (comment the require statement above and uncomment below,
//   run 'npm run build' then 'npm test'):
// require('../dist/Scripts/bundle.js')

describe("_SupercondActor object", () => {
    it("should save and increment counter", async () => {
        let entry: MyEntryPointsDefinition = (global as any).MyEntryPoints;
        
        let nbr = 7;
        let res = await entry.setCounter(nbr);
        expect(res).toBe(nbr);

        res = await entry.incrementCounter();
        expect(res).toBe(8);

        res = await entry.incrementCounter();
        expect(res).toBe(9);

        let keys = await entry.listStateKeys();
        expect(keys.length).toBe(1);
        expect(keys[0]).toBe('counter');
    });
});
