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
    MsaBaseEntitiesResponse,
    MsaReplyMetaOnly,
    RegistrationAWSAccountConsoleURL,
    RegistrationAWSAccountCreateRequestD4CExtV2,
    RegistrationAWSAccountResponseV2,
    RegistrationAWSProvisionGetAccountScriptResponseV2,
    RegistrationAzureAccountCreateRequestExternalV1,
    RegistrationAzureAccountResponseV1,
    RegistrationAzureDownloadCertificateResponseV1,
    RegistrationAzureProvisionGetUserScriptResponseV1,
    RegistrationAzureServicePrincipalResponseV1,
    RegistrationGCPAccountCreateRequestExtV1,
    RegistrationGCPAccountResponseV1,
    RegistrationGCPProvisionGetUserScriptResponseV1,
    RegistrationStaticScriptsResponse,
} from "../models";
import {
    MsaBaseEntitiesResponseFromJSON,
    MsaBaseEntitiesResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    RegistrationAWSAccountConsoleURLFromJSON,
    RegistrationAWSAccountConsoleURLToJSON,
    RegistrationAWSAccountCreateRequestD4CExtV2FromJSON,
    RegistrationAWSAccountCreateRequestD4CExtV2ToJSON,
    RegistrationAWSAccountResponseV2FromJSON,
    RegistrationAWSAccountResponseV2ToJSON,
    RegistrationAWSProvisionGetAccountScriptResponseV2FromJSON,
    RegistrationAWSProvisionGetAccountScriptResponseV2ToJSON,
    RegistrationAzureAccountCreateRequestExternalV1FromJSON,
    RegistrationAzureAccountCreateRequestExternalV1ToJSON,
    RegistrationAzureAccountResponseV1FromJSON,
    RegistrationAzureAccountResponseV1ToJSON,
    RegistrationAzureDownloadCertificateResponseV1FromJSON,
    RegistrationAzureDownloadCertificateResponseV1ToJSON,
    RegistrationAzureProvisionGetUserScriptResponseV1FromJSON,
    RegistrationAzureProvisionGetUserScriptResponseV1ToJSON,
    RegistrationAzureServicePrincipalResponseV1FromJSON,
    RegistrationAzureServicePrincipalResponseV1ToJSON,
    RegistrationGCPAccountCreateRequestExtV1FromJSON,
    RegistrationGCPAccountCreateRequestExtV1ToJSON,
    RegistrationGCPAccountResponseV1FromJSON,
    RegistrationGCPAccountResponseV1ToJSON,
    RegistrationGCPProvisionGetUserScriptResponseV1FromJSON,
    RegistrationGCPProvisionGetUserScriptResponseV1ToJSON,
    RegistrationStaticScriptsResponseFromJSON,
    RegistrationStaticScriptsResponseToJSON,
} from "../models";

export interface CreateCSPMAzureAccountRequest {
    body: RegistrationAzureAccountCreateRequestExternalV1;
}

export interface CreateCSPMGCPAccountRequest {
    body: RegistrationGCPAccountCreateRequestExtV1;
}

export interface CreateD4CAwsAccountRequest {
    body: RegistrationAWSAccountCreateRequestD4CExtV2;
}

export interface DeleteD4CAwsAccountRequest {
    ids?: Array<string>;
    organizationIds?: Array<string>;
}

export interface DiscoverCloudAzureDownloadCertificateRequest {
    tenantId: Array<string>;
    refresh?: DiscoverCloudAzureDownloadCertificateRefreshEnum;
}

export interface GetCSPMAzureAccountRequest {
    ids?: Array<string>;
    scanType?: string;
}

export interface GetCSPMCGPAccountRequest {
    scanType?: string;
    ids?: Array<string>;
}

export interface GetD4CAWSAccountScriptsAttachmentRequest {
    ids?: Array<string>;
}

export interface GetD4CAwsAccountRequest {
    scanType?: string;
    ids?: Array<string>;
    organizationIds?: Array<string>;
    status?: string;
    limit?: number;
    offset?: number;
    migrated?: GetD4CAwsAccountMigratedEnum;
}

