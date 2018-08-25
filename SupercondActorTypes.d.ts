declare var _SupercondActor: {
    /**
    * @returns logger object writing messages to the service fabric ETW provider
    */
    Logger: _SupercondActor.IPlatformLogger;

    /**
    * @returns {IPlatformContext} - context object allowing communications with the underlying service fabric actor
    */
    Context: _SupercondActor.IPlatformContext;
};

// export interface ISupercondActorProxy {
//     Logger: _SupercondActor.IPlatformLogger;
//     Context: _SupercondActor.IPlatformContext;
// }

declare namespace _SupercondActor {

    export interface ISupercondActor {
        Logger: _SupercondActor.IPlatformLogger;
        Context: _SupercondActor.IPlatformContext;
    }

   export interface IPlatformLogger {
        logVerbose(args: any): void;
        logInfo(args: any): void;
        logWarning(args: any): void;
        logError(args: any): void;
    }

    export interface IPlatformContext {
        saveLocalStateAsync(key: string, value: any): Promise<any>;

        /**
        * @param {string} key - dictionary key for the state value
        * @returns {Promise<any>} - local state value for the provided key
        */
        getLocalStateAsync(key: string): Promise<any>;
        getServiceDescriptorAsync(): Promise<IPlatformServiceDescriptorInfo>;
    }

    export interface IPlatformServiceDescriptorInfo {
        currentAppVersion: string;
        descriptor: IPlatformServiceDescriptor;
    }

    export interface IPlatformServiceDescriptor {
        serviceID: string;
        serviceName: string;
        groupName: string;
        metadataJson: string;
        job: IPlatformJobDescriptor;
        removalRequested: boolean;
    }

    export interface IPlatformJobDescriptor {
        jobScript: string;
        jobSchedule: IPlatformJobSchedule;
        stopRequested: boolean;
    }

    export interface IPlatformJobSchedule {
        cronString?: string;
        intervalSeconds?: number;
        timeoutSeconds?: number;
    }
}
