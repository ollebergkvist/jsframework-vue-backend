var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    const data = {
        data: {
            title: `Jsramverk App`,
            paragraph1: `I'm a multidisciplinary developer working in the cross section of aesthetics and technology.
                I help clients with tailor-made developments, based on concrete concepts and sophisticated user
                centered experiences, into real business results. With more then 3 years experience in the industry,
                I'm focusing on front and backend development, user experience and brand identity.`,
            paragraph2: `This website was created as part of the BTH course "Jsramverk", showcasing front end development
             with the Javascript framework Vue.`,
        },
    };

    res.json(data);
});

module.exports = router;
