<template>
    <div>
        <p>Home Screen</p>
        <p>Logged In</p>
        <button @click="signOut">Sign Out</button>
    </div>
</template>

<script>
import firebaseApp from '../firebase'
import { signOut } from "firebase/auth";

const auth = firebaseApp.auth()
auth.languageCode = 'it';

export default {
    name: 'HomeScreen',
    data() {
        return {
            user: null
        }
    },
    created() {
        auth.onAuthStateChanged(user => {
            this.user = user;
        })
    },
    methods: {
        signOut() {
            signOut(auth)
            .then(() => {
                this.user = null;
                this.$router.push('/login');
            }).catch((error) => {
                console.log(error);
            }
            );
        }
    }
}
</script>

<style>

</style>