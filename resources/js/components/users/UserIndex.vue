<template>
    <div class="py-5">
        <div class="row py-3">
            <div class="col">
                <UserAdd @article-added="refresh"></UserAdd>
            </div>
        </div>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users.data" :key="user.id">
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.name }}</td>
                <td>
                    <button class="btn btn-outline-info">Modifier</button>&nbsp;
                    <button class="btn btn-outline-danger">Supprimer</button>
                </td>
            </tr>
            <div>
                <pagination :data="users" @pagination-change-page="getResults">
                    <span slot="prev-nav">&lt;</span>
                    <span slot="next-nav">&gt;</span>
                </pagination>
            </div>
            </tbody>
        </table>
        <div class="vld-parent">
            <loading :active.sync="isLoading"
                     :can-cancel="loadingCancel"
                     color="green"
                     :is-full-page="fullPage"></loading>
        </div>
    </div>
</template>

<script>

    import UserAdd from "./UserAdd";
    export default {
        name: "UserIndex",
        components: {UserAdd},
        data() {
            return {
                users: {},
                isLoading: true,
                loadingCancel: false,
                fullPage: true
            }
        },
        mounted() {
            this.getResults();
        },
        methods: {
            getResults(page = 1) {
                this.isLoading = true;
                axios.get('/articles?page=' + page)
                    .then(response => {
                        this.articles = response.data;
                        this.isLoading = false;
                    })
                .catch(error => {
                    this.isLoading = false
                    alert("Erreur articles index")
                })
            },
            refresh(article) {
                this.getResults();
            },

        }
    }
</script>
