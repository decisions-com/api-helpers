# api-helpers
JavaScript toolkit for REST, etc. for clients interacting with a Decisions back-end. Its only goal is to minimize boilerplate for these clients by DRYing up common logic into helper functions.

## Helper Functions
This is essentially a collection of helper functions, all of which are opt-in.

1. ["ApiConfig"](docs/modules/_apiconfig_.md) contains some configuration that other helper functions depend on. This is essentially a singleton config object.
1. ["ApiHelpers"](docs/modules/_apihelpers_.md) contains commands and helpers related to managing a decisions session. Other helper funcitions also depend on this state. 
1. ["AuthApi"](docs/modules/_authapi_.md) contains helper functions to simplify and DRY up logic related to forming URLs for various types of decisions end-points,
as well as some convenience methods for retrieving data via `fetch`.

## Road Map
1. Unit tests
1. Publish to npm & yarnpkg.
1. Add support for Decisions Webhooks


