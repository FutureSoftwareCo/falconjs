/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";
import {
    BinservclientMsaPFResponse,
    BinservclientMsaPFResponseFromJSON,
    BinservclientMsaPFResponseToJSON,
    BinservclientMsaPutFileResponse,
    BinservclientMsaPutFileResponseFromJSON,
    BinservclientMsaPutFileResponseToJSON,
    DomainAPIError,
    DomainAPIErrorFromJSON,
    DomainAPIErrorToJSON,
    DomainBatchExecuteCommandRequest,
    DomainBatchExecuteCommandRequestFromJSON,
    DomainBatchExecuteCommandRequestToJSON,
    DomainCommandExecuteRequest,
    DomainCommandExecuteRequestFromJSON,
    DomainCommandExecuteRequestToJSON,
    DomainCommandExecuteResponseWrapper,
    DomainCommandExecuteResponseWrapperFromJSON,
    DomainCommandExecuteResponseWrapperToJSON,
    DomainMsaPFResponseV2,
    DomainMsaPFResponseV2FromJSON,
    DomainMsaPFResponseV2ToJSON,
    DomainMultiCommandExecuteResponseWrapper,
    DomainMultiCommandExecuteResponseWrapperFromJSON,
    DomainMultiCommandExecuteResponseWrapperToJSON,
    DomainStatusResponseWrapper,
    DomainStatusResponseWrapperFromJSON,
    DomainStatusResponseWrapperToJSON,
    MsaErrorsOnly,
    MsaErrorsOnlyFromJSON,
    MsaErrorsOnlyToJSON,
    MsaReplyMetaOnly,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models";

export interface BatchAdminCmdRequest {
    body: DomainBatchExecuteCommandRequest;
    timeout?: number;
    timeoutDuration?: string;
}

export interface RTRCheckAdminCommandStatusRequest {
    cloudRequestId: string;
    sequenceId: number;
}

export interface RTRCreatePutFilesRequest {
    file: Blob;
    description: string;
    name?: string;
    commentsForAuditLog?: string;
}

export interface RTRCreateScriptsRequest {
    description: string;
    permissionType: string;
    file?: Blob;
    name?: string;
    commentsForAuditLog?: string;
    content?: string;
    platform?: Array<string>;
}

export interface RTRDeletePutFilesRequest {
    ids: string;
}

export interface RTRDeleteScriptsRequest {
    ids: string;
}

export interface RTRExecuteAdminCommandRequest {
    body: DomainCommandExecuteRequest;
}

export interface RTRGetPutFilesRequest {
    ids: Array<string>;
}

export interface RTRGetPutFilesV2Request {
    ids: Array<string>;
}

export interface RTRGetScriptsRequest {
    ids: Array<string>;
}

export interface RTRGetScriptsV2Request {
    ids: Array<string>;
}

export interface RTRListPutFilesRequest {
    filter?: string;
    offset?: string;
    limit?: number;
    sort?: string;
}

export interface RTRListScriptsRequest {
    filter?: string;
    offset?: string;
    limit?: number;
    sort?: string;
}

export interface RTRUpdateScriptsRequest {
    id: string;
    file?: Blob;
    description?: string;
    name?: string;
    commentsForAuditLog?: string;
    permissionType?: string;
    content?: string;
    platform?: Array<string>;
}

/**
 *
 */
export class RealTimeResponseAdminApi extends runtime.BaseAPI {
    /**
     * Batch executes a RTR administrator command across the hosts mapped to the given batch ID.
     */
    async batchAdminCmdRaw(
        requestParameters: BatchAdminCmdRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DomainMultiCommandExecuteResponseWrapper>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling batchAdminCmd.");
        }

        const queryParameters: any = {};

        if (requestParameters.timeout !== undefined) {
            queryParameters["timeout"] = requestParameters.timeout;
        }

        if (requestParameters.timeoutDuration !== undefined) {
            queryParameters["timeout_duration"] = requestParameters.timeoutDuration;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const response = await this.request(
            {
                path: `/real-time-response/combined/batch-admin-command/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: DomainBatchExecuteCommandRequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainMultiCommandExecuteResponseWrapperFromJSON(jsonValue));
    }

    /**
     * Batch executes a RTR administrator command across the hosts mapped to the given batch ID.
     */
    async batchAdminCmd(
        body: DomainBatchExecuteCommandRequest,
        timeout?: number,
        timeoutDuration?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<DomainMultiCommandExecuteResponseWrapper> {
        const response = await this.batchAdminCmdRaw({ body: body, timeout: timeout, timeoutDuration: timeoutDuration }, initOverrides);
        return await response.value();
    }

    /**
     * Get status of an executed RTR administrator command on a single host.
     */
    async rTRCheckAdminCommandStatusRaw(
        requestParameters: RTRCheckAdminCommandStatusRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DomainStatusResponseWrapper>> {
        if (requestParameters.cloudRequestId === null || requestParameters.cloudRequestId === undefined) {
            throw new runtime.RequiredError("cloudRequestId", "Required parameter requestParameters.cloudRequestId was null or undefined when calling rTRCheckAdminCommandStatus.");
        }

        if (requestParameters.sequenceId === null || requestParameters.sequenceId === undefined) {
            throw new runtime.RequiredError("sequenceId", "Required parameter requestParameters.sequenceId was null or undefined when calling rTRCheckAdminCommandStatus.");
        }

        const queryParameters: any = {};

        if (requestParameters.cloudRequestId !== undefined) {
            queryParameters["cloud_request_id"] = requestParameters.cloudRequestId;
        }

        if (requestParameters.sequenceId !== undefined) {
            queryParameters["sequence_id"] = requestParameters.sequenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const response = await this.request(
            {
                path: `/real-time-response/entities/admin-command/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainStatusResponseWrapperFromJSON(jsonValue));
    }

    /**
     * Get status of an executed RTR administrator command on a single host.
     */
    async rTRCheckAdminCommandStatus(cloudRequestId: string, sequenceId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainStatusResponseWrapper> {
        const response = await this.rTRCheckAdminCommandStatusRaw({ cloudRequestId: cloudRequestId, sequenceId: sequenceId }, initOverrides);
        return await response.value();
    }

    /**
     * Upload a new put-file to use for the RTR `put` command.
     */
    async rTRCreatePutFilesRaw(requestParameters: RTRCreatePutFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters.file === null || requestParameters.file === undefined) {
            throw new runtime.RequiredError("file", "Required parameter requestParameters.file was null or undefined when calling rTRCreatePutFiles.");
        }

        if (requestParameters.description === null || requestParameters.description === undefined) {
            throw new runtime.RequiredError("description", "Required parameter requestParameters.description was null or undefined when calling rTRCreatePutFiles.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const consumes: runtime.Consume[] = [{ contentType: "multipart/form-data" }];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file !== undefined) {
            formParams.append("file", requestParameters.file as any);
        }

        if (requestParameters.description !== undefined) {
            formParams.append("description", requestParameters.description as any);
        }

        if (requestParameters.name !== undefined) {
            formParams.append("name", requestParameters.name as any);
        }

        if (requestParameters.commentsForAuditLog !== undefined) {
            formParams.append("comments_for_audit_log", requestParameters.commentsForAuditLog as any);
        }

        const response = await this.request(
            {
                path: `/real-time-response/entities/put-files/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: formParams,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Upload a new put-file to use for the RTR `put` command.
     */
    async rTRCreatePutFiles(file: Blob, description: string, name?: string, commentsForAuditLog?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaReplyMetaOnly> {
        const response = await this.rTRCreatePutFilesRaw({ file: file, description: description, name: name, commentsForAuditLog: commentsForAuditLog }, initOverrides);
        return await response.value();
    }

    /**
     * Upload a new custom-script to use for the RTR `runscript` command.
     */
    async rTRCreateScriptsRaw(requestParameters: RTRCreateScriptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters.description === null || requestParameters.description === undefined) {
            throw new runtime.RequiredError("description", "Required parameter requestParameters.description was null or undefined when calling rTRCreateScripts.");
        }

        if (requestParameters.permissionType === null || requestParameters.permissionType === undefined) {
            throw new runtime.RequiredError("permissionType", "Required parameter requestParameters.permissionType was null or undefined when calling rTRCreateScripts.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const consumes: runtime.Consume[] = [{ contentType: "multipart/form-data" }];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file !== undefined) {
            formParams.append("file", requestParameters.file as any);
        }

        if (requestParameters.description !== undefined) {
            formParams.append("description", requestParameters.description as any);
        }

        if (requestParameters.name !== undefined) {
            formParams.append("name", requestParameters.name as any);
        }

        if (requestParameters.commentsForAuditLog !== undefined) {
            formParams.append("comments_for_audit_log", requestParameters.commentsForAuditLog as any);
        }

        if (requestParameters.permissionType !== undefined) {
            formParams.append("permission_type", requestParameters.permissionType as any);
        }

        if (requestParameters.content !== undefined) {
            formParams.append("content", requestParameters.content as any);
        }

        if (requestParameters.platform) {
            formParams.append("platform", requestParameters.platform.join(runtime.COLLECTION_FORMATS["csv"]));
        }

        const response = await this.request(
            {
                path: `/real-time-response/entities/scripts/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: formParams,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Upload a new custom-script to use for the RTR `runscript` command.
     */
    async rTRCreateScripts(
        description: string,
        permissionType: string,
        file?: Blob,
        name?: string,
        commentsForAuditLog?: string,
        content?: string,
        platform?: Array<string>,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<MsaReplyMetaOnly> {
        const response = await this.rTRCreateScriptsRaw(
            { description: description, permissionType: permissionType, file: file, name: name, commentsForAuditLog: commentsForAuditLog, content: content, platform: platform },
            initOverrides
        );
        return await response.value();
    }

    /**
     * Delete a put-file based on the ID given.  Can only delete one file at a time.
     */
    async rTRDeletePutFilesRaw(requestParameters: RTRDeletePutFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling rTRDeletePutFiles.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids !== undefined) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const response = await this.request(
            {
                path: `/real-time-response/entities/put-files/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Delete a put-file based on the ID given.  Can only delete one file at a time.
     */
    async rTRDeletePutFiles(ids: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaReplyMetaOnly> {
        const response = await this.rTRDeletePutFilesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Delete a custom-script based on the ID given.  Can only delete one script at a time.
     */
    async rTRDeleteScriptsRaw(requestParameters: RTRDeleteScriptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling rTRDeleteScripts.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids !== undefined) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const response = await this.request(
            {
                path: `/real-time-response/entities/scripts/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Delete a custom-script based on the ID given.  Can only delete one script at a time.
     */
    async rTRDeleteScripts(ids: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaReplyMetaOnly> {
        const response = await this.rTRDeleteScriptsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Execute a RTR administrator command on a single host.
     */
    async rTRExecuteAdminCommandRaw(
        requestParameters: RTRExecuteAdminCommandRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DomainCommandExecuteResponseWrapper>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling rTRExecuteAdminCommand.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const response = await this.request(
            {
                path: `/real-time-response/entities/admin-command/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: DomainCommandExecuteRequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainCommandExecuteResponseWrapperFromJSON(jsonValue));
    }

    /**
     * Execute a RTR administrator command on a single host.
     */
    async rTRExecuteAdminCommand(body: DomainCommandExecuteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainCommandExecuteResponseWrapper> {
        const response = await this.rTRExecuteAdminCommandRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get put-files based on the ID\'s given. These are used for the RTR `put` command.
     */
    async rTRGetPutFilesRaw(requestParameters: RTRGetPutFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BinservclientMsaPFResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling rTRGetPutFiles.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const response = await this.request(
            {
                path: `/real-time-response/entities/put-files/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => BinservclientMsaPFResponseFromJSON(jsonValue));
    }

    /**
     * Get put-files based on the ID\'s given. These are used for the RTR `put` command.
     */
    async rTRGetPutFiles(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BinservclientMsaPFResponse> {
        const response = await this.rTRGetPutFilesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get put-files based on the ID\'s given. These are used for the RTR `put` command.
     */
    async rTRGetPutFilesV2Raw(requestParameters: RTRGetPutFilesV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainMsaPFResponseV2>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling rTRGetPutFilesV2.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const response = await this.request(
            {
                path: `/real-time-response/entities/put-files/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainMsaPFResponseV2FromJSON(jsonValue));
    }

    /**
     * Get put-files based on the ID\'s given. These are used for the RTR `put` command.
     */
    async rTRGetPutFilesV2(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainMsaPFResponseV2> {
        const response = await this.rTRGetPutFilesV2Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get custom-scripts based on the ID\'s given. These are used for the RTR `runscript` command.
     */
    async rTRGetScriptsRaw(requestParameters: RTRGetScriptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BinservclientMsaPFResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling rTRGetScripts.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const response = await this.request(
            {
                path: `/real-time-response/entities/scripts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => BinservclientMsaPFResponseFromJSON(jsonValue));
    }

    /**
     * Get custom-scripts based on the ID\'s given. These are used for the RTR `runscript` command.
     */
    async rTRGetScripts(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BinservclientMsaPFResponse> {
        const response = await this.rTRGetScriptsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get custom-scripts based on the ID\'s given. These are used for the RTR `runscript` command.
     */
    async rTRGetScriptsV2Raw(requestParameters: RTRGetScriptsV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainMsaPFResponseV2>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling rTRGetScriptsV2.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const response = await this.request(
            {
                path: `/real-time-response/entities/scripts/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainMsaPFResponseV2FromJSON(jsonValue));
    }

    /**
     * Get custom-scripts based on the ID\'s given. These are used for the RTR `runscript` command.
     */
    async rTRGetScriptsV2(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainMsaPFResponseV2> {
        const response = await this.rTRGetScriptsV2Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of put-file ID\'s that are available to the user for the `put` command.
     */
    async rTRListPutFilesRaw(requestParameters: RTRListPutFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BinservclientMsaPutFileResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const response = await this.request(
            {
                path: `/real-time-response/queries/put-files/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => BinservclientMsaPutFileResponseFromJSON(jsonValue));
    }

    /**
     * Get a list of put-file ID\'s that are available to the user for the `put` command.
     */
    async rTRListPutFiles(filter?: string, offset?: string, limit?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BinservclientMsaPutFileResponse> {
        const response = await this.rTRListPutFilesRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of custom-script ID\'s that are available to the user for the `runscript` command.
     */
    async rTRListScriptsRaw(requestParameters: RTRListScriptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BinservclientMsaPutFileResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const response = await this.request(
            {
                path: `/real-time-response/queries/scripts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => BinservclientMsaPutFileResponseFromJSON(jsonValue));
    }

    /**
     * Get a list of custom-script ID\'s that are available to the user for the `runscript` command.
     */
    async rTRListScripts(filter?: string, offset?: string, limit?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BinservclientMsaPutFileResponse> {
        const response = await this.rTRListScriptsRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Upload a new scripts to replace an existing one.
     */
    async rTRUpdateScriptsRaw(requestParameters: RTRUpdateScriptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling rTRUpdateScripts.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["real-time-response-admin:write"]);
        }

        const consumes: runtime.Consume[] = [{ contentType: "multipart/form-data" }];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.id !== undefined) {
            formParams.append("id", requestParameters.id as any);
        }

        if (requestParameters.file !== undefined) {
            formParams.append("file", requestParameters.file as any);
        }

        if (requestParameters.description !== undefined) {
            formParams.append("description", requestParameters.description as any);
        }

        if (requestParameters.name !== undefined) {
            formParams.append("name", requestParameters.name as any);
        }

        if (requestParameters.commentsForAuditLog !== undefined) {
            formParams.append("comments_for_audit_log", requestParameters.commentsForAuditLog as any);
        }

        if (requestParameters.permissionType !== undefined) {
            formParams.append("permission_type", requestParameters.permissionType as any);
        }

        if (requestParameters.content !== undefined) {
            formParams.append("content", requestParameters.content as any);
        }

        if (requestParameters.platform) {
            formParams.append("platform", requestParameters.platform.join(runtime.COLLECTION_FORMATS["csv"]));
        }

        const response = await this.request(
            {
                path: `/real-time-response/entities/scripts/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: formParams,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Upload a new scripts to replace an existing one.
     */
    async rTRUpdateScripts(
        id: string,
        file?: Blob,
        description?: string,
        name?: string,
        commentsForAuditLog?: string,
        permissionType?: string,
        content?: string,
        platform?: Array<string>,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<MsaReplyMetaOnly> {
        const response = await this.rTRUpdateScriptsRaw(
            { id: id, file: file, description: description, name: name, commentsForAuditLog: commentsForAuditLog, permissionType: permissionType, content: content, platform: platform },
            initOverrides
        );
        return await response.value();
    }
}
