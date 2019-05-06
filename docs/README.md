
api-helpers
===========

JavaScript toolkit for REST, etc. for clients interacting with a Decisions back-end. Its only goal is to minimize boilerplate for these clients by DRYing up common logic into helper functions.

Helper Functions
----------------

This is essentially a collection of helper functions, all of which are opt-in.

1.  ["ApiConfig"](docs/modules/_apiconfig_.md) contains some configuration that other helper functions depend on. This is essentially a singleton config object.
2.  ["ApiHelpers"](docs/modules/_apihelpers_.md) contains commands and helpers related to managing a decisions session. Other helper funcitions also depend on this state.
3.  ["AuthApi"](docs/modules/_authapi_.md) contains helper functions to simplify and DRY up logic related to forming URLs for various types of decisions end-points, as well as some convenience methods for retrieving data via `fetch`.

### Usage

\_If you are inside a Decisions web host, the helper functions should load auth IDs, etc. for you. \_

Otherwise:

#### Configuration

Tell the API Where to find your Decisions instance

```html
<script>
  // create global config variable:
  var DecisionsRestConfig = {
    cors: false,
    restRoot: "/decisions/Primary/"
  };
</script>
```

Alternately, you can put a `rest-config.json` at the web host root, but then your UI has to handle the fact that it's loaded asynchronously.

In your app code, tell that config to load:

```javascript
import { ApiConfig } from "@decisions/api-helpers/ApiConfig";
// ...
ApiConfig.loadConfig();
```

#### Create a Session

(This is only necessary outside a Decisions Web Host.)

```javascript
AuthApi.login(this.state.username, this.state.password)
  .then(() => { /* Handle successful login */}))
  .catch(() => { /* Handle successful */ });

```

#### Use Helper Functions

Use helper functions to generate URLs

```javascript
import {
  getFlowIdUrl,
  getWrappedPostFetch
} from "@decisions/api-helpers/ApiHelpers";

//...

/**
 * builds the URL with little boilerplate:
 */
const url = getFlowIdUrl("123-flow-4567-uuid-8901");
const body = {/* ... */};

/**
 * Make `fetch` API call,
 * with a chunk of `Promise` boilerplate tucked away. 
 * 
 * @returns a promise  "resultPropIWant" 
 */ 
return getWrappedPostFetch(url, body, "resultPropIWant");

```

Road Map
--------

1.  Publish to npm & yarnpkg.
2.  Unit tests
3.  Add support for Decisions Webhooks
4.  Abstract which API is making the requests
    *   The `fetch` methods are fairly standard, and opt in. Good start.
    *   Adding modules for other popular tools would be great.

## Index

### External modules

* ["ApiConfig"](modules/_apiconfig_.md)
* ["ApiHelpers"](modules/_apihelpers_.md)
* ["AuthApi"](modules/_authapi_.md)

---

