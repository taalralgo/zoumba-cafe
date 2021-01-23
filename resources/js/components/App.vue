<template>
    <div>
        <NavBar></NavBar>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import NavBar from "./NavBar";

    export default {
        components: {NavBar},
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
