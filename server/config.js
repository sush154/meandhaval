var config = {
    mongo:{
        connectionURL:'mongodb://localhost:27017/testdb'
    },
    Oauth:{
        clientID:'789066215103-312ujnn1caqnnsd3n8grct47sejdc2lk.apps.googleusercontent.com',
        clientSecret:'p7GK9ivGIGvCOy72jBpo8Zpw',
        callBackURL:'http://localhost:3000/customer/dashboard'
    },
    mongooseConnection:null
}

module.exports = config;