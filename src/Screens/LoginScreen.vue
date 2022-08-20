<template>
    <div>
        <p>Login Screen</p>
        <Button @click="login">Login</Button>
    </div>
</template>

<script>
import firebaseApp from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = firebaseApp.auth()
auth.languageCode = 'it';

export default {
    name: 'LoginScreen',
    methods: {
        login() {
            signInWithPopup(auth, provider)
            .then(() => {
                this.$router.push('/');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                
            });
        },
    }
}
</script>

<style>

</style>