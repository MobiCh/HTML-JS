//console.log('hello','vue') //first lecture
// const app= Vue.createApp(
//     {template: '<h2>testing</h2>'}
// ) //Lecture 1

const app= Vue.createApp(
    {
        data(){
            return {
                title: 'Munib Ch', Email:'muneebch041'
              }

        }
    }
)
app.mount('#app')