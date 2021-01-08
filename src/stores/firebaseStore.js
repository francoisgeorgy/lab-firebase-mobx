import {observable, action, makeAutoObservable} from 'mobx';

class FirebaseStore {

    rootStore = null;
    firebase = null;

    constructor(rootStore) {
        makeAutoObservable(this, {
            rootStore: false,
            setFirebase: action
        });
        this.rootStore = rootStore;
    }

    setFirebase = firebase => {
        this.firebase = firebase;
    };

}

export default FirebaseStore;
