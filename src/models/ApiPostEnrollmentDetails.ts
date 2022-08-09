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
/**
 *
 * @export
 * @interface ApiPostEnrollmentDetails
 */
export interface ApiPostEnrollmentDetails {
    /**
     *
     * @type {Array<string>}
     * @memberof ApiPostEnrollmentDetails
     */
    emailAddresses: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof ApiPostEnrollmentDetails
     */
    expiresAt: Date;
}

/**
 * Check if a given object implements the ApiPostEnrollmentDetails interface.
 */
export function instanceOfApiPostEnrollmentDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "emailAddresses" in value;
    isInstance = isInstance && "expiresAt" in value;

    return isInstance;
}

export function ApiPostEnrollmentDetailsFromJSON(json: any): ApiPostEnrollmentDetails {
    return ApiPostEnrollmentDetailsFromJSONTyped(json, false);
}

export function ApiPostEnrollmentDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiPostEnrollmentDetails {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        emailAddresses: json["email_addresses"],
        expiresAt: new Date(json["expires_at"]),
    };
}

export function ApiPostEnrollmentDetailsToJSON(value?: ApiPostEnrollmentDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        email_addresses: value.emailAddresses,
        expires_at: value.expiresAt.toISOString(),
    };
}