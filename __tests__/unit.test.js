// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test("111-111-1111 is a valid phone number" , () => {
    expect(functions.isPhoneNumber("111-111-1111")).toBe(true);
});
test("(111)111-1111 is a valid phone number" , () => {
    // TODO
    expect(functions.isPhoneNumber("(111)111-1111")).toBe(true);
});
test("abc is not a valid phone number" , () => {
    expect(functions.isPhoneNumber("abc")).toBe(false);
});
test("111 is not a valid phone number" , () => {
    expect(functions.isPhoneNumber("111")).toBe(false);
});

test("chc063@ucsd.edu is a valid email" , () => {
    expect(functions.isEmail("chc063@ucsd.edu")).toBe(true);
});
test("chc063@gmail.com is a valid email" , () => {
    expect(functions.isEmail("chc063@gmail.com")).toBe(true);
});
test("abc@ is not a valid email" , () => {
    expect(functions.isEmail("abc@")).toBe(false);
});
test("abc is not a valid email" , () => {
    expect(functions.isEmail("abc")).toBe(false);
});

test("abcd1234 is a strong password" , () => {
    expect(functions.isStrongPassword("abcd1234")).toBe(true);
});
test("AbcD1234 is a strong password" , () => {
    expect(functions.isStrongPassword("AbcD1234")).toBe(true);
});
test("abc is not a strong password" , () => {
    expect(functions.isStrongPassword("abc")).toBe(false);
});
test("123 is not a strong password" , () => {
    expect(functions.isStrongPassword("123")).toBe(false);
});

test("01/01/2023 is a valid date" , () => {
    expect(functions.isDate("01/01/2023")).toBe(true);
});
test("1/1/2023 is a valid date" , () => {
    expect(functions.isDate("1/1/2023")).toBe(true);
});
test("01012023 is not a valid date" , () => {
    expect(functions.isDate("01012023")).toBe(false);
});
test("112023 is not a valid date" , () => {
    expect(functions.isDate("112023")).toBe(false);
});

test("#FFFFFF is a valid hex code" , () => {
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
});
test("#000000 is a valid hex code" , () => {
    expect(functions.isHexColor("#000000")).toBe(true);
});
test("notvalid is not a valid hex code" , () => {
    expect(functions.isHexColor("notvalid")).toBe(false);
});
test("123456789 is not a valid hex code" , () => {
    expect(functions.isHexColor("123456789")).toBe(false);
});