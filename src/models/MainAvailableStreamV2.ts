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
import type { MainSessionToken } from "./MainSessionToken";
import { MainSessionTokenFromJSON, MainSessionTokenFromJSONTyped, MainSessionTokenToJSON } from "./MainSessionToken";

/**
 *
 * @export
 * @interface MainAvailableStreamV2
 */
export interface MainAvailableStreamV2 {
    /**
     *
     * @type {string}
     * @memberof MainAvailableStreamV2
     */
    dataFeedURL: string;
    /**
     *
     * @type {number}
     * @memberof MainAvailableStreamV2
     */
    refreshActiveSessionInterval: number;
    /**
     *
     * @type {string}
     * @memberof MainAvailableStreamV2
     */
    refreshActiveSessionURL: string;
    /**
     *
     * @type {MainSessionToken}
     * @memberof MainAvailableStreamV2
     */
    sessionToken: MainSessionToken;
}

/**
 * Check if a given object implements the MainAvailableStreamV2 interface.
 */
export function instanceOfMainAvailableStreamV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "dataFeedURL" in value;
    isInstance = isInstance && "refreshActiveSessionInterval" in value;
    isInstance = isInstance && "refreshActiveSessionURL" in value;
    isInstance = isInstance && "sessionToken" in value;

    return isInstance;
}

export function MainAvailableStreamV2FromJSON(json: any): MainAvailableStreamV2 {
    return MainAvailableStreamV2FromJSONTyped(json, false);
}

export function MainAvailableStreamV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): MainAvailableStreamV2 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        dataFeedURL: json["dataFeedURL"],
        refreshActiveSessionInterval: json["refreshActiveSessionInterval"],
        refreshActiveSessionURL: json["refreshActiveSessionURL"],
        sessionToken: MainSessionTokenFromJSON(json["sessionToken"]),
    };
}

export function MainAvailableStreamV2ToJSON(value?: MainAvailableStreamV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        dataFeedURL: value.dataFeedURL,
        refreshActiveSessionInterval: value.refreshActiveSessionInterval,
        refreshActiveSessionURL: value.refreshActiveSessionURL,
        sessionToken: MainSessionTokenToJSON(value.sessionToken),
    };
}
