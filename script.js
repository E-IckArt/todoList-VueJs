//A toi de jouer ! https://youtu.be/1dLcnxIock0

let id=0

const {createApp} = Vue 

createApp({
    data(){
        return{
            newTodo: '',
            hideCompleted: false,
            todos: [
                { id: id++, text: 'Learn Laravel', done: false},
                { id: id++, text: 'Learn Vue.js', done: false},
                { id: id++, text: 'Learn Swagger', done: false},
            ],
            errors: []
        }
    },
    computed:{
        filteredTodos() {
            return this.hideCompleted
            ? this.todos.filter((t) => !t.done)
            : this.todos
        }
    },
    methods: {
        addTodo() {
            //this.todos.push({id: id++, text: this.newTodo, done: false})
            
            
            // Vérifier si du texte a bien été saisi
            this.errors =  []

            if(this.newTodo) {
                this.todos.push({id: id++, text: this.newTodo, done: false});
                this.errors = []
            }
            
            if(!this.newTodo){
                this.errors.push('You need to fill in a todo before submit')
            }

            this.newTodo = ''
        },
        removeTodos() {
            this.todos = []
            //this.todos = this.todos.filter((todo) => todo !== todo)
        }
    },
    mounted() {
        this.todos
    }
}).mount('#app')