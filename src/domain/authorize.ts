class AuthorizeParams {
    private _state: string;
    private _responseType: "code"
    private _clientId: string;
    private _redirectUri: string;
    private _scope: Set<APIScope>
    private _codeChallenge: "challenge"
    private _codeChallengeMethod: "S256" | "plain"
}

class AuthCode {
    private _code: string;
    private _state: string;
}

class Token {
    private _accessToken: string;
    private _refreshToken: string;
    private _expiresIn: number;
    private _tokenType: "Bearer"
}

class Url {
    private _url: string;
    private _scope: Set<APIScope>

    constructor(scope: Array<APIScope>) {
        this._scope = new Set(scope)
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get scope(): Set<APIScope> {
        return this._scope;
    }

    set scope(value: Set<APIScope>) {
        this._scope = value;
    }
}

type APIScope = "tweet.read" | "tweet.write" | "tweet.moderate.write" | "users.read" | "follows.read" | "follows.write" | "offline.access" | "space.read" | "mute.read" | "mute.write" | "like.read" | "like.write" | "list.read" | "list.write" | "block.read" | "block.write" | "bookmark.read" | "bookmark.write"

export { AuthorizeParams, AuthCode, Token, Url, APIScope };