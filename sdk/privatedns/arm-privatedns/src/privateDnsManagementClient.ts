/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { PrivateDnsManagementClientContext } from "./privateDnsManagementClientContext";


class PrivateDnsManagementClient extends PrivateDnsManagementClientContext {
  // Operation groups
  privateZones: operations.PrivateZones;
  virtualNetworkLinks: operations.VirtualNetworkLinks;
  recordSets: operations.RecordSets;

  /**
   * Initializes a new instance of the PrivateDnsManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.PrivateDnsManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.privateZones = new operations.PrivateZones(this);
    this.virtualNetworkLinks = new operations.VirtualNetworkLinks(this);
    this.recordSets = new operations.RecordSets(this);
  }
}

// Operation Specifications

export {
  PrivateDnsManagementClient,
  PrivateDnsManagementClientContext,
  Models as PrivateDnsManagementModels,
  Mappers as PrivateDnsManagementMappers
};
export * from "./operations";
