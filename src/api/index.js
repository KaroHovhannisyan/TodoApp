/**
 * Created by karo on 5/8/17.
 */
const CLIENT_ID = "131484233069-en2crbmg265nsprfnu0jo5mmm3jburup.apps.googleusercontent.com";
const  SCOPES = ["https://www.googleapis.com/auth/tasks","https://www.googleapis.com/auth/plus.me"];

export default {
    authorize(params) {
        return new Promise ((resolve,reject) =>{
            gapi.auth.authorize({
                    'client_id': CLIENT_ID,
                    'scope': SCOPES,
                    'immediate': params.immediate,
                    'cookie_policy': 'single_host_origin'
            },
                authResult =>{

                console.log(authResult);
            }
            );
        });
    }

}