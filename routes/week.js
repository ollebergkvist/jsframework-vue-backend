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

router.get("/3", function (req, res, next) {
    const data = {
        data: {
            markdown: `
#### Devops
Min största lärdom från detta kursmoment har varit att sätta upp en server
på en droplet, något jag inte tidigare varit bekant med att en kunde åstadkomma. Jag har nu under det senaste året byggt ett antal hemsidor och eshopar där jag
använt mig utav tradionell webhosting till mina kunder, då har jag inte alls fått samma insikt i hur konfigurationen utav en server går till. Antagligen i framtiden kommer jag bygga mina servrar
i droplets istället, särskilt för att jag vill sätta mig in i hur en kan förbättra prestandan på serversidan, i form utav aktivering utav gzip tex.
Om en köper traditionell hosting så lämnar en ju över all konfiguration till en tredje part. Jag ser även möjligheter att driftsätta flera mindre hemsidor på en och samma droplet vilket helt klart vore mer ekonomiskt,
idag betalar jag hosting för 4 hemsidor om året som tillhör olika hobbyprojekt. Kanske till och med att driftsätta mindre kunders hemsidor på en och samma dropleft och ta betalt för hostingen själv? Det är något jag helt klart ska undersöka ur ett
prestanda perspektiv. Det blir även väldigt enkelt att uppdatera ens content på dropleten, om en använder en droplet i kombination med en process manager som tex pm2 kan en köra en git pull och på så sätt uppdatera till senaste versionen utav sin hemsida eller app.
Det var även väldigt intressant att få installera ett SSL certifikat med let's encrypt och se hur pass enkelt det var att åstadkomma. Jag har helt klart insett att jag vill jobba som fullstack utvecklare och inte bara med front-end eller back-end efter detta kursmoment.

Gällande devops (development + operations) så har jag tidigare förstått det som en teknologi men nu förstår jag att det är en form utav mindset eller en filosofi, ett sätt för en organisation att arbeta på för att nya features ska kunna nå användare så snabbt som möjligt och utan
komplikationer. Ett koncept att skapa förståelse mellan utvecklarna och driftsättarna i ett team och få de att arbeta i sync. Utvecklarna skriver kod, designar nya features och testar features medan operatörerna hanterar
servrar, scaling issues, bandbredd, säkerhet och backups.`,
        },
    };

    res.status(200).json(data);
});

router.get("/4", function (req, res, next) {
    const data = {
        data: {
            markdown: `
## Test cases

#### Case 1
Användaren ska kunna navigera till index sidan genom att klicka på navigeringslänken "Home".

#### Case 2
Användaren ska kunna navigera till login sidan genom att klicka på navigeringslänken "Login".

#### Case 3
Användaren ska kunna navigera till reports sidan genom att klicka på navigeringslänken "Reports".`,
        },
    };

    res.status(200).json(data);
});

module.exports = router;
