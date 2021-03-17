

const app= Vue.createApp(
    {
        data(){
            return {showdiv:true,
                books:[
                    {title: 'Alpha' , author: 'one'},
                    {title: 'Beta' , author: 'two'},
                    {title: 'Gemma' , author: 'three'},
                ]
              }

        },
        
    }
)
app.mount('#app')