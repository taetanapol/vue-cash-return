<template>
    <p v-if="loading">
        Still loading..
    </p>
    <form 
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
        v-on:submit.prevent 
        @submit="login()"    
    >
        <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
            Username
        </label>
        <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
            id="username" 
            type="text" 
            placeholder="Username"
            v-model="admin.username"
            required
        >
        </div>
        <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
            Password
        </label>
        <input 
            class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
            id="password" 
            type="password" 
            placeholder="******************"
            v-model="admin.password"
            required
        >
        <p class="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
        <button 
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
        >
            Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Forgot Password?
        </a>
        </div>
    </form>
</template>

<script>
    import { 
        loginAdmin, 
        createAdmin, 
    } from "../services/Admin";

    export default {

        data() {
            return {
                admin: [],
                loading: false,
            };
        },
        methods: {
            login() {
                // console.log(this.admin  )
                // return false
                loginAdmin(this.admin)
                    .then((result) => {
                        console.log(result);
                        console.log('result');
                        // this.admin = result.user;
                        // console.log(this.admin);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        },
        mounted() {
            this.loading = true;
        }

    }

</script>