// Entry point Types should be listed here.
// This is how you connect your TypeScript code to your service's job script.
import { TestManager } from "./app/test-manager";

// You can use any kind of coding style here, 
// you just should be able to instantiate your entry point types 
// in your service's job script at runtime.

(global as any).MyServiceTypes = {
    // It's OK to delare global types or immutable variables here, 
    // BUT DON'T CREATE GLOBAL INSTANCES OR VARIABLES THAT CAN CHANGE -
    // IT WILL LEAD TO MULTITHREADING PROBLEMS!!!
    TestManager: TestManager
};
