import Validator from '../nameValidate';

test('rightName', () => {
    let person = new Validator();
    expect(person.validateUsername('Shu-_1sha')).toBeTruthy();
});

test('wrongName', () => {
    let person = new Validator();
    expect(person.validateUsername('1Shusa1')).toBeFalsy();
})