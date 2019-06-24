import Enum from './Enum';

export default class ScreenSizeEnum extends Enum {

    static PHONE = 'phone';
    static TABLET = 'tablet';
    static DESKTOP = 'desktop';

    static getMediaWidths() {
        return {
            [this.PHONE]: 320,
            [this.TABLET]: 768,
            [this.DESKTOP]: 1024,
        };
    }

    static getDeviceBySize(width) {
        if (width < this.getMediaWidth(this.TABLET)) {
            return this.PHONE;
        }
        if (width < this.getMediaWidth(this.DESKTOP)) {
            return this.TABLET;
        }
        return this.DESKTOP;
    }

    static getMediaWidth(id) {
        return this.getMediaWidths()[id] || '';
    }

}
