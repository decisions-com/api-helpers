[@decisions/api-helpers](../README.md) > ["ApiHelpers"](../modules/_apihelpers_.md)

# External module: "ApiHelpers"

## Index

### Type aliases

* [Reject](_apihelpers_.md#reject)
* [ResolvingCallback](_apihelpers_.md#resolvingcallback)

### Functions

* [encodeWithNullForEmpty](_apihelpers_.md#encodewithnullforempty)
* [getFlowAliasUrl](_apihelpers_.md#getflowaliasurl)
* [getFlowIdUrl](_apihelpers_.md#getflowidurl)
* [getReportUrl](_apihelpers_.md#getreporturl)
* [getResponseJson](_apihelpers_.md#getresponsejson)
* [getRuleIdUrl](_apihelpers_.md#getruleidurl)
* [getServiceEndPointUrl](_apihelpers_.md#getserviceendpointurl)
* [getUrlWithSessionId](_apihelpers_.md#geturlwithsessionid)
* [getWrappedFetch](_apihelpers_.md#getwrappedfetch)
* [getWrappedPostFetch](_apihelpers_.md#getwrappedpostfetch)
* [isJsonContentType](_apihelpers_.md#isjsoncontenttype)
* [makePostFetchInit](_apihelpers_.md#makepostfetchinit)

---

## Type aliases

<a id="reject"></a>

###  Reject

**Ƭ Reject**: *`function`*

*Defined in [ApiHelpers.ts:52](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L52)*

#### Type declaration
▸(reason?: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` reason | `any` |

**Returns:** `void`

___
<a id="resolvingcallback"></a>

###  ResolvingCallback

**Ƭ ResolvingCallback**: *`function`*

*Defined in [ApiHelpers.ts:50](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L50)*

#### Type declaration
▸(json: *`T`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `T` |

**Returns:** `void`

___

## Functions

<a id="encodewithnullforempty"></a>

###  encodeWithNullForEmpty

▸ **encodeWithNullForEmpty**(param: *`string`*): `string`

*Defined in [ApiHelpers.ts:85](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L85)*

Convenience function to have 'null' query params for empty strings.

Some end-points don't handle empty-string query params. Most UIs don't handle 'null' input values.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| param | `string` |  to encode |

**Returns:** `string`
encoded part or null.

___
<a id="getflowaliasurl"></a>

###  getFlowAliasUrl

▸ **getFlowAliasUrl**(flowAlias: *`string`*): `string`

*Defined in [ApiHelpers.ts:21](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L21)*

Creates Flow url for a flow reference by "Alias". Assumes this was done to create "pretty" paths and that the provided url is not

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| flowAlias | `string` |  create a flow URL based on alias |

**Returns:** `string`

___
<a id="getflowidurl"></a>

###  getFlowIdUrl

▸ **getFlowIdUrl**(flowId: *`string`*): `string`

*Defined in [ApiHelpers.ts:8](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| flowId | `string` |

**Returns:** `string`

___
<a id="getreporturl"></a>

###  getReportUrl

▸ **getReportUrl**(reportId: *`string`*): `string`

*Defined in [ApiHelpers.ts:4](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L4)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| reportId | `string` |

**Returns:** `string`

___
<a id="getresponsejson"></a>

###  getResponseJson

▸ **getResponseJson**<`T`>(response: *`Response`*, resolvingCallback: *[ResolvingCallback](_apihelpers_.md#resolvingcallback)<`T`>*, reject: *[Reject](_apihelpers_.md#reject)*): `void`

*Defined in [ApiHelpers.ts:64](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L64)*

Handle edge cases where odd behavior from the Decisions (5.x) back-end and the odd behaviors of the TypeScript fetch API collide. Namely, 500s and 403s are still getting passed to the `.then` block of the fetch promise, and the response from the decisions back-end for those error codes is a non-JSON string.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| response | `Response` |
| resolvingCallback | [ResolvingCallback](_apihelpers_.md#resolvingcallback)<`T`> |  callback to parse data out and resolve the promise as the use-case demands |
| reject | [Reject](_apihelpers_.md#reject) |  promise reject callback to reject due to API errors. |

**Returns:** `void`

___
<a id="getruleidurl"></a>

###  getRuleIdUrl

▸ **getRuleIdUrl**(ruleId: *`string`*): `string`

*Defined in [ApiHelpers.ts:12](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ruleId | `string` |

**Returns:** `string`

___
<a id="getserviceendpointurl"></a>

###  getServiceEndPointUrl

▸ **getServiceEndPointUrl**(path: *`string`*): `string`

*Defined in [ApiHelpers.ts:26](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `string`

___
<a id="geturlwithsessionid"></a>

###  getUrlWithSessionId

▸ **getUrlWithSessionId**(type: *"ReportId" \| "FlowId" \| "FlowAlias" \| "RuleId"*, id: *`string`*, output?: *"Json" \| "RawJson"*): `string`

*Defined in [ApiHelpers.ts:39](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L39)*

Get a formatted URL, including current session ID

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| type | "ReportId" \| "FlowId" \| "FlowAlias" \| "RuleId" | - |  "ReportId" \| "FlowId" \| "FlowAlias" depending on what's being fetched |
| id | `string` | - |  id, path, or alias, depending on the integration type. |
| `Default value` output | "Json" \| "RawJson" | &quot;RawJson&quot; |

**Returns:** `string`
url with sessionId query parameter appended.

___
<a id="getwrappedfetch"></a>

###  getWrappedFetch

▸ **getWrappedFetch**<`T`>(url: *`string`*, propertyName?: *`undefined` \| `string`*): `Promise`<`T`>

*Defined in [ApiHelpers.ts:96](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L96)*

Convenience GET fetch wrapper, which covers some idiosyncracies in the Decisions API, related to return types, and common result wrappers.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  to fetch |
| `Optional` propertyName | `undefined` \| `string` |  to pull data from, if provided |

**Returns:** `Promise`<`T`>
promise resolving expected type

___
<a id="getwrappedpostfetch"></a>

###  getWrappedPostFetch

▸ **getWrappedPostFetch**<`T`>(url: *`string`*, body: *`object`*, propertyName?: *`undefined` \| `string`*): `Promise`<`T`>

*Defined in [ApiHelpers.ts:123](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L123)*

Convenience POST fetch wrapper, which covers some idiosyncracies in the Decisions API, related to return types, and common result wrappers.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  to fetch |
| body | `object` |
| `Optional` propertyName | `undefined` \| `string` |  to pull data from, if provided |

**Returns:** `Promise`<`T`>
promise resolving expected type

___
<a id="isjsoncontenttype"></a>

###  isJsonContentType

▸ **isJsonContentType**(contentType: *`string` \| `null`*): `boolean`

*Defined in [ApiHelpers.ts:152](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L152)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| contentType | `string` \| `null` |

**Returns:** `boolean`

___
<a id="makepostfetchinit"></a>

###  makePostFetchInit

▸ **makePostFetchInit**(body: *`object`*): `RequestInit`

*Defined in [ApiHelpers.ts:144](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiHelpers.ts#L144)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `object` |

**Returns:** `RequestInit`

___

