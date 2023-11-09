export const PROD_ENV = process.env.PROD_ENV ?? throwNewError("PROD_ENV not set");

function throwNewError(msg: string): never{
    throw new Error(msg);
}