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
import { MlscannerMetaInfo, MlscannerMetaInfoFromJSON, MlscannerMetaInfoFromJSONTyped, MlscannerMetaInfoToJSON } from "./MlscannerMetaInfo";
import { MlscannerSamplesScanResult, MlscannerSamplesScanResultFromJSON, MlscannerSamplesScanResultFromJSONTyped, MlscannerSamplesScanResultToJSON } from "./MlscannerSamplesScanResult";
import { MsaAPIError, MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";

/**
 *
 * @export
 * @interface MlscannerScanV1Response
 */
export interface MlscannerScanV1Response {
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof MlscannerScanV1Response
     */
    errors: Array<MsaAPIError>;
    /**
     *
     * @type {MlscannerMetaInfo}
     * @memberof MlscannerScanV1Response
     */
    meta: MlscannerMetaInfo;
    /**
     *
     * @type {Array<MlscannerSamplesScanResult>}
     * @memberof MlscannerScanV1Response
     */
    resources: Array<MlscannerSamplesScanResult>;
}

export function MlscannerScanV1ResponseFromJSON(json: any): MlscannerScanV1Response {
    return MlscannerScanV1ResponseFromJSONTyped(json, false);
}

export function MlscannerScanV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MlscannerScanV1Response {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        errors: (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: MlscannerMetaInfoFromJSON(json["meta"]),
        resources: (json["resources"] as Array<any>).map(MlscannerSamplesScanResultFromJSON),
    };
}

export function MlscannerScanV1ResponseToJSON(value?: MlscannerScanV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        errors: (value.errors as Array<any>).map(MsaAPIErrorToJSON),
        meta: MlscannerMetaInfoToJSON(value.meta),
        resources: (value.resources as Array<any>).map(MlscannerSamplesScanResultToJSON),
    };
}