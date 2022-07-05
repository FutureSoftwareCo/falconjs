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
import type { MessagesAuthor } from "./MessagesAuthor";
import { MessagesAuthorFromJSON, MessagesAuthorFromJSONTyped, MessagesAuthorToJSON } from "./MessagesAuthor";

/**
 *
 * @export
 * @interface MessagesActivity
 */
export interface MessagesActivity {
    /**
     *
     * @type {string}
     * @memberof MessagesActivity
     */
    body: string;
    /**
     *
     * @type {string}
     * @memberof MessagesActivity
     */
    caseId: string;
    /**
     *
     * @type {string}
     * @memberof MessagesActivity
     */
    cid: string;
    /**
     *
     * @type {MessagesAuthor}
     * @memberof MessagesActivity
     */
    createdBy: MessagesAuthor;
    /**
     *
     * @type {string}
     * @memberof MessagesActivity
     */
    createdTime: string;
    /**
     *
     * @type {string}
     * @memberof MessagesActivity
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof MessagesActivity
     */
    lastModifiedTime?: string;
    /**
     *
     * @type {string}
     * @memberof MessagesActivity
     */
    modifiedBy?: string;
    /**
     *
     * @type {string}
     * @memberof MessagesActivity
     */
    type: string;
}

/**
 * Check if a given object implements the MessagesActivity interface.
 */
export function instanceOfMessagesActivity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "body" in value;
    isInstance = isInstance && "caseId" in value;
    isInstance = isInstance && "cid" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdTime" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function MessagesActivityFromJSON(json: any): MessagesActivity {
    return MessagesActivityFromJSONTyped(json, false);
}

export function MessagesActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagesActivity {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        body: json["body"],
        caseId: json["case_id"],
        cid: json["cid"],
        createdBy: MessagesAuthorFromJSON(json["created_by"]),
        createdTime: json["created_time"],
        id: json["id"],
        lastModifiedTime: !exists(json, "last_modified_time") ? undefined : json["last_modified_time"],
        modifiedBy: !exists(json, "modified_by") ? undefined : json["modified_by"],
        type: json["type"],
    };
}

export function MessagesActivityToJSON(value?: MessagesActivity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        body: value.body,
        case_id: value.caseId,
        cid: value.cid,
        created_by: MessagesAuthorToJSON(value.createdBy),
        created_time: value.createdTime,
        id: value.id,
        last_modified_time: value.lastModifiedTime,
        modified_by: value.modifiedBy,
        type: value.type,
    };
}
