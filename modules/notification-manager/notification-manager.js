import 'jb-notification';
import 'jb-notification/dist/wrapper/jb-notification-wrapper';
// eslint-disable-next-line no-duplicate-imports
import { JBNotificationWebComponent, NotificationType } from 'jb-notification';
// new messaging system
class NotificationManager {
    get wrapperDom() {
        return document.querySelector('jb-notification-wrapper');
    }
    constructor() {
        this.#initWrapperDom();
    }
    #initWrapperDom() {
        const notificationWrapper = document.createElement('jb-notification-wrapper');
        document.body.appendChild(notificationWrapper);
    }
    #createMessageDom(title, type, desc) {
        const notif = document.createElement('jb-notification');
        notif.type = type;
        notif.title = title;
        notif.description = desc;
        notif.addEventListener("close", this.onNotificationClose.bind(this))
        return notif;
    }
    new(title, type, desc = null) {
        const dom = this.#createMessageDom(title, type, desc);
        //TODO: change it to new web component wrapper with managerial ability
        this.wrapperDom?.appendChild(dom);
        dom.show();
    }
    onNotificationClose(e) {
        this.wrapperDom.removeChild(e.target);
    }
}
export const notificationManager = new NotificationManager();