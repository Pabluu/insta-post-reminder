import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js'

const App = {
    async start() {
        try {
            const time = .1 * 60;
            Timer.init(time);
        } catch (erro) {
            console.log(erro.message)
        }
    }
}

export { App };