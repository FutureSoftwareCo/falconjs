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
import type { FwmgrFirewallAddressRange } from "./FwmgrFirewallAddressRange";
import { FwmgrFirewallAddressRangeFromJSON, FwmgrFirewallAddressRangeFromJSONTyped, FwmgrFirewallAddressRangeToJSON } from "./FwmgrFirewallAddressRange";
import type { FwmgrFirewallFieldValue } from "./FwmgrFirewallFieldValue";
import { FwmgrFirewallFieldValueFromJSON, FwmgrFirewallFieldValueFromJSONTyped, FwmgrFirewallFieldValueToJSON } from "./FwmgrFirewallFieldValue";
import type { FwmgrFirewallICMP } from "./FwmgrFirewallICMP";
import { FwmgrFirewallICMPFromJSON, FwmgrFirewallICMPFromJSONTyped, FwmgrFirewallICMPToJSON } from "./FwmgrFirewallICMP";
import type { FwmgrFirewallMonitoring } from "./FwmgrFirewallMonitoring";
import { FwmgrFirewallMonitoringFromJSON, FwmgrFirewallMonitoringFromJSONTyped, FwmgrFirewallMonitoringToJSON } from "./FwmgrFirewallMonitoring";
import type { FwmgrFirewallPortRange } from "./FwmgrFirewallPortRange";
import { FwmgrFirewallPortRangeFromJSON, FwmgrFirewallPortRangeFromJSONTyped, FwmgrFirewallPortRangeToJSON } from "./FwmgrFirewallPortRange";
import type { FwmgrFirewallRuleGroupSummaryV1 } from "./FwmgrFirewallRuleGroupSummaryV1";
import { FwmgrFirewallRuleGroupSummaryV1FromJSON, FwmgrFirewallRuleGroupSummaryV1FromJSONTyped, FwmgrFirewallRuleGroupSummaryV1ToJSON } from "./FwmgrFirewallRuleGroupSummaryV1";

/**
 *
 * @export
 * @interface FwmgrFirewallRuleV1
 */
export interface FwmgrFirewallRuleV1 {
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallRuleV1
     */
    action: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallRuleV1
     */
    addressFamily: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallRuleV1
     */
    createdBy: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallRuleV1
     */
    createdOn: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallRuleV1
     */
    customerId?: string;
    /**
     *
     * @type {boolean}
     * @memberof FwmgrFirewallRuleV1
     */
    deleted: boolean;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallRuleV1
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallRuleV1
     */
    direction: string;
    /**
     *
     * @type {boolean}
     * @memberof FwmgrFirewallRuleV1
     */
    enabled: boolean;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallRuleV1
     */
    family: string;
    /**
     *
     * @type {Array<FwmgrFirewallFieldValue>}
     * @memberof FwmgrFirewallRuleV1
     */
    fields: Array<FwmgrFirewallFieldValue>;
    /**
     *
     * @type {FwmgrFirewallICMP}
     * @memberof FwmgrFirewallRuleV1
     */
    icmp: FwmgrFirewallICMP;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallRuleV1
     */
    id: string;
    /**
     *
     * @type {Array<FwmgrFirewallAddressRange>}
     * @memberof FwmgrFirewallRuleV1
     */
    localAddress: Array<FwmgrFirewallAddressRange>;
    /**
     *
     * @type {Array<FwmgrFirewallPortRange>}
     * @memberof FwmgrFirewallRuleV1
     */
    localPort: Array<FwmgrFirewallPortRange>;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallRuleV1
     */
    modifiedBy?: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallRuleV1
     */
    modifiedOn?: string;
    /**
     *
     * @type {FwmgrFirewallMonitoring}
     * @memberof FwmgrFirewallRuleV1
     */
    monitor: FwmgrFirewallMonitoring;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallRuleV1
     */
    name: string;
    /**
     *
     * @type {Array<string>}
     * @memberof FwmgrFirewallRuleV1
     */
    platformIds: Array<string>;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallRuleV1
     */
    protocol: string;
    /**
     *
     * @type {Array<FwmgrFirewallAddressRange>}
     * @memberof FwmgrFirewallRuleV1
     */
    remoteAddress: Array<FwmgrFirewallAddressRange>;
    /**
     *
     * @type {Array<FwmgrFirewallPortRange>}
     * @memberof FwmgrFirewallRuleV1
     */
    remotePort: Array<FwmgrFirewallPortRange>;
    /**
     *
     * @type {FwmgrFirewallRuleGroupSummaryV1}
     * @memberof FwmgrFirewallRuleV1
     */
    ruleGroup: FwmgrFirewallRuleGroupSummaryV1;
    /**
     *
     * @type {number}
     * @memberof FwmgrFirewallRuleV1
     */
    version: number;
}

