
https://console.cloud.google.com/firestore/rules?project=lab-firebase-mobx

original:

    rules_version = '2';
    service cloud.firestore {
        match /databases/{database}/documents {
            match /{document=**} {
                allow read, write: if false;
            }
        }
    }

now:


    rules_version = '2';
    service cloud.firestore {
        match /databases/{database}/documents {
            match /{document=**} {
                allow read: if signedIn();
                allow create: if signedIn() && request.resource.data.userId == request.auth.uid;
                allow update, delete: if signedIn() && isOwner();
            }
        }
    }
