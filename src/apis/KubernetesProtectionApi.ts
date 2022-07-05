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
import type {
    K8sregCreateAWSAccReq,
    K8sregGetAWSAccountsResp,
    K8sregGetClustersResp,
    K8sregGetLocationsResp,
    K8sregRegenAPIKeyResp,
    MsaBaseEntitiesResponse,
    MsaMetaInfo,
    MsaReplyMetaOnly,
} from "../models";
import {
    K8sregCreateAWSAccReqFromJSON,
    K8sregCreateAWSAccReqToJSON,
    K8sregGetAWSAccountsRespFromJSON,
    K8sregGetAWSAccountsRespToJSON,
    K8sregGetClustersRespFromJSON,
    K8sregGetClustersRespToJSON,
    K8sregGetLocationsRespFromJSON,
    K8sregGetLocationsRespToJSON,
    K8sregRegenAPIKeyRespFromJSON,
    K8sregRegenAPIKeyRespToJSON,
    MsaBaseEntitiesResponseFromJSON,
    MsaBaseEntitiesResponseToJSON,
    MsaMetaInfoFromJSON,
    MsaMetaInfoToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models";

export interface CreateAWSAccountRequest {
    body: K8sregCreateAWSAccReq;
}

export interface DeleteAWSAccountsMixin0Request {
    ids: Array<string>;
}

export interface GetAWSAccountsMixin0Request {
    ids?: Array<string>;
    status?: string;
    limit?: number;
    offset?: number;
}

export interface GetClustersRequest {
    clusterNames?: Array<string>;
    accountIds?: Array<string>;
    locations?: Array<string>;
    clusterService?: GetClustersClusterServiceEnum;
    limit?: number;
    offset?: number;
}

export interface GetHelmValuesYamlRequest {
    clusterName: string;
}

export interface GetLocationsRequest {
    clouds?: GetLocationsCloudsEnum;
}

export interface TriggerScanRequest {
    scanType: TriggerScanScanTypeEnum;
}

export interface UpdateAWSAccountRequest {
    ids: Array<string>;
    region?: string;
}

/**
 *
 */
export class KubernetesProtectionApi extends runtime.BaseAPI {
    /**
     * Creates a new AWS account in our system for a customer and generates the installation script
     */
    async createAWSAccountRaw(requestParameters: CreateAWSAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<K8sregCreateAWSAccReq>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling createAWSAccount.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["kubernetes-protection:write"]);
        }

        const response = await this.request(
            {
                path: `/kubernetes-protection/entities/accounts/aws/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: K8sregCreateAWSAccReqToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => K8sregCreateAWSAccReqFromJSON(jsonValue));
    }

    /**
     * Creates a new AWS account in our system for a customer and generates the installation script
     */
    async createAWSAccount(body: K8sregCreateAWSAccReq, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<K8sregCreateAWSAccReq> {
        const response = await this.createAWSAccountRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete AWS accounts.
     */
    async deleteAWSAccountsMixin0Raw(requestParameters: DeleteAWSAccountsMixin0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaMetaInfo>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling deleteAWSAccountsMixin0.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["kubernetes-protection:write"]);
        }

        const response = await this.request(
            {
                path: `/kubernetes-protection/entities/accounts/aws/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaMetaInfoFromJSON(jsonValue));
    }

    /**
     * Delete AWS accounts.
     */
    async deleteAWSAccountsMixin0(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaMetaInfo> {
        const response = await this.deleteAWSAccountsMixin0Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Provides a list of AWS accounts.
     */
    async getAWSAccountsMixin0Raw(requestParameters: GetAWSAccountsMixin0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<K8sregGetAWSAccountsResp>> {
        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.status !== undefined) {
            queryParameters["status"] = requestParameters.status;
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["kubernetes-protection:read"]);
        }

        const response = await this.request(
            {
                path: `/kubernetes-protection/entities/accounts/aws/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => K8sregGetAWSAccountsRespFromJSON(jsonValue));
    }

    /**
     * Provides a list of AWS accounts.
     */
    async getAWSAccountsMixin0(ids?: Array<string>, status?: string, limit?: number, offset?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<K8sregGetAWSAccountsResp> {
        const response = await this.getAWSAccountsMixin0Raw({ ids: ids, status: status, limit: limit, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * Provides the clusters acknowledged by the Kubernetes Protection service
     */
    async getClustersRaw(requestParameters: GetClustersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<K8sregGetClustersResp>> {
        const queryParameters: any = {};

        if (requestParameters.clusterNames) {
            queryParameters["cluster_names"] = requestParameters.clusterNames.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.accountIds) {
            queryParameters["account_ids"] = requestParameters.accountIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.locations) {
            queryParameters["locations"] = requestParameters.locations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.clusterService !== undefined) {
            queryParameters["cluster_service"] = requestParameters.clusterService;
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["kubernetes-protection:read"]);
        }

        const response = await this.request(
            {
                path: `/kubernetes-protection/entities/kubernetes/clusters/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => K8sregGetClustersRespFromJSON(jsonValue));
    }

    /**
     * Provides the clusters acknowledged by the Kubernetes Protection service
     */
    async getClusters(
        clusterNames?: Array<string>,
        accountIds?: Array<string>,
        locations?: Array<string>,
        clusterService?: GetClustersClusterServiceEnum,
        limit?: number,
        offset?: number,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<K8sregGetClustersResp> {
        const response = await this.getClustersRaw(
            { clusterNames: clusterNames, accountIds: accountIds, locations: locations, clusterService: clusterService, limit: limit, offset: offset },
            initOverrides
        );
        return await response.value();
    }

    /**
     * Provides a sample Helm values.yaml file for a customer to install alongside the agent Helm chart
     */
    async getHelmValuesYamlRaw(requestParameters: GetHelmValuesYamlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.clusterName === null || requestParameters.clusterName === undefined) {
            throw new runtime.RequiredError("clusterName", "Required parameter requestParameters.clusterName was null or undefined when calling getHelmValuesYaml.");
        }

        const queryParameters: any = {};

        if (requestParameters.clusterName !== undefined) {
            queryParameters["cluster_name"] = requestParameters.clusterName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["kubernetes-protection:read"]);
        }

        const response = await this.request(
            {
                path: `/kubernetes-protection/entities/integration/agent/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Provides a sample Helm values.yaml file for a customer to install alongside the agent Helm chart
     */
    async getHelmValuesYaml(clusterName: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getHelmValuesYamlRaw({ clusterName: clusterName }, initOverrides);
        return await response.value();
    }

    /**
     * Provides the cloud locations acknowledged by the Kubernetes Protection service
     */
    async getLocationsRaw(requestParameters: GetLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<K8sregGetLocationsResp>> {
        const queryParameters: any = {};

        if (requestParameters.clouds) {
            queryParameters["clouds"] = requestParameters.clouds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["kubernetes-protection:read"]);
        }

        const response = await this.request(
            {
                path: `/kubernetes-protection/entities/cloud-locations/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => K8sregGetLocationsRespFromJSON(jsonValue));
    }

    /**
     * Provides the cloud locations acknowledged by the Kubernetes Protection service
     */
    async getLocations(clouds?: GetLocationsCloudsEnum, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<K8sregGetLocationsResp> {
        const response = await this.getLocationsRaw({ clouds: clouds }, initOverrides);
        return await response.value();
    }

    /**
     * Regenerate API key for docker registry integrations
     */
    async regenerateAPIKeyRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<K8sregRegenAPIKeyResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["kubernetes-protection:write"]);
        }

        const response = await this.request(
            {
                path: `/kubernetes-protection/entities/integration/api-key/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => K8sregRegenAPIKeyRespFromJSON(jsonValue));
    }

    /**
     * Regenerate API key for docker registry integrations
     */
    async regenerateAPIKey(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<K8sregRegenAPIKeyResp> {
        const response = await this.regenerateAPIKeyRaw(initOverrides);
        return await response.value();
    }

    /**
     * Triggers a dry run or a full scan of a customer\'s kubernetes footprint
     */
    async triggerScanRaw(requestParameters: TriggerScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaBaseEntitiesResponse>> {
        if (requestParameters.scanType === null || requestParameters.scanType === undefined) {
            throw new runtime.RequiredError("scanType", "Required parameter requestParameters.scanType was null or undefined when calling triggerScan.");
        }

        const queryParameters: any = {};

        if (requestParameters.scanType !== undefined) {
            queryParameters["scan_type"] = requestParameters.scanType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["kubernetes-protection:write"]);
        }

        const response = await this.request(
            {
                path: `/kubernetes-protection/entities/scan/trigger/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaBaseEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Triggers a dry run or a full scan of a customer\'s kubernetes footprint
     */
    async triggerScan(scanType: TriggerScanScanTypeEnum, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaBaseEntitiesResponse> {
        const response = await this.triggerScanRaw({ scanType: scanType }, initOverrides);
        return await response.value();
    }

    /**
     * Updates the AWS account per the query parameters provided
     */
    async updateAWSAccountRaw(requestParameters: UpdateAWSAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaBaseEntitiesResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling updateAWSAccount.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.region !== undefined) {
            queryParameters["region"] = requestParameters.region;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["kubernetes-protection:write"]);
        }

        const response = await this.request(
            {
                path: `/kubernetes-protection/entities/accounts/aws/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaBaseEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Updates the AWS account per the query parameters provided
     */
    async updateAWSAccount(ids: Array<string>, region?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaBaseEntitiesResponse> {
        const response = await this.updateAWSAccountRaw({ ids: ids, region: region }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const GetClustersClusterServiceEnum = {
    Eks: "eks",
} as const;
export type GetClustersClusterServiceEnum = typeof GetClustersClusterServiceEnum[keyof typeof GetClustersClusterServiceEnum];
/**
 * @export
 */
export type GetLocationsCloudsEnum = Array<String>;
/**
 * @export
 */
export const TriggerScanScanTypeEnum = {
    ClusterRefresh: "cluster-refresh",
    DryRun: "dry-run",
    Full: "full",
} as const;
export type TriggerScanScanTypeEnum = typeof TriggerScanScanTypeEnum[keyof typeof TriggerScanScanTypeEnum];