/**
 * Check if a given object implements the FwmgrFirewallRuleV1 interface.
 */
export function instanceOfFwmgrFirewallRuleV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "addressFamily" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdOn" in value;
    isInstance = isInstance && "deleted" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "enabled" in value;
    isInstance = isInstance && "family" in value;
    isInstance = isInstance && "fields" in value;
    isInstance = isInstance && "icmp" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "localAddress" in value;
    isInstance = isInstance && "localPort" in value;
    isInstance = isInstance && "monitor" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "platformIds" in value;
    isInstance = isInstance && "protocol" in value;
    isInstance = isInstance && "remoteAddress" in value;
    isInstance = isInstance && "remotePort" in value;
    isInstance = isInstance && "ruleGroup" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function FwmgrFirewallRuleV1FromJSON(json: any): FwmgrFirewallRuleV1 {
    return FwmgrFirewallRuleV1FromJSONTyped(json, false);
}

export function FwmgrFirewallRuleV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrFirewallRuleV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        action: json["action"],
        addressFamily: json["address_family"],
        createdBy: json["created_by"],
        createdOn: json["created_on"],
        customerId: !exists(json, "customer_id") ? undefined : json["customer_id"],
        deleted: json["deleted"],
        description: json["description"],
        direction: json["direction"],
        enabled: json["enabled"],
        family: json["family"],
        fields: (json["fields"] as Array<any>).map(FwmgrFirewallFieldValueFromJSON),
        icmp: FwmgrFirewallICMPFromJSON(json["icmp"]),
        id: json["id"],
        localAddress: (json["local_address"] as Array<any>).map(FwmgrFirewallAddressRangeFromJSON),
        localPort: (json["local_port"] as Array<any>).map(FwmgrFirewallPortRangeFromJSON),
        modifiedBy: !exists(json, "modified_by") ? undefined : json["modified_by"],
        modifiedOn: !exists(json, "modified_on") ? undefined : json["modified_on"],
        monitor: FwmgrFirewallMonitoringFromJSON(json["monitor"]),
        name: json["name"],
        platformIds: json["platform_ids"],
        protocol: json["protocol"],
        remoteAddress: (json["remote_address"] as Array<any>).map(FwmgrFirewallAddressRangeFromJSON),
        remotePort: (json["remote_port"] as Array<any>).map(FwmgrFirewallPortRangeFromJSON),
        ruleGroup: FwmgrFirewallRuleGroupSummaryV1FromJSON(json["rule_group"]),
        version: json["version"],
    };
}

export function FwmgrFirewallRuleV1ToJSON(value?: FwmgrFirewallRuleV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        action: value.action,
        address_family: value.addressFamily,
        created_by: value.createdBy,
        created_on: value.createdOn,
        customer_id: value.customerId,
        deleted: value.deleted,
        description: value.description,
        direction: value.direction,
        enabled: value.enabled,
        family: value.family,
        fields: (value.fields as Array<any>).map(FwmgrFirewallFieldValueToJSON),
        icmp: FwmgrFirewallICMPToJSON(value.icmp),
        id: value.id,
        local_address: (value.localAddress as Array<any>).map(FwmgrFirewallAddressRangeToJSON),
        local_port: (value.localPort as Array<any>).map(FwmgrFirewallPortRangeToJSON),
        modified_by: value.modifiedBy,
        modified_on: value.modifiedOn,
        monitor: FwmgrFirewallMonitoringToJSON(value.monitor),
        name: value.name,
        platform_ids: value.platformIds,
        protocol: value.protocol,
        remote_address: (value.remoteAddress as Array<any>).map(FwmgrFirewallAddressRangeToJSON),
        remote_port: (value.remotePort as Array<any>).map(FwmgrFirewallPortRangeToJSON),
        rule_group: FwmgrFirewallRuleGroupSummaryV1ToJSON(value.ruleGroup),
        version: value.version,
    };
}
