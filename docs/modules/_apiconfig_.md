[@decisions/api-helpers](../README.md) > ["ApiConfig"](../modules/_apiconfig_.md)

# External module: "ApiConfig"

## Index

### Variables

* [DEFAULT_ROOT](_apiconfig_.md#default_root)
* [DecisionsRestConfig](_apiconfig_.md#decisionsrestconfig)

### Functions

* [logRootConfigLoadError](_apiconfig_.md#logrootconfigloaderror)

### Object literals

* [ApiConfig](_apiconfig_.md#apiconfig)

---

## Variables

<a id="default_root"></a>

### `<Const>` DEFAULT_ROOT

**● DEFAULT_ROOT**: *"../decisions/Primary/"* = "../decisions/Primary/"

*Defined in [ApiConfig.ts:1](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiConfig.ts#L1)*

___
<a id="decisionsrestconfig"></a>

###  DecisionsRestConfig

**● DecisionsRestConfig**: *`object`*

*Defined in [ApiConfig.ts:3](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiConfig.ts#L3)*

#### Type declaration

 cors: `boolean`

 restRoot: `string`

___

## Functions

<a id="logrootconfigloaderror"></a>

###  logRootConfigLoadError

▸ **logRootConfigLoadError**(reason: *`any`*): `void`

*Defined in [ApiConfig.ts:42](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiConfig.ts#L42)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| reason | `any` |

**Returns:** `void`

___

## Object literals

<a id="apiconfig"></a>

### `<Const>` ApiConfig

**ApiConfig**: *`object`*

*Defined in [ApiConfig.ts:12](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiConfig.ts#L12)*

Config object. Depends on either a `DecisionsRestConfig` variable defined on the global namespace, or `rest-config.json` at the same path as the application.

<a id="apiconfig.cors-1"></a>

####  cors

**● cors**: *`boolean`* = true

*Defined in [ApiConfig.ts:13](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiConfig.ts#L13)*

___
<a id="apiconfig.isloaded"></a>

####  isLoaded

**● isLoaded**: *`boolean`* = false

*Defined in [ApiConfig.ts:17](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiConfig.ts#L17)*

___
<a id="apiconfig.restroot-1"></a>

####  restRoot

**● restRoot**: *`string`* =  DEFAULT_ROOT

*Defined in [ApiConfig.ts:39](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiConfig.ts#L39)*

___
<a id="apiconfig.getfetchmode"></a>

####  getFetchMode

▸ **getFetchMode**(): `RequestMode`

*Defined in [ApiConfig.ts:14](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiConfig.ts#L14)*

**Returns:** `RequestMode`

___
<a id="apiconfig.loadconfig"></a>

####  loadConfig

▸ **loadConfig**(): `void`

*Defined in [ApiConfig.ts:18](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/ApiConfig.ts#L18)*

**Returns:** `void`

___

___

