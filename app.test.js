const supertest = require('supertest');

const app = require("./app");


// describe("signup", () => {
//     test('return status code 200', async () => {
//         const res = await supertest(app).post('/users/signup/').send({
//             username: "ASDASDADSA",
//             password: "ffffffffffffff"
//         });

//         // console.log(res.statusCode)
//         expect(res.statusCode) == 200;
//     })
// })


// describe("signup", () => {
//     // test("eturn status code 200", done => {
//     //     supertest(app)
//     //     .post("/sers/signup")
//     //     .send({
//     //         username: "ASDASDADSA",
//     //         password: "ffffffffffffff"
//     //     })
//     //     .expect(200)
//     //     .end(function(err, res) {
//     //       console.log("err", err);
//     //     });
//     // });
//   });

// describe("POST /signin", () =>{
//     describe("given a username and password", () => {
//         // save the username and password to db 
//         // should respond with a 200 status code
        
//         test("shoul respond status 200" ,async() => {
//             const response = await request(app).post("/users").send({
//                 username: "David",
//                 password: "5555"
//             })
//             expect(response.statusCode).toBe(200);
//         })
//     })

//     describe("when user and password are missing", () => {
//         // should respond a 500 stuts 
//     })
// })