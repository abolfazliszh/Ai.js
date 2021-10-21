import AppService from "../../services/AppService.js";

export default class AppComponent {
    /**
     * 
     * @param {AppService} AppSerivce 
     */
    constructor(AppSerivce) {

    }

    template() {
        return `<h1>Welcome to Ai.js</h1>`;
    }

    init() {
        console.log('AppComponent is here !');
    }
}