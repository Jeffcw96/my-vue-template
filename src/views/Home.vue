<template>
    <div>
        <h1>Home Page</h1>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name:"Home",    
    computed:{
        ...mapGetters(['language/getLanguage']),
        getLanguage(){
            
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
