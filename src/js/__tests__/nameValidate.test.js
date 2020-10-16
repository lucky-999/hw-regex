import Validator from '../nameValidate';

test('rightName', () => {
    let person = new Validator();
    expect(person.validateUsername('lucky_1luc')).toBeTruthy();
});

test('wrongName', () => {
    let person = new Validator();
    expect(person.validateUsername('1234lucky')).toBeFalsy();
})