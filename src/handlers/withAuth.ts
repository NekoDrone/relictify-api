import { error, IRequest } from "itty-router";

const appAuthKey = process.env.APP_AUTH_KEY ?? "undefined";
const encodedAuth = Buffer.from(appAuthKey).toString('base64')
const withAuth = async ( request: IRequest ) => {
    const reqToken = request.headers.get('Authorization')
    if (!reqToken) return error(400, '\'Authorization\' header not found. Please set it in the request.')
    if (reqToken != encodedAuth) return error(401, 'Incoming request not authorised. Please ensure the correct \'Authorization\' header is set properly.')
}

export default withAuth