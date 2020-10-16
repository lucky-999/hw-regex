export default class Validator {
    validateUsername(name) {
        return /^[a-z][\w-]*[a-z]$/i.test(name) && !/\d{4}/.test(name);
    }
}