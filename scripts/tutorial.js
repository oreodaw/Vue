//instanciar vue
const app=new Vue(
    {
        el: '#app',
        data:{
            //esto es lo que mostrará por pantalla 
            titulo:'Hola con Vue Sara',
            frutas:[
                {nombre:'Pera',cantidad:0},
                {nombre:'Manzana',cantidad:19},
                {nombre:'Platano',cantidad:13},
               
            ],
            nuevaFruta:'',
            //frutas:['Manzana','Pera','Platano']
            activeColor: 'red',
            fontSize: 30
        },
   
        //crear metodos
        methods:{
            //funcion
            agregarFruta(){
                this.frutas.push({
                    nombre:this.nuevaFruta,cantidad:0,
                });
                //esto es para que no se quede almacenado en el input lo que ponemos, si no que cada vez
                //que demos al boton agregar se quede en blanco
                this.nuevaFruta="";
            }
        }
    }
)