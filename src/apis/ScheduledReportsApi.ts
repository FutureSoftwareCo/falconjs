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
import type { ApiReportExecutionLaunchRequestV1, ApiReportExecutionsResponseV1, ApiScheduledReportsResultV1, MsaQueryResponse, MsaReplyMetaOnly } from "../models";
import {
    ApiReportExecutionLaunchRequestV1FromJSON,
    ApiReportExecutionLaunchRequestV1ToJSON,
    ApiReportExecutionsResponseV1FromJSON,
    ApiReportExecutionsResponseV1ToJSON,
    ApiScheduledReportsResultV1FromJSON,
    ApiScheduledReportsResultV1ToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models";

export interface ScheduledReportsGetRequest {
    ids: Array<string>;
}

export interface ScheduledReportsLaunchRequest {
    body: Array<ApiReportExecutionLaunchRequestV1>;
}

export interface ScheduledReportsQueryRequest {
    sort?: string;
    filter?: string;
    q?: string;
    offset?: string;
    limit?: number;
}

/**
 *
 */
export class ScheduledReportsApi extends runtime.BaseAPI {
    /**
     * Retrieve scheduled reports for the provided report IDs.
     */
    async scheduledReportsGetRaw(requestParameters: ScheduledReportsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiScheduledReportsResultV1>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling scheduledReportsGet.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["scheduled-report:read"]);
        }

        const response = await this.request(
            {
                path: `/reports/entities/scheduled-reports/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiScheduledReportsResultV1FromJSON(jsonValue));
    }

    /**
     * Retrieve scheduled reports for the provided report IDs.
     */
    async scheduledReportsGet(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiScheduledReportsResultV1> {
        const response = await this.scheduledReportsGetRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Launch scheduled reports executions for the provided report IDs.
     */
    async scheduledReportsLaunchRaw(
        requestParameters: ScheduledReportsLaunchRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ApiReportExecutionsResponseV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling scheduledReportsLaunch.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["scheduled-report:read"]);
        }

        const response = await this.request(
            {
                path: `/reports/entities/scheduled-reports/execution/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body.map(ApiReportExecutionLaunchRequestV1ToJSON),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiReportExecutionsResponseV1FromJSON(jsonValue));
    }

    /**
     * Launch scheduled reports executions for the provided report IDs.
     */
    async scheduledReportsLaunch(body: Array<ApiReportExecutionLaunchRequestV1>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiReportExecutionsResponseV1> {
        const response = await this.scheduledReportsLaunchRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Find all report IDs matching the query with filter
     */
    async scheduledReportsQueryRaw(requestParameters: ScheduledReportsQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.q !== undefined) {
            queryParameters["q"] = requestParameters.q;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["scheduled-report:read"]);
        }

        const response = await this.request(
            {
                path: `/reports/queries/scheduled-reports/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Find all report IDs matching the query with filter
     */
    async scheduledReportsQuery(sort?: string, filter?: string, q?: string, offset?: string, limit?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.scheduledReportsQueryRaw({ sort: sort, filter: filter, q: q, offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }
}
