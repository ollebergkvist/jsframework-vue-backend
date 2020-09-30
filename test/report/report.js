/* global describe it */

process.env.NODE_ENV = "test"; // Sets env variable

const chai = require("chai"); // Imports chai module
const chaiHttp = require("chai-http"); // Imports chai-http module
const server = require("../../app"); // Imports express server module from app.js
let token = ""; // Variable to store token

chai.should();

chai.use(chaiHttp);

describe("App", () => {
    describe("Retrieve index data", () => {
        describe("Route: GET /", () => {
            it("200 HAPPY PATH", (done) => {
                chai.request(server)
                    .get("/")
                    .end((err, res) => {
                        if (err) {
                            done(err);
                        }
                        res.body.should.be.an("object");
                        res.should.have.status(200);
                        done();
                    });
            });
        });
    });

    describe("Retrieve KMOM01 report", () => {
        describe("Route: GET /reports/week/1", () => {
            it("200 HAPPY PATH", (done) => {
                chai.request(server)
                    .get("/reports/week/1")
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.an("object");
                        done();
                    });
            });
        });
    });

    describe("Retrieve KMOM02 report", () => {
        describe("Route: GET /reports/week/2", () => {
            it("200 HAPPY PATH", (done) => {
                chai.request(server)
                    .get("/reports/week/2")
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.an("object");
                        done();
                    });
            });
        });
    });

    describe("Create user account with valid email address", () => {
        describe("Route: POST /register", () => {
            it("201 HAPPY PATH", (done) => {
                chai.request(server)
                    .post("/register")
                    .send({
                        email: "test@test.test",
                        password: "12345",
                    })
                    .end((err, res) => {
                        res.should.have.status(201);
                        done();
                    });
            });
        });
    });

    describe("Create user account with invalid email address", () => {
        describe("Route: POST /register", () => {
            it("201 HAPPY PATH", (done) => {
                chai.request(server)
                    .post("/register")
                    .send({
                        email: "test.test",
                        password: "12345",
                    })
                    .end((err, res) => {
                        res.should.have.status(401);

                        done();
                    });
            });
        });
    });

    describe("Attempt login with valid email address", () => {
        describe("Route: POST /login", () => {
            it("201 HAPPY PATH", (done) => {
                chai.request(server)
                    .post("/login")
                    .send({
                        email: "test@test.test",
                        password: "12345",
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        token = res.body.data.token;
                        done();
                    });
            });
        });
    });

    describe("Attempt login with invalid email address", () => {
        describe("Route: POST /login", () => {
            it("401 HAPPY PATH", (done) => {
                chai.request(server)
                    .post("/login")
                    .send({
                        email: "test.test",
                        password: "12345",
                    })
                    .end((err, res) => {
                        res.should.have.status(401);
                        done();
                    });
            });
        });
    });

    describe("Attempt login with invalid password", () => {
        describe("Route: POST /login", () => {
            it("401 HAPPY PATH", (done) => {
                chai.request(server)
                    .post("/login")
                    .send({
                        email: "test@test.test",
                        password: "invalidpassword",
                    })
                    .end((err, res) => {
                        res.should.have.status(401);
                        done();
                    });
            });
        });
    });

    describe("Create KMOM report", () => {
        describe("Route: POST /reports", () => {
            it("201 HAPPY PATH", (done) => {
                chai.request(server)
                    .post("/reports")
                    .set("x-access-token", token)
                    .send({
                        kmom: "test",
                        report: "test",
                    })
                    .end((err, res) => {
                        res.should.have.status(201);
                        done();
                    });
            });
        });
    });

    describe("Attempt to create KMOM report without token", () => {
        describe("Route: POST /reports", () => {
            it("401 HAPPY PATH", (done) => {
                chai.request(server)
                    .post("/reports")
                    .send({
                        report: "test",
                    })
                    .end((err, res) => {
                        res.should.have.status(401);
                        done();
                    });
            });
        });
    });

    describe("Attempt to create KMOM report with invalid token", () => {
        describe("Route: POST /reports", () => {
            it("401 HAPPY PATH", (done) => {
                chai.request(server)
                    .post("/reports")
                    .set("x-access-token", "test")
                    .send({
                        report: "test",
                    })
                    .end((err, res) => {
                        res.should.have.status(500);
                        done();
                    });
            });
        });
    });

    describe("Attempt to create KMOM report without body.kmom", () => {
        describe("Route: POST /reports", () => {
            it("500 HAPPY PATH", (done) => {
                chai.request(server)
                    .post("/reports")
                    .set("x-access-token", token)
                    .send({
                        report: "test",
                    })
                    .end((err, res) => {
                        res.should.have.status(500);
                        done();
                    });
            });
        });
    });

    describe("Update KMOM report", () => {
        describe("Route: PUT /updatereport", () => {
            it("200 HAPPY PATH", (done) => {
                chai.request(server)
                    .put("/updatereport")
                    .set("x-access-token", token)
                    .send({
                        kmom: "test",
                        report: "test",
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        done();
                    });
            });
        });
    });

    describe("Attempt to update KMOM report without body.report", () => {
        describe("Route: PUT /updatereport", () => {
            it("500 HAPPY PATH", (done) => {
                chai.request(server)
                    .put("/updatereport")
                    .set("x-access-token", token)
                    .send({
                        kmom: "test",
                    })
                    .end((err, res) => {
                        res.should.have.status(500);
                        done();
                    });
            });
        });
    });
});
