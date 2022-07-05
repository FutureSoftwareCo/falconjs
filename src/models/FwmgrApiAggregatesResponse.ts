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

import { exists, mapValues } from "../runtime";
import type { FwmgrMsaAPIError } from "./FwmgrMsaAPIError";
import { FwmgrMsaAPIErrorFromJSON, FwmgrMsaAPIErrorFromJSONTyped, FwmgrMsaAPIErrorToJSON } from "./FwmgrMsaAPIError";
import type { FwmgrMsaAggregationResult } from "./FwmgrMsaAggregationResult";
import { FwmgrMsaAggregationResultFromJSON, FwmgrMsaAggregationResultFromJSONTyped, FwmgrMsaAggregationResultToJSON } from "./FwmgrMsaAggregationResult";
import type { FwmgrMsaMetaInfo } from "./FwmgrMsaMetaInfo";
import { FwmgrMsaMetaInfoFromJSON, FwmgrMsaMetaInfoFromJSONTyped, FwmgrMsaMetaInfoToJSON } from "./FwmgrMsaMetaInfo";

/**
 *
 * @export
 * @interface FwmgrApiAggregatesResponse
 */
export interface FwmgrApiAggregatesResponse {
    /**
     *
     * @type {Array<FwmgrMsaAPIError>}
     * @memberof FwmgrApiAggregatesResponse
     */
    errors?: Array<FwmgrMsaAPIError>;
    /**
     *
     * @type {FwmgrMsaMetaInfo}
     * @memberof FwmgrApiAggregatesResponse
     */
    meta: FwmgrMsaMetaInfo;
    /**
     *
     * @type {Array<FwmgrMsaAggregationResult>}
     * @memberof FwmgrApiAggregatesResponse
     */
    resources: Array<FwmgrMsaAggregationResult>;
}

/**
 * Check if a given object implements the FwmgrApiAggregatesResponse interface.
 */
export function instanceOfFwmgrApiAggregatesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "resources" in value;

    return isInstance;
}

export function FwmgrApiAggregatesResponseFromJSON(json: any): FwmgrApiAggregatesResponse {
    return FwmgrApiAggregatesResponseFromJSONTyped(json, false);
}

export function FwmgrApiAggregatesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrApiAggregatesResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        errors: !exists(json, "errors") ? undefined : (json["errors"] as Array<any>).map(FwmgrMsaAPIErrorFromJSON),
        meta: FwmgrMsaMetaInfoFromJSON(json["meta"]),
        resources: (json["resources"] as Array<any>).map(FwmgrMsaAggregationResultFromJSON),
    };
}

export function FwmgrApiAggregatesResponseToJSON(value?: FwmgrApiAggregatesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        errors: value.errors === undefined ? undefined : (value.errors as Array<any>).map(FwmgrMsaAPIErrorToJSON),
        meta: FwmgrMsaMetaInfoToJSON(value.meta),
        resources: (value.resources as Array<any>).map(FwmgrMsaAggregationResultToJSON),
    };
}
