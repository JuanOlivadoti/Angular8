export class CounterService {
    constructor() { }

    counter: number = 0;

    actionsCounter() {
        this.counter++;
        console.log(this.counter);

    }
}