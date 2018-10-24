// Entry points should be listed here.

// These global functions are just an example.
// You can use any kind of objects here, the only requirement is that
// you should be able to call your entry point from your service's job script.

(global as any).SetCounter = async function (nbr: number) {
    // save number to local state
    let res = await _SupercondActor.Context.saveLocalStateAsync('counter', nbr);
    _SupercondActor.Logger.logInfo(['saveLocalStateAsync result', res]);

    // read number from local state
    let counter = await _SupercondActor.Context.getLocalStateAsync('counter');
    _SupercondActor.Logger.logInfo(['getLocalStateAsync result', counter]);

    return counter;
};

(global as any).IncrementCounter = async function () {
    // read counter from local state
    let counter = await _SupercondActor.Context.getLocalStateAsync('counter');
    _SupercondActor.Logger.logInfo(['getLocalStateAsync counter', counter]);

    // increment counter
    if (!counter) {
        counter = 0;
    }
    counter++;

    // save counter to local state
    let res = await _SupercondActor.Context.saveLocalStateAsync('counter', counter);
    _SupercondActor.Logger.logInfo(['saveLocalStateAsync counter', res]);
    return res;
}