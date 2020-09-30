var express = require("express");
var router = express.Router();

router.get("/1", function (req, res, next) {
    const data = {
        data: {
            markdown: `
#### Project setup
npm install

#### Compiles and hot-reloads for development
npm run serve

#### Compiles and minifies for production
npm run build

#### Lints and fixes files
npm run lint

#### Customize configuration
[Configuration Reference](https://cli.vuejs.org/config/)

#### Github repo
[Jsramverk](https://github.com/ollebergkvist/jsramverk)`,
        },
    };

    res.status(200).json(data);
});

router.get("/2", function (req, res, next) {
    const data = {
        data: {
            markdown: `
#### Clone repo
clone https://github.com/ollebergkvist/vue.git

#### Install npm packages
npm install

#### Start server
npm start

#### Github repo
[Jsramverk](https://github.com/ollebergkvist/jsramverk)`,
        },
    };

    res.status(200).json(data);
});

module.exports = router;
