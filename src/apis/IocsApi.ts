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
import type { ApiMsaProcessDetailResponse, ApiMsaReplyDevicesRanOn, ApiMsaReplyIOCDevicesCount, ApiMsaReplyProcessesRanOn, MsaReplyMetaOnly } from "../models";
import {
    ApiMsaProcessDetailResponseFromJSON,
    ApiMsaProcessDetailResponseToJSON,
    ApiMsaReplyDevicesRanOnFromJSON,
    ApiMsaReplyDevicesRanOnToJSON,
    ApiMsaReplyIOCDevicesCountFromJSON,
    ApiMsaReplyIOCDevicesCountToJSON,
    ApiMsaReplyProcessesRanOnFromJSON,
    ApiMsaReplyProcessesRanOnToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models";

export interface DevicesCountRequest {
    type: string;
    value: string;
}

export interface DevicesRanOnRequest {
    type: string;
    value: string;
    limit?: string;
    offset?: string;
}

export interface EntitiesProcessesRequest {
    ids: Array<string>;
}

export interface ProcessesRanOnRequest {
    type: string;
    value: string;
    deviceId: string;
    limit?: string;
    offset?: string;
}

/**
 *
 */
export class IocsApi extends runtime.BaseAPI {
    /**
     * Number of hosts in your customer account that have observed a given custom IOC
     */
    async devicesCountRaw(requestParameters: DevicesCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiMsaReplyIOCDevicesCount>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError("type", "Required parameter requestParameters.type was null or undefined when calling devicesCount.");
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError("value", "Required parameter requestParameters.value was null or undefined when calling devicesCount.");
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters["type"] = requestParameters.type;
        }

        if (requestParameters.value !== undefined) {
            queryParameters["value"] = requestParameters.value;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["iocs:read"]);
        }

        const response = await this.request(
            {
                path: `/indicators/aggregates/devices-count/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiMsaReplyIOCDevicesCountFromJSON(jsonValue));
    }

    /**
     * Number of hosts in your customer account that have observed a given custom IOC
     */
    async devicesCount(type: string, value: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiMsaReplyIOCDevicesCount> {
        const response = await this.devicesCountRaw({ type: type, value: value }, initOverrides);
        return await response.value();
    }

    /**
     * Find hosts that have observed a given custom IOC. For details about those hosts, use GET /devices/entities/devices/v1
     */
    async devicesRanOnRaw(requestParameters: DevicesRanOnRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiMsaReplyDevicesRanOn>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError("type", "Required parameter requestParameters.type was null or undefined when calling devicesRanOn.");
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError("value", "Required parameter requestParameters.value was null or undefined when calling devicesRanOn.");
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters["type"] = requestParameters.type;
        }

        if (requestParameters.value !== undefined) {
            queryParameters["value"] = requestParameters.value;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["iocs:read"]);
        }

        const response = await this.request(
            {
                path: `/indicators/queries/devices/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiMsaReplyDevicesRanOnFromJSON(jsonValue));
    }

    /**
     * Find hosts that have observed a given custom IOC. For details about those hosts, use GET /devices/entities/devices/v1
     */
    async devicesRanOn(type: string, value: string, limit?: string, offset?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiMsaReplyDevicesRanOn> {
        const response = await this.devicesRanOnRaw({ type: type, value: value, limit: limit, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * For the provided ProcessID retrieve the process details
     */
    async entitiesProcessesRaw(requestParameters: EntitiesProcessesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiMsaProcessDetailResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling entitiesProcesses.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["iocs:read"]);
        }

        const response = await this.request(
            {
                path: `/processes/entities/processes/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiMsaProcessDetailResponseFromJSON(jsonValue));
    }

    /**
     * For the provided ProcessID retrieve the process details
     */
    async entitiesProcesses(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiMsaProcessDetailResponse> {
        const response = await this.entitiesProcessesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Search for processes associated with a custom IOC
     */
    async processesRanOnRaw(requestParameters: ProcessesRanOnRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiMsaReplyProcessesRanOn>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError("type", "Required parameter requestParameters.type was null or undefined when calling processesRanOn.");
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError("value", "Required parameter requestParameters.value was null or undefined when calling processesRanOn.");
        }

        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError("deviceId", "Required parameter requestParameters.deviceId was null or undefined when calling processesRanOn.");
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters["type"] = requestParameters.type;
        }

        if (requestParameters.value !== undefined) {
            queryParameters["value"] = requestParameters.value;
        }

        if (requestParameters.deviceId !== undefined) {
            queryParameters["device_id"] = requestParameters.deviceId;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["iocs:read"]);
        }

        const response = await this.request(
            {
                path: `/indicators/queries/processes/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiMsaReplyProcessesRanOnFromJSON(jsonValue));
    }

    /**
     * Search for processes associated with a custom IOC
     */
    async processesRanOn(
        type: string,
        value: string,
        deviceId: string,
        limit?: string,
        offset?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<ApiMsaReplyProcessesRanOn> {
        const response = await this.processesRanOnRaw({ type: type, value: value, deviceId: deviceId, limit: limit, offset: offset }, initOverrides);
        return await response.value();
    }
}
