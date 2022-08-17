const DEFAULT_ROOT = "../decisions/Primary/";

declare var DecisionsRestConfig: {
  cors: boolean;
  restRoot: string;
  jwt: boolean;
};

/**
 * Config object. Depends on either a `DecisionsRestConfig` variable defined on the
 * global namespace, or `rest-config.json` at the same path as the application.
 */
export const ApiConfig = {
  cors: true,
  getFetchMode(): RequestMode {
    return this.cors ? "cors" : "same-origin";
  },
  isLoaded: false,
  jwt: false,
  loadConfig() {
    // check for it on the global namespace:
    if (!!DecisionsRestConfig) {
      this.cors = DecisionsRestConfig.cors;
      this.restRoot = DecisionsRestConfig.restRoot;
      this.jwt = DecisionsRestConfig.jwt;
      return;
    }
    // if it wasn't there, try to load it:
    fetch(`./rest-config.json`)
      .then(value =>
        value
          .json()
          .then(json => {
            this.restRoot = json.restRoot;
            this.cors = json.cors;
            this.isLoaded = true;
          })
          .catch(logRootConfigLoadError)
      )
      .catch(logRootConfigLoadError);
  },
  restRoot: DEFAULT_ROOT,
};

function logRootConfigLoadError(reason: any) {
  // tslint:disable-next-line:no-console
  console.error("failed to load rest-root", reason);
}
