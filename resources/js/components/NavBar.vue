<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">Zoumba-Café</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/articles">Articles</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/users">Utilisateurs</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/comptes">Comptes</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>
