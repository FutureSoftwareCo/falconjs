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
import type { DeviceapiGroupResponseV1 } from "./DeviceapiGroupResponseV1";
import { DeviceapiGroupResponseV1FromJSON, DeviceapiGroupResponseV1FromJSONTyped, DeviceapiGroupResponseV1ToJSON } from "./DeviceapiGroupResponseV1";
import type { MsaAPIError } from "./MsaAPIError";
import { MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";
import type { MsaMetaInfo } from "./MsaMetaInfo";
import { MsaMetaInfoFromJSON, MsaMetaInfoFromJSONTyped, MsaMetaInfoToJSON } from "./MsaMetaInfo";

/**
 *
 * @export
 * @interface DeviceapiGroupsResponseV1
 */
export interface DeviceapiGroupsResponseV1 {
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof DeviceapiGroupsResponseV1
     */
    errors: Array<MsaAPIError>;
    /**
     *
     * @type {MsaMetaInfo}
     * @memberof DeviceapiGroupsResponseV1
     */
    meta: MsaMetaInfo;
    /**
     *
     * @type {Array<DeviceapiGroupResponseV1>}
     * @memberof DeviceapiGroupsResponseV1
     */
    resources: Array<DeviceapiGroupResponseV1>;
}

/**
 * Check if a given object implements the DeviceapiGroupsResponseV1 interface.
 */
export function instanceOfDeviceapiGroupsResponseV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errors" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "resources" in value;

    return isInstance;
}

export function DeviceapiGroupsResponseV1FromJSON(json: any): DeviceapiGroupsResponseV1 {
    return DeviceapiGroupsResponseV1FromJSONTyped(json, false);
}

export function DeviceapiGroupsResponseV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceapiGroupsResponseV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        errors: (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: MsaMetaInfoFromJSON(json["meta"]),
        resources: (json["resources"] as Array<any>).map(DeviceapiGroupResponseV1FromJSON),
    };
}

export function DeviceapiGroupsResponseV1ToJSON(value?: DeviceapiGroupsResponseV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        errors: (value.errors as Array<any>).map(MsaAPIErrorToJSON),
        meta: MsaMetaInfoToJSON(value.meta),
        resources: (value.resources as Array<any>).map(DeviceapiGroupResponseV1ToJSON),
    };
}
