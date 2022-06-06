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
    MlscannerQueryResponse,
    MlscannerQueryResponseFromJSON,
    MlscannerQueryResponseToJSON,
    MlscannerSamplesScanParameters,
    MlscannerSamplesScanParametersFromJSON,
    MlscannerSamplesScanParametersToJSON,
    MlscannerScanV1Response,
    MlscannerScanV1ResponseFromJSON,
    MlscannerScanV1ResponseToJSON,
    MsaAggregateQueryRequest,
    MsaAggregateQueryRequestFromJSON,
    MsaAggregateQueryRequestToJSON,
    MsaReplyMetaOnly,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models";

export interface GetScansRequest {
    ids: Array<string>;
}

export interface GetScansAggregatesRequest {
    body: MsaAggregateQueryRequest;
}

export interface QuerySubmissionsMixin0Request {
    filter?: string;
    offset?: string;
    limit?: number;
    sort?: string;
}

export interface ScanSamplesRequest {
    body: MlscannerSamplesScanParameters;
}

/**
 *
 */
export class QuickScanApi extends runtime.BaseAPI {
    /**
     * Check the status of a volume scan. Time required for analysis increases with the number of samples in a volume but usually it should take less than 1 minute
     */
    async getScansRaw(requestParameters: GetScansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MlscannerScanV1Response>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getScans.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["quick-scan:read"]);
        }

        const response = await this.request(
            {
                path: `/scanner/entities/scans/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MlscannerScanV1ResponseFromJSON(jsonValue));
    }

    /**
     * Check the status of a volume scan. Time required for analysis increases with the number of samples in a volume but usually it should take less than 1 minute
     */
    async getScans(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MlscannerScanV1Response> {
        const response = await this.getScansRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get scans aggregations as specified via json in request body.
     */
    async getScansAggregatesRaw(requestParameters: GetScansAggregatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling getScansAggregates.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["quick-scan:read"]);
        }

        const response = await this.request(
            {
                path: `/scanner/aggregates/scans/GET/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaAggregateQueryRequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get scans aggregations as specified via json in request body.
     */
    async getScansAggregates(body: MsaAggregateQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getScansAggregatesRaw({ body: body }, initOverrides);
    }

    /**
     * Find IDs for submitted scans by providing an FQL filter and paging details. Returns a set of volume IDs that match your criteria.
     */
    async querySubmissionsMixin0Raw(
        requestParameters: QuerySubmissionsMixin0Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MlscannerQueryResponse>> {
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["quick-scan:read"]);
        }

        const response = await this.request(
            {
                path: `/scanner/queries/scans/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MlscannerQueryResponseFromJSON(jsonValue));
    }

    /**
     * Find IDs for submitted scans by providing an FQL filter and paging details. Returns a set of volume IDs that match your criteria.
     */
    async querySubmissionsMixin0(filter?: string, offset?: string, limit?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MlscannerQueryResponse> {
        const response = await this.querySubmissionsMixin0Raw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Submit a volume of files for ml scanning. Time required for analysis increases with the number of samples in a volume but usually it should take less than 1 minute
     */
    async scanSamplesRaw(requestParameters: ScanSamplesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MlscannerQueryResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling scanSamples.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["quick-scan:write"]);
        }

        const response = await this.request(
            {
                path: `/scanner/entities/scans/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MlscannerSamplesScanParametersToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MlscannerQueryResponseFromJSON(jsonValue));
    }

    /**
     * Submit a volume of files for ml scanning. Time required for analysis increases with the number of samples in a volume but usually it should take less than 1 minute
     */
    async scanSamples(body: MlscannerSamplesScanParameters, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MlscannerQueryResponse> {
        const response = await this.scanSamplesRaw({ body: body }, initOverrides);
        return await response.value();
    }
}
