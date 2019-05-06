import * as Cookies from "js-cookie";
import { ApiConfig } from "./ApiConfig";

export interface ILoginUserResult {
  DisplayType: number;
  SessionValue: string;
  StudioPortal: boolean;
}

// this is currently added in a set-cookie header, whether login was successful or  not.
const SESSION_ID_COOKIE = "DecisionsSessionID";
const USER_COOKIE = "DecisionsUsername";

// TODO API call to call on load, to ping with a session ID to find out if it's valid?

/**
 * Auth and session related API calls.
 */
export const AuthApi = {
  /**
   * @return the current session ID (stored in a session cookie)
   */
  getSessionId: () => Cookies.get(SESSION_ID_COOKIE),
  /**
   * Current username
   */
  getSessionUserName: () => Cookies.get(USER_COOKIE),
  /**
   * Make REST call to log in.
   * @return promise that resolves the cookie.
   */
  login: (userid: string, password: string) =>
    new Promise<string>((resolve, reject) =>
      fetch(`${ApiConfig.restRoot}REST/AccountService/LoginUser`, {
        body: JSON.stringify({ userid, password, outputType: "JSON" }),
        method: "POST",
        mode: ApiConfig.getFetchMode(),
      })
        .then(async response => {
          if (response.status >= 300) {
            // currently receive 500s for failed logins.
            // clear header-set session ID for simple client-side session checks.
            reject(response.statusText);
          }
          const json = await response.json();
          const id = sessionIdSelector(json.LoginUserResult);
          Cookies.set(SESSION_ID_COOKIE, id);
          // USER_COOKIE will be set by headers, non CORS.
          Cookies.set(USER_COOKIE, userid);
          resolve(id);
        })
        .catch(reason => {
          reject(reason);
        })
    ),

  logout: () => Cookies.remove(SESSION_ID_COOKIE),
};

export const sessionIdSelector = (loginResult: ILoginUserResult) =>
  loginResult.SessionValue;
