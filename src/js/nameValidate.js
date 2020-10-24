export default class Validator {
    constructor(username) {
      if (typeof username !== 'string') throw new Error('Некорректный тип данных, требуется строка');
      this.username = username;
    }
  
    validateUsername() {
      return (this.username.search(/^[a-zA-Z]+[\da-zA-Z_-]*[a-zA-Z]+$/) !== -1
        && this.username.search(/\d{4,}/) === -1);
    }
  }