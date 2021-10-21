import AppService from "AppService.js";
import { Routes } from "../routes.js";

export default class RouterService {

    appService;

    /**
     * 
     * @param {AppService} AppService 
     */
    constructor(AppService) {
        this.appService = AppService;
    }

    getComponent() {
        let route = this.findRoute(this.getCurrentPath());

        if (!route) {
            return;
        }

        if (!route.component) {
            console.error(`Route component not found.`);
            return;
        }

        let componentInstantiate = (new route.component(this.appService));

        if (typeof componentInstantiate.init !== "function") {
            console.error(`Component ${route.component} init() not found.`);
            return;
        }

        if (typeof componentInstantiate.template !== "function") {
            console.error(`Component ${route.component} template() not found.`);
            return;
        }

        return componentInstantiate;
    }

    /**
     * 
     * @returns string
     */
    getCurrentPath() {
        return window.location.pathname;
    }

    /**
     * 
     * @param {string} path 
     */
    findRoute(path) {
        let index = Routes.filter(route => !!route.url).findIndex(route => route.url === path);

        if (index !== -1) {
            return Routes[index];
        }
        else {
            let index404 = Routes.findIndex(route => route.url === "**");

            if (index404 !== -1) {
                return Routes[index404];
            }
            else {
                console.error(`Route '${path}' not found.`);
                return null;
            }
        }
    }
}