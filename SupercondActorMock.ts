export class _SupercondActorMock {
    Logger: _SupercondActor.IPlatformLogger = new SupercondActorLoggerMock();
    Context: _SupercondActor.IPlatformContext = new SupercondActorContextMock();
}

class SupercondActorLoggerMock implements _SupercondActor.IPlatformLogger {
    logVerbose(args: any): void {
        console.log(args);
    }

    logInfo(args: any): void {
        console.log(args);
    }

    logWarning(args: any): void {
        console.log(args);
    }

    logError(args: any): void {
        console.log(args);
    }
}

class SupercondActorContextMock implements _SupercondActor.IPlatformContext {
    private state: Record<string, string> = {};

    saveLocalStateAsync(key: string, value: any): Promise<any> {
        let json = (value == null) ? null : JSON.stringify(value);
        let resObj = (json == null) ? null : JSON.parse(json);
        return new Promise((resolve, reject) => {
            this.state[key] = json;
            resolve(resObj);
        });
    }

    getLocalStateAsync(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let json = this.state[key];
            let resObj = (json == null) ? null : JSON.parse(json);
            resolve(resObj);
        });
    }

    getServiceDescriptorAsync(): Promise<_SupercondActor.IPlatformServiceDescriptorInfo> {
        return new Promise((resolve, reject) => {
            resolve(new SupercondActorServiceDescriptorMock());
        });
    }
}

class SupercondActorServiceDescriptorMock implements _SupercondActor.IPlatformServiceDescriptorInfo {
    currentAppVersion = '1';
    descriptor = {
        serviceID: 'serviceID',
        serviceName: 'serviceName',
        groupName: 'groupName',
        metadataJson: '{}',
        removalRequested: false,
        job: {
            jobScript: '',
            stopRequested: false,
            jobSchedule: {
                intervalSeconds: 15
            }
        },
    };
}