export interface GetD4CAwsConsoleSetupURLsRequest {
    region?: string;
}

export interface GetHorizonD4CScriptsRequest {
    singleAccount?: GetHorizonD4CScriptsSingleAccountEnum;
    organizationId?: string;
    _delete?: GetHorizonD4CScriptsDeleteEnum;
    accountType?: GetHorizonD4CScriptsAccountTypeEnum;
}

export interface UpdateCSPMAzureAccountClientIDRequest {
    id: string;
}

/**
 *
 */
export class D4cRegistrationApi extends runtime.BaseAPI {
    /**
     * Creates a new account in our system for a customer and generates a script for them to run in their cloud environment to grant us access.
     */
    async createCSPMAzureAccountRaw(
        requestParameters: CreateCSPMAzureAccountRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<RegistrationAzureAccountResponseV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling createCSPMAzureAccount.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:write"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-azure/entities/account/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: RegistrationAzureAccountCreateRequestExternalV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationAzureAccountResponseV1FromJSON(jsonValue));
    }

    /**
     * Creates a new account in our system for a customer and generates a script for them to run in their cloud environment to grant us access.
     */
    async createCSPMAzureAccount(body: RegistrationAzureAccountCreateRequestExternalV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegistrationAzureAccountResponseV1> {
        const response = await this.createCSPMAzureAccountRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new account in our system for a customer and generates a new service account for them to add access to in their GCP environment to grant us access.
     */
    async createCSPMGCPAccountRaw(
        requestParameters: CreateCSPMGCPAccountRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<RegistrationGCPAccountResponseV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling createCSPMGCPAccount.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:write"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-gcp/entities/account/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: RegistrationGCPAccountCreateRequestExtV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationGCPAccountResponseV1FromJSON(jsonValue));
    }

    /**
     * Creates a new account in our system for a customer and generates a new service account for them to add access to in their GCP environment to grant us access.
     */
    async createCSPMGCPAccount(body: RegistrationGCPAccountCreateRequestExtV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegistrationGCPAccountResponseV1> {
        const response = await this.createCSPMGCPAccountRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new account in our system for a customer and generates a script for them to run in their AWS cloud environment to grant us access.
     */
    async createD4CAwsAccountRaw(
        requestParameters: CreateD4CAwsAccountRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<RegistrationAWSAccountResponseV2>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling createD4CAwsAccount.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:write"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-aws/entities/account/v2`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: RegistrationAWSAccountCreateRequestD4CExtV2ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationAWSAccountResponseV2FromJSON(jsonValue));
    }

    /**
     * Creates a new account in our system for a customer and generates a script for them to run in their AWS cloud environment to grant us access.
     */
    async createD4CAwsAccount(body: RegistrationAWSAccountCreateRequestD4CExtV2, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegistrationAWSAccountResponseV2> {
        const response = await this.createD4CAwsAccountRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an existing AWS account or organization in our system.
     */
    async deleteD4CAwsAccountRaw(requestParameters: DeleteD4CAwsAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaBaseEntitiesResponse>> {
        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        if (requestParameters.organizationIds) {
            queryParameters["organization-ids"] = requestParameters.organizationIds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:write"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-aws/entities/account/v2`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaBaseEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Deletes an existing AWS account or organization in our system.
     */
    async deleteD4CAwsAccount(ids?: Array<string>, organizationIds?: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaBaseEntitiesResponse> {
        const response = await this.deleteD4CAwsAccountRaw({ ids: ids, organizationIds: organizationIds }, initOverrides);
        return await response.value();
    }

    /**
     * Returns JSON object(s) that contain the base64 encoded certificate for a service principal.
     */
    async discoverCloudAzureDownloadCertificateRaw(
        requestParameters: DiscoverCloudAzureDownloadCertificateRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<RegistrationAzureDownloadCertificateResponseV1>> {
        if (requestParameters.tenantId === null || requestParameters.tenantId === undefined) {
            throw new runtime.RequiredError("tenantId", "Required parameter requestParameters.tenantId was null or undefined when calling discoverCloudAzureDownloadCertificate.");
        }

        const queryParameters: any = {};

        if (requestParameters.tenantId) {
            queryParameters["tenant_id"] = requestParameters.tenantId;
        }

        if (requestParameters.refresh !== undefined) {
            queryParameters["refresh"] = requestParameters.refresh;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:read"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-azure/entities/download-certificate/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationAzureDownloadCertificateResponseV1FromJSON(jsonValue));
    }

    /**
     * Returns JSON object(s) that contain the base64 encoded certificate for a service principal.
     */
    async discoverCloudAzureDownloadCertificate(
        tenantId: Array<string>,
        refresh?: DiscoverCloudAzureDownloadCertificateRefreshEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<RegistrationAzureDownloadCertificateResponseV1> {
        const response = await this.discoverCloudAzureDownloadCertificateRaw({ tenantId: tenantId, refresh: refresh }, initOverrides);
        return await response.value();
    }

    /**
     * Return information about Azure account registration
     */
    async getCSPMAzureAccountRaw(
        requestParameters: GetCSPMAzureAccountRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<RegistrationAzureAccountResponseV1>> {
        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        if (requestParameters.scanType !== undefined) {
            queryParameters["scan-type"] = requestParameters.scanType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:read"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-azure/entities/account/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationAzureAccountResponseV1FromJSON(jsonValue));
    }

    /**
     * Return information about Azure account registration
     */
    async getCSPMAzureAccount(ids?: Array<string>, scanType?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegistrationAzureAccountResponseV1> {
        const response = await this.getCSPMAzureAccountRaw({ ids: ids, scanType: scanType }, initOverrides);
        return await response.value();
    }

    /**
     * Return a script for customer to run in their cloud environment to grant us access to their Azure environment
     */
    async getCSPMAzureUserScriptsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RegistrationAzureProvisionGetUserScriptResponseV1>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:read"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-azure/entities/user-scripts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationAzureProvisionGetUserScriptResponseV1FromJSON(jsonValue));
    }

    /**
     * Return a script for customer to run in their cloud environment to grant us access to their Azure environment
     */
    async getCSPMAzureUserScripts(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegistrationAzureProvisionGetUserScriptResponseV1> {
        const response = await this.getCSPMAzureUserScriptsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Return a script for customer to run in their cloud environment to grant us access to their Azure environment as a downloadable attachment
     */
    async getCSPMAzureUserScriptsAttachmentRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RegistrationAzureProvisionGetUserScriptResponseV1>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:read"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-azure/entities/user-scripts-download/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationAzureProvisionGetUserScriptResponseV1FromJSON(jsonValue));
    }

    /**
     * Return a script for customer to run in their cloud environment to grant us access to their Azure environment as a downloadable attachment
     */
    async getCSPMAzureUserScriptsAttachment(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegistrationAzureProvisionGetUserScriptResponseV1> {
        const response = await this.getCSPMAzureUserScriptsAttachmentRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns information about the current status of an GCP account.
     */
    async getCSPMCGPAccountRaw(
        requestParameters: GetCSPMCGPAccountRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<RegistrationGCPAccountResponseV1>> {
        const queryParameters: any = {};

        if (requestParameters.scanType !== undefined) {
            queryParameters["scan-type"] = requestParameters.scanType;
        }

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:read"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-gcp/entities/account/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationGCPAccountResponseV1FromJSON(jsonValue));
    }

    /**
     * Returns information about the current status of an GCP account.
     */
    async getCSPMCGPAccount(scanType?: string, ids?: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegistrationGCPAccountResponseV1> {
        const response = await this.getCSPMCGPAccountRaw({ scanType: scanType, ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Return a script for customer to run in their cloud environment to grant us access to their GCP environment
     */
    async getCSPMGCPUserScriptsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RegistrationGCPProvisionGetUserScriptResponseV1>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:read"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-gcp/entities/user-scripts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationGCPProvisionGetUserScriptResponseV1FromJSON(jsonValue));
    }

    /**
     * Return a script for customer to run in their cloud environment to grant us access to their GCP environment
     */
    async getCSPMGCPUserScripts(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegistrationGCPProvisionGetUserScriptResponseV1> {
        const response = await this.getCSPMGCPUserScriptsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Return a script for customer to run in their cloud environment to grant us access to their GCP environment as a downloadable attachment
     */
    async getCSPMGCPUserScriptsAttachmentRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RegistrationGCPProvisionGetUserScriptResponseV1>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:read"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-gcp/entities/user-scripts-download/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationGCPProvisionGetUserScriptResponseV1FromJSON(jsonValue));
    }

    /**
     * Return a script for customer to run in their cloud environment to grant us access to their GCP environment as a downloadable attachment
     */
    async getCSPMGCPUserScriptsAttachment(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegistrationGCPProvisionGetUserScriptResponseV1> {
        const response = await this.getCSPMGCPUserScriptsAttachmentRaw(initOverrides);
        return await response.value();
    }

    /**
     * Return a script for customer to run in their cloud environment to grant us access to their AWS environment as a downloadable attachment.
     */
    async getD4CAWSAccountScriptsAttachmentRaw(
        requestParameters: GetD4CAWSAccountScriptsAttachmentRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<RegistrationAWSProvisionGetAccountScriptResponseV2>> {
        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:read"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-aws/entities/user-scripts-download/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationAWSProvisionGetAccountScriptResponseV2FromJSON(jsonValue));
    }

    /**
     * Return a script for customer to run in their cloud environment to grant us access to their AWS environment as a downloadable attachment.
     */
    async getD4CAWSAccountScriptsAttachment(ids?: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegistrationAWSProvisionGetAccountScriptResponseV2> {
        const response = await this.getD4CAWSAccountScriptsAttachmentRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Returns information about the current status of an AWS account.
     */
    async getD4CAwsAccountRaw(requestParameters: GetD4CAwsAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RegistrationAWSAccountResponseV2>> {
        const queryParameters: any = {};

        if (requestParameters.scanType !== undefined) {
            queryParameters["scan-type"] = requestParameters.scanType;
        }

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        if (requestParameters.organizationIds) {
            queryParameters["organization-ids"] = requestParameters.organizationIds;
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

        if (requestParameters.migrated !== undefined) {
            queryParameters["migrated"] = requestParameters.migrated;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:read"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-aws/entities/account/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationAWSAccountResponseV2FromJSON(jsonValue));
    }

    /**
     * Returns information about the current status of an AWS account.
     */
    async getD4CAwsAccount(
        scanType?: string,
        ids?: Array<string>,
        organizationIds?: Array<string>,
        status?: string,
        limit?: number,
        offset?: number,
        migrated?: GetD4CAwsAccountMigratedEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<RegistrationAWSAccountResponseV2> {
        const response = await this.getD4CAwsAccountRaw(
            { scanType: scanType, ids: ids, organizationIds: organizationIds, status: status, limit: limit, offset: offset, migrated: migrated },
            initOverrides
        );
        return await response.value();
    }

    /**
     * Return a URL for customer to visit in their cloud environment to grant us access to their AWS environment.
     */
    async getD4CAwsConsoleSetupURLsRaw(
        requestParameters: GetD4CAwsConsoleSetupURLsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<RegistrationAWSAccountConsoleURL>> {
        const queryParameters: any = {};

        if (requestParameters.region !== undefined) {
            queryParameters["region"] = requestParameters.region;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:read"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-aws/entities/console-setup-urls/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationAWSAccountConsoleURLFromJSON(jsonValue));
    }

    /**
     * Return a URL for customer to visit in their cloud environment to grant us access to their AWS environment.
     */
    async getD4CAwsConsoleSetupURLs(region?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegistrationAWSAccountConsoleURL> {
        const response = await this.getD4CAwsConsoleSetupURLsRaw({ region: region }, initOverrides);
        return await response.value();
    }

    /**
     * Returns static install scripts for Horizon.
     */
    async getHorizonD4CScriptsRaw(
        requestParameters: GetHorizonD4CScriptsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<RegistrationStaticScriptsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.singleAccount !== undefined) {
            queryParameters["single_account"] = requestParameters.singleAccount;
        }

        if (requestParameters.organizationId !== undefined) {
            queryParameters["organization-id"] = requestParameters.organizationId;
        }

        if (requestParameters._delete !== undefined) {
            queryParameters["delete"] = requestParameters._delete;
        }

        if (requestParameters.accountType !== undefined) {
            queryParameters["account_type"] = requestParameters.accountType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:read"]);
        }

        const response = await this.request(
            {
                path: `/settings-discover/entities/gen/scripts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationStaticScriptsResponseFromJSON(jsonValue));
    }

    /**
     * Returns static install scripts for Horizon.
     */
    async getHorizonD4CScripts(
        singleAccount?: GetHorizonD4CScriptsSingleAccountEnum,
        organizationId?: string,
        _delete?: GetHorizonD4CScriptsDeleteEnum,
        accountType?: GetHorizonD4CScriptsAccountTypeEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<RegistrationStaticScriptsResponse> {
        const response = await this.getHorizonD4CScriptsRaw({ singleAccount: singleAccount, organizationId: organizationId, _delete: _delete, accountType: accountType }, initOverrides);
        return await response.value();
    }

    /**
     * Update an Azure service account in our system by with the user-created client_id created with the public key we\'ve provided
     */
    async updateCSPMAzureAccountClientIDRaw(
        requestParameters: UpdateCSPMAzureAccountClientIDRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<RegistrationAzureServicePrincipalResponseV1>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling updateCSPMAzureAccountClientID.");
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["d4c-registration:write"]);
        }

        const response = await this.request(
            {
                path: `/cloud-connect-azure/entities/client-id/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationAzureServicePrincipalResponseV1FromJSON(jsonValue));
    }

    /**
     * Update an Azure service account in our system by with the user-created client_id created with the public key we\'ve provided
     */
    async updateCSPMAzureAccountClientID(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegistrationAzureServicePrincipalResponseV1> {
        const response = await this.updateCSPMAzureAccountClientIDRaw({ id: id }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const DiscoverCloudAzureDownloadCertificateRefreshEnum = {
    False: "false",
    True: "true",
} as const;
export type DiscoverCloudAzureDownloadCertificateRefreshEnum = (typeof DiscoverCloudAzureDownloadCertificateRefreshEnum)[keyof typeof DiscoverCloudAzureDownloadCertificateRefreshEnum];
/**
 * @export
 */
export const GetD4CAwsAccountMigratedEnum = {
    False: "false",
    True: "true",
} as const;
export type GetD4CAwsAccountMigratedEnum = (typeof GetD4CAwsAccountMigratedEnum)[keyof typeof GetD4CAwsAccountMigratedEnum];
/**
 * @export
 */
export const GetHorizonD4CScriptsSingleAccountEnum = {
    False: "false",
    True: "true",
} as const;
export type GetHorizonD4CScriptsSingleAccountEnum = (typeof GetHorizonD4CScriptsSingleAccountEnum)[keyof typeof GetHorizonD4CScriptsSingleAccountEnum];
/**
 * @export
 */
export const GetHorizonD4CScriptsDeleteEnum = {
    False: "false",
    True: "true",
} as const;
export type GetHorizonD4CScriptsDeleteEnum = (typeof GetHorizonD4CScriptsDeleteEnum)[keyof typeof GetHorizonD4CScriptsDeleteEnum];
/**
 * @export
 */
export const GetHorizonD4CScriptsAccountTypeEnum = {
    Commercial: "commercial",
    Gov: "gov",
} as const;
export type GetHorizonD4CScriptsAccountTypeEnum = (typeof GetHorizonD4CScriptsAccountTypeEnum)[keyof typeof GetHorizonD4CScriptsAccountTypeEnum];
