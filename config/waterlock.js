
/**
 * waterlock
 *
 * defines various options used by waterlock
 * for more informaiton checkout
 *
 * http://waterlock.ninja/documentation
 */
module.exports.waterlock = {

  // Base URL
  //
  // used by auth methods for callback URI's using oauth and for password
  // reset links.
  baseUrl: 'http://dev.localhost.com',

  // Auth Method(s)
  //
  // this can be a single string, an object, or an array of objects for your
  // chosen auth method(s) you will need to see the individual module's README
  // file for more information on the attributes necessary. This is an example
  // of the local authentication method with password reset tokens disabled.
  authMethod: [
    {
      name:'waterlock-local-auth',
      passwordReset:{
        tokens: false,
        mail: {
          protocol: 'SMTP',
          options:{
            service: 'Gmail',
            auth: {
              user: 'gmail.user@gmail.com',
              pass: 'userpass'
            }
          },
          from: 'no-reply@localhost.com',
          subject: 'Your password reset!',
          forwardUrl: 'http://dev.localhost.com'
        },
        template:{
          file: '../views/email.jade',
          vars:{}
        }
      },
      createOnNotFound: true
    },
    {
  		name: "waterlock-twitter-auth",
  		consumerKey: "123",
  		consumerSecret: "123"
  	},
    {
  		name: "waterlock-facebook-auth",
  		appId: "123",
  		appSecret: "123",
      // if using frontend oauth
  		// redirectUri: 'redirectUri',
      // redirectUri: 'http://dev.localhost.com/auth/facebook_oauth2',
      // fieldMap: {
  		// 	// <model-field>: <facebook-field>,
  		// 	'firstName': 'first_name',
  		// 	'lastName': 'last_name',
  		// 	'gender': 'gender',
  		// 	'timezone': 'timezone'
  		// }
  	},
    {
      name: 'waterlock-google-auth',
      clientId: '123',
      clientSecret: '123',
      // allow: ['DOMAIN', 'USER@DOMAIN'],
      redirectUri: 'http://dev.localhost.com/auth/google_oauth2',
      // fieldMap: {
			//   <model-field>: <google-field>,
  		// 	'firstName': 'given_name',
  		// 	'lastName': 'family_name',
  		// 	'gender': 'gender'
  		// }
    }
  ],

  // JSON Web Tokens
  //
  // this provides waterlock with basic information to build your tokens,
  // these tokens are used for authentication, password reset,
  // and anything else you can imagine
  jsonWebTokens:{

    // CHANGE THIS SECRET
    secret: '12345678',
    expiry:{
      unit: 'days',
      length: '7'
    },
    audience: 'localhost',
    subject: 'rest_api',

    // tracks jwt usage if set to true
    trackUsage: true,

    // if set to false will authenticate the
    // express session object and attach the
    // user to it during the hasJsonWebToken
    // middleware
    stateless: false,

    // set the name of the jwt token property
    // in the JSON response
    tokenProperty: 'token',

    // set the name of the expires property
    // in the JSON response
    expiresProperty: 'expires',

    // configure whether or not to include
    // the user in the respnse - this is useful if
    // JWT is the default response for succesfull login
    includeUserInJwtResponse: false
  },

  // Post Actions
  //
  // Lets waterlock know how to handle different login/logout
  // attempt outcomes.
  postActions:{

    // post login event
    login: {

      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      success: 'default',

      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      failure: 'default'
    },

    //post logout event
    logout: {

      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      success: 'default',

      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      failure: 'default'
    },
    // post register event
   register: {
     // This can be any one of the following
     //
     // url - 'http://example.com'
     // relativePath - '/blog/post'
     // obj - {controller: 'blog', action: 'post'}
     // string - 'custom json response string'
     // default - 'default'
     success: 'default',
     // This can be any one of the following
     //
     // url - 'http://example.com'
     // relativePath - '/blog/post'
     // obj - {controller: 'blog', action: 'post'}
     // string - 'custom json response string'
     // default - 'default'
     failure: 'default'
   }
  }
};
