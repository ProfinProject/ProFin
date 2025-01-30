export class LocalStorageUtils {

    public getUser() {
        // return JSON.parse(localStorage.getItem('profin.user'));
    }

    public saveLocalDataUser(response: any) {
        this.saveUserToken(response.accessToken);
        this.saveUser(response.userToken);
    }

    public cleanLocalDataUser() {
        localStorage.removeItem('profin.token');
        localStorage.removeItem('profin.user');
    }

    public getUserToken(): string {
        // return localStorage.getItem('profin.token');
        return "";
    }

    public saveUserToken(token: string) {
        localStorage.setItem('profin.token', token);
    }

    public saveUser(user: string) {
        localStorage.setItem('profin.user', JSON.stringify(user));
    }

}