import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyDQ5QQQ1KJ_Ds3XS0urd0BSEsRqZmxpt6k",
        authDomain: "vue-test-88bd7.firebaseapp.com",
        databaseURL: "https://vue-test-88bd7.firebaseio.com",
        projectId: "vue-test-88bd7",
        storageBucket: "vue-test-88bd7.appspot.com",
        messagingSenderId: "826149613643",
        appId: "1:826149613643:web:43d0699d75d74dc928ddce"
    })
    .firestore()

    export const postRef = db.collection('posts')