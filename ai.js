import AppService from "./services/AppService.js";
import RouterService from "./services/RouterService.js";

class Ai {
    init() {
        /**
         * @type HtmlElement element
         */
        let element = document.getElementById('aijs');

        if (!element) {
            console.error('Aijs main element not found.');
            return;
        }

        let appService = new AppService();

        let component = (new RouterService(appService)).getComponent();

        if (!component) {
            return;
        }

        element.innerHTML = component.template();

        component.init();
    }
}

/**
 * Init the AiJS
 */
(new Ai()).init();
