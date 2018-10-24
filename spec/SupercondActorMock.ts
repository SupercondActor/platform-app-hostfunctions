export class _SupercondActorMock {
    Logger: SupercondActor.IPlatformLogger = new SupercondActorLoggerMock();
    Context: SupercondActor.IPlatformContext = new SupercondActorContextMock();
}

class SupercondActorLoggerMock implements SupercondActor.IPlatformLogger {
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

class SupercondActorContextMock implements SupercondActor.IPlatformContext {
    private state: Record<string, string> = {};

    saveLocalStateAsync(key: string, value: any): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let json = (value == null) ? null : JSON.stringify(value);
                let resObj = (json == null) ? null : JSON.parse(json);
                this.state[key] = json;
                resolve(resObj);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    getLocalStateAsync(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let json = this.state[key];
                let resObj = (json == null) ? null : JSON.parse(json);
                resolve(resObj);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    getServiceDescriptorAsync(): Promise<SupercondActor.IPlatformServiceDescriptorInfo> {
        return new Promise((resolve, reject) => {
            resolve(new SupercondActorServiceDescriptorMock());
        });
    }
}

class SupercondActorServiceDescriptorMock implements SupercondActor.IPlatformServiceDescriptorInfo {
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