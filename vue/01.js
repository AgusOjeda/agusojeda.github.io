const app = new Vue({
    el: '#app',
    data:{
        titulo: "Hola mundo con Vue",
        frutas: [
            {nombre:'Pera', cantidad:10},
            {nombre:'Manzana', cantidad:0},
            {nombre:'Banana', cantidad:11},
        ],
        nuevaFruta:"",
        frutaCantidad:0,
    },
    methods:{
        agregarFruta2 () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad:0
            });
            this.nuevaFruta = "";
        },
        agregarFruta (){
            this.nuevaFruta.split(",")
            
            this.frutas.push({
                nombre:
            })
        },

    }
})