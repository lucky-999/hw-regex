export default class Validator {
    validateUsername(name) {
        let resultOne = /[a-z\-\_0-9]/i.test(name);
        let resultTwo = /^[a-z][\d\-\_(\w{0, 3})]+[a-z]$/i.test(name);
        return resultOne && resultTwo;
    }
}