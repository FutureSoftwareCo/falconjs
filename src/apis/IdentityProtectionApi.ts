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
import type { MsaReplyMetaOnly } from "../models";
import { MsaReplyMetaOnlyFromJSON, MsaReplyMetaOnlyToJSON } from "../models";

export interface ApiPreemptProxyPostGraphqlRequest {
    authorization: string;
}

/**
 *
 */
export class IdentityProtectionApi extends runtime.BaseAPI {
    /**
     * Identity Protection GraphQL API. Allows to retrieve entities, timeline activities, identity-based incidents and security assessment. Allows to perform actions on entities and identity-based incidents.
     */
    async apiPreemptProxyPostGraphqlRaw(requestParameters: ApiPreemptProxyPostGraphqlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError("authorization", "Required parameter requestParameters.authorization was null or undefined when calling apiPreemptProxyPostGraphql.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters["Authorization"] = String(requestParameters.authorization);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["identity-graphql:write"]);
        }

        const response = await this.request(
            {
                path: `/identity-protection/combined/graphql/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Identity Protection GraphQL API. Allows to retrieve entities, timeline activities, identity-based incidents and security assessment. Allows to perform actions on entities and identity-based incidents.
     */
    async apiPreemptProxyPostGraphql(authorization: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiPreemptProxyPostGraphqlRaw({ authorization: authorization }, initOverrides);
    }
}
