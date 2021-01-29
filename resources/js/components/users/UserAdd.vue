<template>
    <div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#article-add">
            Ajouter un article
        </button>

        <!-- Modal -->
        <div class="modal fade" id="article-add" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <form>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Enregistrement</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" v-model="name">
                            </div>
                            <div class="form-group">
                                <label for="prix">Prix</label>
                                <input type="number" min="5" class="form-control" id="prix" placeholder="Prix" v-model="prix">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" @click="store">Ajouter</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserAdd",
        data() {
            return {
                name: '',
                prix: 5,
            }
        },
        methods: {
            store() {
                var name = this.name;
                var prix = this.prix;
                if (name.length < 2 || prix < 5) {
                    alert("Les données ne sont pas valides.");
                    return false;
                }
                axios.post('/article/create', {name: name, prix: prix})
                    .then(response => {
                        if(response.data.status) {
                            this.name = '';
                            this.prix = 5;
                            this.$emit('article-added', response)
                        }
                        else
                            alert("Erreur de l'enregistrement d'article")
                    })
                    .catch(error => alert("Erreur de l'enregistrement d'article"))
            }
        },
    }
</script>

<style scoped>

</style>
