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
import type { FalconxMalqueryErrorV1 } from "./FalconxMalqueryErrorV1";
import { FalconxMalqueryErrorV1FromJSON, FalconxMalqueryErrorV1FromJSONTyped, FalconxMalqueryErrorV1ToJSON } from "./FalconxMalqueryErrorV1";
import type { FalconxMalqueryResource } from "./FalconxMalqueryResource";
import { FalconxMalqueryResourceFromJSON, FalconxMalqueryResourceFromJSONTyped, FalconxMalqueryResourceToJSON } from "./FalconxMalqueryResource";

/**
 *
 * @export
 * @interface FalconxMalqueryReportV1
 */
export interface FalconxMalqueryReportV1 {
    /**
     *
     * @type {Array<FalconxMalqueryErrorV1>}
     * @memberof FalconxMalqueryReportV1
     */
    errors?: Array<FalconxMalqueryErrorV1>;
    /**
     *
     * @type {string}
     * @memberof FalconxMalqueryReportV1
     */
    input?: string;
    /**
     *
     * @type {Array<FalconxMalqueryResource>}
     * @memberof FalconxMalqueryReportV1
     */
    resources?: Array<FalconxMalqueryResource>;
    /**
     *
     * @type {string}
     * @memberof FalconxMalqueryReportV1
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxMalqueryReportV1
     */
    verdict?: string;
}

/**
 * Check if a given object implements the FalconxMalqueryReportV1 interface.
 */
export function instanceOfFalconxMalqueryReportV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FalconxMalqueryReportV1FromJSON(json: any): FalconxMalqueryReportV1 {
    return FalconxMalqueryReportV1FromJSONTyped(json, false);
}

export function FalconxMalqueryReportV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxMalqueryReportV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        errors: !exists(json, "errors") ? undefined : (json["errors"] as Array<any>).map(FalconxMalqueryErrorV1FromJSON),
        input: !exists(json, "input") ? undefined : json["input"],
        resources: !exists(json, "resources") ? undefined : (json["resources"] as Array<any>).map(FalconxMalqueryResourceFromJSON),
        type: !exists(json, "type") ? undefined : json["type"],
        verdict: !exists(json, "verdict") ? undefined : json["verdict"],
    };
}

export function FalconxMalqueryReportV1ToJSON(value?: FalconxMalqueryReportV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        errors: value.errors === undefined ? undefined : (value.errors as Array<any>).map(FalconxMalqueryErrorV1ToJSON),
        input: value.input,
        resources: value.resources === undefined ? undefined : (value.resources as Array<any>).map(FalconxMalqueryResourceToJSON),
        type: value.type,
        verdict: value.verdict,
    };
}
