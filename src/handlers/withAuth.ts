import { error, IRequest, IRequestStrict } from "itty-router";

const appAuthKey = process.env.APP_AUTH_KEY ?? "undefined";
const encodedAuth = Buffer.from(appAuthKey).toString('base64')

type AuthBody = {
    relictifyAuth: string;
}

const withAuth = async ( request: IRequest ) => {
    const reqToken = request.headers.get('Authorization - Relictify')
    if (!reqToken) return error(400, '\'Authorization - Relictify\' header not found. Please set it in the request.')
    if (reqToken != encodedAuth) return error(401, 'Incoming request not authorised. Please ensure the correct \'Authorization - Relictify\' header is set properly.')
}

export default withAuth