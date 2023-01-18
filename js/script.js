/*
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

*Bonus*
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*Super Bonus*
Riusciamo a gestire e mostrare un loader mentre le mail non sono ancora tutte pronte? :sorriso:

Consigli
Installate e usate Postman per testare l'API e verificare come vi risponde,
in modo da individuare la sintassi corretta per recuperare i dati che vi servono :occhiolino:
*/

console.log(Vue);

const app = Vue.createApp({
    data(){
        return {
            emails : [],
        }
    },
    methods: {
        //method to get emails by boolean's api
        getRandomEmails() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
                this.emails.push(response.data.response);
            })
        }
    },
    mounted() {
        //for cycle to generate 10 times the email
        for(i=0; i < 10; i++) {
            this.getRandomEmails();
        }
    }
});

app.mount('#root');