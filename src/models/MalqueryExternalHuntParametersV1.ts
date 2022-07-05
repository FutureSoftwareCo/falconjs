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
import type { MalqueryExternalHuntOptions } from "./MalqueryExternalHuntOptions";
import { MalqueryExternalHuntOptionsFromJSON, MalqueryExternalHuntOptionsFromJSONTyped, MalqueryExternalHuntOptionsToJSON } from "./MalqueryExternalHuntOptions";

/**
 *
 * @export
 * @interface MalqueryExternalHuntParametersV1
 */
export interface MalqueryExternalHuntParametersV1 {
    /**
     *
     * @type {MalqueryExternalHuntOptions}
     * @memberof MalqueryExternalHuntParametersV1
     */
    options?: MalqueryExternalHuntOptions;
    /**
     * A YARA rule that defines your search
     * @type {string}
     * @memberof MalqueryExternalHuntParametersV1
     */
    yaraRule: string;
}

/**
 * Check if a given object implements the MalqueryExternalHuntParametersV1 interface.
 */
export function instanceOfMalqueryExternalHuntParametersV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "yaraRule" in value;

    return isInstance;
}

export function MalqueryExternalHuntParametersV1FromJSON(json: any): MalqueryExternalHuntParametersV1 {
    return MalqueryExternalHuntParametersV1FromJSONTyped(json, false);
}

export function MalqueryExternalHuntParametersV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): MalqueryExternalHuntParametersV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        options: !exists(json, "options") ? undefined : MalqueryExternalHuntOptionsFromJSON(json["options"]),
        yaraRule: json["yara_rule"],
    };
}

export function MalqueryExternalHuntParametersV1ToJSON(value?: MalqueryExternalHuntParametersV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        options: MalqueryExternalHuntOptionsToJSON(value.options),
        yara_rule: value.yaraRule,
    };
}
