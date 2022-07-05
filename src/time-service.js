export class TimeService {
    getTime() {
        return new Date().toLocaleTimeString()
    }
}
