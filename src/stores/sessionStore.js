import {observable, action, makeAutoObservable} from 'mobx';

class SessionStore {

    rootStore = null;
    authUser = null;

    constructor(rootStore) {
        makeAutoObservable(this, {
            rootStore: false,
            setAuthUser: action
        });
        this.rootStore = rootStore;
    }

    setAuthUser = authUser => {
        this.authUser = authUser;
    };

}

export default SessionStore;
