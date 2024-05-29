import { error, IRequest } from "itty-router";

const appAuthKey = process.env.APP_AUTH_KEY ?? "undefined";
const encodedAuth = Buffer.from(appAuthKey).toString('base64')

const withAuth = (request: IRequest) => {
    const reqToken = request.headers.get('Authorization')
    console.log(`Request token is ${reqToken}`)
    
    if (reqToken != encodedAuth) return error(401, 'Incoming request not authorised. Access denied.')
    
    console.log("Incoming request authorised.")
}

export default withAuth