import { _SupercondActorMock } from "./SupercondActorMock";
var _SupercondActor: _SupercondActor.ISupercondActor;
if (!_SupercondActor) {
    _SupercondActor = new _SupercondActorMock();
}

// entry points should be listed here

(global as any).MyEntryPoint = async function (nbr: number) {
    let res = await _SupercondActor.Context.saveLocalStateAsync('counter', nbr);
    _SupercondActor.Logger.logInfo(['saveLocalStateAsync result', res]);
    let counter = await _SupercondActor.Context.getLocalStateAsync('counter');
    _SupercondActor.Logger.logInfo(['getLocalStateAsync result', counter]);
    return counter;
};