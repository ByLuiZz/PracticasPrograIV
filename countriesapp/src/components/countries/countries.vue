<template>
    {{ data }}
</template>

<script>
import request from './requests';
export default {
    data(){
        return{
            data: [],
        }
    },
    methods:{
        async getAllCountries(){
            const response = await fetch(request.getAllCountries);
            this.data = await response.json();
        }

    },
    created(){
        this.getAllCountries();
    }
}
</script>
