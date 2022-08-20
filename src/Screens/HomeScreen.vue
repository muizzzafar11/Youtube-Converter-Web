<template>
    <div>
        <div class="mb-3">
            <h5>Logged In as {{this.user?.displayName}} </h5>
            <div class="text-start row">
                <div class="col">
                   <h5>Email: {{this.user?.email}}</h5>
                </div>
                <button @click="signOut" class="btn btn-primary col-sm-2">Sign Out</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-10">
                <input v-model="link" type="text" class="form-control mt-2" id="inputLink" placeholder="Enter Link">
            </div>
            <button type="submit" class="col-sm-2 btn btn-primary mt-2" @click="sendLink">Download</button>
        </div>
    </div>
</template>

<script>
import firebaseApp from '../firebase'
import { signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = firebaseApp.auth()
auth.languageCode = 'it';
const db = getFirestore(firebaseApp)

export default {
    name: 'HomeScreen',
    data() {
        return {
            user: null,
            firestoreDocRef: null,
            link: ''
        }
    },
    created() {
        auth.onAuthStateChanged(user => {
            this.user = user;
            const userId = user?.uid
            this.firestoreDocRef = user ? doc(db, "MusicPlayer", userId) : null
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
        },
        sendLink() {
            if(this.firestoreDocRef && this.link) {
                try {
                    setDoc(this.firestoreDocRef, {
                        currentLink: this.link
                    });
                    this.link = '';
                    // inform the user that the link has been sent
                    alert('Starting download...');
                } catch (error) {
                    console.error({error});
                }
            } else {
                alert('Something went wrong :(');
            }
        }
    }
}
</script>

<style>

</style>