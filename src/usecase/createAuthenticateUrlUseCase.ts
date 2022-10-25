import {Url, APIScope} from "../domain/authorize"

class CreateAuthenticateUrlUseCase {
    private UrlRepository: IUrlRepository;
    constructor(urlRepository: IUrlRepository) {
        this.UrlRepository = urlRepository;
    }

    public createAuthenticateUrl(scopes: Array<APIScope>): Url {
        const authenticateUrl = new Url(scopes)
        
        return authenticateUrl;
    }


}