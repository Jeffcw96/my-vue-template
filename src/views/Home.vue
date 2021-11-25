<template>
    <div>
        <h1>{{$t('TITLE.HEADING_ONE')}}</h1>
        <button @click="updateLocale('zh-cn')">Chinese</button>
        <button @click="updateLocale('en')">English</button>
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
    },    
    methods:{
        updateLocale(language){
            this.$i18n.locale = language
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
