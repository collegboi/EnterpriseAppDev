var http, crypto, sharedSecret, query, signature;

http = require("http");
crypto = require("crypto");

sharedSecret = "super-secret";
query = "/api/v1";
signature = crypto.createHmac("sha256", sharedSecret).update(query).digest("hex");

console.log(signature);

// http.get({
//     port: 1337,
//     path: "/?" + query,
//     headers: {
//         "X-Signature": signature
//     }
// }, function (res) {
//     console.log(res.statusCode);
// });