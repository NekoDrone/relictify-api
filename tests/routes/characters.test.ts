beforeAll(() => {
    process.env.APP_AUTH_KEY = "testing";
    process.env.PROD_ENV = "test";
})

test("Invalid character should return correctly.")