import { error, IRequest, IRequestStrict } from "itty-router";

const appAuthKey = process.env.APP_AUTH_KEY ?? "undefined";
const encodedAuth = Buffer.from(appAuthKey).toString('base64')

type AuthBody = {
    relictifyAuth: string;
}

const withAuth = async ( request: IRequest ) => {
    const reqToken = request.content as AuthBody;
    console.log(JSON.stringify(reqToken))
    if (reqToken.relictifyAuth != encodedAuth) return error(401, 'Incoming request not authorised. Please provide the correct "relictifyAuth" token in the request body')
}

export default withAuth