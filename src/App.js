import { Notifyer } from './Notifyer.js';

const App = {
    async start() {
        try {
            await Notifyer.init();
            Notifyer.notify({
                title: "Hora do Post",
                body: "Crie algum conteudo para ajudar a comunidade"
            });
        } catch(erro) {
            console.log(erro.message)
        }
    }
}

export { App };