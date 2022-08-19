//
//
let CF = {
    app: {
        name: "MERVN-template",
        version: "0.0.1"
    },
    server: {
        port: 5153,
        apiPath: '/api'
    },
    // mongodb setting
    mongoose: {
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        // url : 'mongodb+srv://wamoo:wamoo@devconnector.jdg80.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        url : 'mongodb://127.0.0.1:27017/mervn'
    },
    // JWT (JSONWebToken)
    jwt: {
       saltLength: 10,
       secret_str : "this-auth-token",
       token_exp:  60 * 60 // 60 minutes
    },
    frontEnd: {
        path_react: '../client_react/build',
        path_vue: '../client_vue/dist'
    }
}


module.exports = CF
