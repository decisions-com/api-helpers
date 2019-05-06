[@decisions/api-helpers](../README.md) > ["AuthApi"](../modules/_authapi_.md)

# External module: "AuthApi"

## Index

### Interfaces

* [ILoginUserResult](../interfaces/_authapi_.iloginuserresult.md)

### Variables

* [SESSION_ID_COOKIE](_authapi_.md#session_id_cookie)
* [USER_COOKIE](_authapi_.md#user_cookie)

### Functions

* [sessionIdSelector](_authapi_.md#sessionidselector)

### Object literals

* [AuthApi](_authapi_.md#authapi)

---

## Variables

<a id="session_id_cookie"></a>

### `<Const>` SESSION_ID_COOKIE

**● SESSION_ID_COOKIE**: *"DecisionsSessionID"* = "DecisionsSessionID"

*Defined in [AuthApi.ts:11](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/AuthApi.ts#L11)*

___
<a id="user_cookie"></a>

### `<Const>` USER_COOKIE

**● USER_COOKIE**: *"DecisionsUsername"* = "DecisionsUsername"

*Defined in [AuthApi.ts:12](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/AuthApi.ts#L12)*

___

## Functions

<a id="sessionidselector"></a>

### `<Const>` sessionIdSelector

▸ **sessionIdSelector**(loginResult: *[ILoginUserResult](../interfaces/_authapi_.iloginuserresult.md)*): `string`

*Defined in [AuthApi.ts:60](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/AuthApi.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| loginResult | [ILoginUserResult](../interfaces/_authapi_.iloginuserresult.md) |

**Returns:** `string`

___

## Object literals

<a id="authapi"></a>

### `<Const>` AuthApi

**AuthApi**: *`object`*

*Defined in [AuthApi.ts:19](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/AuthApi.ts#L19)*

Auth and session related API calls.

<a id="authapi.getsessionid"></a>

####  getSessionId

▸ **getSessionId**(): `undefined` \| `string`

*Defined in [AuthApi.ts:23](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/AuthApi.ts#L23)*

**Returns:** `undefined` \| `string`
the current session ID (stored in a session cookie)

___
<a id="authapi.getsessionusername"></a>

####  getSessionUserName

▸ **getSessionUserName**(): `undefined` \| `string`

*Defined in [AuthApi.ts:27](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/AuthApi.ts#L27)*

Current username

**Returns:** `undefined` \| `string`

___
<a id="authapi.login"></a>

####  login

▸ **login**(userid: *`string`*, password: *`string`*): `Promise`<`string`>

*Defined in [AuthApi.ts:32](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/AuthApi.ts#L32)*

Make REST call to log in.

**Parameters:**

| Name | Type |
| ------ | ------ |
| userid | `string` |
| password | `string` |

**Returns:** `Promise`<`string`>
promise that resolves the cookie.

___
<a id="authapi.logout"></a>

####  logout

▸ **logout**(): `void`

*Defined in [AuthApi.ts:57](https://github.com/decisions-com/api-helpers/blob/8fa4504/src/AuthApi.ts#L57)*

**Returns:** `void`

___

___

