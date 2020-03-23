import { urlValidate } from "../src/client/js/nameChecker";
describe(urlValidate, () => {
    test("it should return false if the url does not start with http:// or https://", () => {
        expect(urlValidate('www.google.com')).toBe(true);
    })})