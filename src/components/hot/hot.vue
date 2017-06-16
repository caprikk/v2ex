<template>
    <list :questions="questions"></list>
</template>

<script type="es6">
    import list from 'components/list/list'

    export default {
        data() {
            return {
                questions: []
            }
        },
        created() {
            this.$http.get(this.HOST + '/topics/hot.json').then(response => {
                console.log(response.body)
                if (response.body) {
                    this.questions = response.body
                }
            })
        },
        components: {
            list
        }
    }
</script>

<style lang="less">

</style>
