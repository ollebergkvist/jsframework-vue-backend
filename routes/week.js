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

router.get("/10", function (req, res, next) {
  const data = {
    data: {
      markdown: `
## Projekt

#### Github repon

[Frontend](https://github.com/ollebergkvist/jsframework-project-frontend)
[Backend](https://github.com/ollebergkvist/jsframework-project-backend)
[Socket-server](https://github.com/ollebergkvist/jsframework-project-socketserver)

#### Krav 4: Tester Backend
Angående testmiljön för min backend valde jag att gå samma väg som vi hade
gått i tidigare kursmoment, dvs. en test svit bestående av chai, chai-http,
mocha och nyc. Jag baserade delvis mitt val på att jag ville befästa mina
kunskaper gällande denna metod som lärts ut under kursens gång samt att det
var relativt felfritt att få testsviten att fungera, jag kunde fokusera på att
skriva testfall till fullu. Jag tycker även att kombinationen utav Mocha och
Chai fungerar väldigt bra samt att den visuella representationen utav
kodtäckningen utav Istanbul ger en bra översikt. Innan testerna körs så
implementerade jag ett script i ett pretest scrip i programmets package.json,
"node db/reset.js", en version på bash scriptet från tidigare kmom men nu som
node. Då jag bestämt mig för att använda endast Mongoose för projektet, så
fick jag även sätta mig in i synthaxen för att tömma en databas med den nämda
tekniken. Mongoose har fungerat suveränt i alla aspekter, förutom i just
denna. Det var inte lätt att få Mongoose att ta bort en databas, efter många
timmars felsökning kom jag framtill en kombination mellan att ta bort en
databas och därefter dess kollektioner, vilket gav önskat resultat. Men envis
som jag är så ville jag försöka hitta en lösning för att endast behöva ta bort
databasen (vilket logiskt sätt borde ta bort innehållet utav kollektioner
också). Jag fick rätt på det till slut, det känns som en väldigt enkel sak att
uträtta, men officiell dokumentation och diverse forumtrådar verkar vara oense
om hur en ska gå till väga med Mongoose. Med andra ord råder det en hel
motstridighet om tillvägagångssättet och det verkar skilja sig från fall till
fall vad som faktiskt fungerar. Backendens CI-kedja består utav två tekniker,
först ut är Travis som är ett byggsystem för att checka ut kod och för att
köra tester automatiskt varje gång en pushar kod till tillhörande github repo,
då Travis är kopplat till varje version en checkar ut av sin kod blir det även
tydligt att se vilka commits som passerade och vilka som fallerade, med andra
ord väldigt fördelaktigt. För att få uppgifter om kodtäckning och kodkvalitet
implementerade jag Scrutinizer, som även det är kopplat till Github. I båda
fallen aktiverade jag notifikationer via email, på så sätt behöver en inte
logga in på hemsidan för att se om testerna gick igenom, utan en får ett mail
om det fungerade eller inte. Scrutinizer ger även hintar om variabler som inte
används eller kod som saknar syfte, på så sätt är det även ett bra verktyg för
att refaktorera. Gällande kodkvalitet och uppnåd kodtäckning, så fick min
backend applikation högsta betyg samt en kodtäckning om 75 %, hade gärna
spenderat mer tid på att skriva fler testfall men jag fick göra en prioritera
pga. sjukdom. Koden för de invididuella testfallen är visserligen snarlik,
givetvis beroende på hur komplext en vill göra testfallen, men jag upplever
det åtminstone i detta fall att det är relativt enkelt att uppnå 100 %
kodtäckning om en har det som mål. På det stora hela rör det sig om
integrationstester, det hade dock varit intressant att prova E2E (end to end
testing), vad jag känner till så kan Supertest användas för detta syfte men en
kan även använda newman tillsammans med Postman (där en kan använda sina
sparade kollektioner för att sakapa end-to-end flow tests), den sistnämnda
metoden vore intressant att utforska då åtminstone jag brukar först och främst
testa API:r med Postman och då en kan återanvända sparade requests så behöver
en inte skriva ny kod. Anser att jag är nöjd med uppnått resultat, skulle dock
som sagt vilja prova på andra tekniker också.

#### Krav 5: Tester Frontend
Anträffande testsviten för min frontend applikation valde jag att integrera
Mocha och Selenium, valet baserades framför allt på att Selenium verkar ha
varit någon slags industri standard en gång i tiden, om jag skulle göra om
detta krav skulle jag dock välja att använda en annan teknik så som Cypress,
där en kan fokusera på att skriva avancerade testfall utan att behöva oroa sig
för att asynkrona problem, något som enligt egen erfarenhet Selenium verkar ha
svårigheter med. En annan nackdel med Selenium och tillhörande drivers var att
jag trots en hel del undersökning inte kunde få testerna att fungera lokalt,
vilket ledde till att varje gång jag ville göra ett test så fick jag göra det
headless via Travis och Scrutinizer, där åtminstone Travis tar 3-5 minuter att
köra klart programmet. Med andra ord anser jag det väldigt ineffektivt om en
inte först kan köra testerna lokalt innan en pushar sitt repo. Cypress om jag
förstått rätt väntar automatiskt för commands och assertions, medan i Selenium
måste addera explicita och implicita "wait" kommandon för att fungera. Där det
senare visade sig inte att gå att fungera i de fall det behövdes i mitt case.
Jag ville skriva mer komplicerade test fall för att fylla i formulär,
registrera användare och logga in användare tex, men efter 1.5 dags försök och
70 github commits senare bekände jag mig besegrad utav Seleniums
begränsningar. Med hänsyn till detta fick jag i slutändan förenkla min
testfall och avgränsa dessa till endast testa funktionalitet som inte kräver
någon form utav inloggning eller registrering. Testerna körs genom kommandot
"npm test" och det går även att validera koden med hjälp utav eslint vilket
går att exekvera med hjälp utav kommandot "npm run eslint". Use cases: #1
Testa index routen #2 Testa registrerings routen #3 Testa navigeringsmenyn #4
Testa att logotypen har renderats #5 Testa att klicka på logotypen och nå min
personliga webbplats

#### Allmänt gällande projektet
Allmänt gällande projektet så avsatte jag 6 dagar om 8 timmar per dag för att
genomföra krav 1 - 5, jag gjorde prioriteringen att hoppa över krav 6 då jag
inte är särskilt förtjust i att skriva litteraturstudier och då jag har
heltidsarbete vid sidan om studierna. Jag delade upp tiden på följande vis,
första kravet dag 1, sedan två krav per dag, resterande tid avsatte jag för
felsökning, rapportskrivning och spela in redovisningsvideo. Jag kunde på det
stora hela förhålla mig till min avsedda tidsplan. Då jag valde att arbeta med
en hel del nya tekniker i projektet i jämförelse med vad jag redan lärt mig
under kursmomenten, så blev det en hel del brainwork och felsökning. Där var
en del saker som krävde en hel del felsökning tex, att få socket servern att
aktivera cors för min klient, jag gick i det stora hela genom alla
Stackoverflow trådar om ämnet för att till slut finna en lösning som
fungerade, detta var ganska märkligt då jag i tidigare kursmoment endast
användet metoden origins() för att lösa samma sak men nu fungerade inte längre
denna metod, trots att koden är på det stora hela snarlik. Ett annat problem
som dök upp längs vägen var som sagt att försöka testa frontenden med Selenium
på ett mer extensivt sätt. Utöver det har det på det stora hela gått väldigt
bra och projektet har varit väldigt berikande. Jag ser fram emot att befästa
mina kunskaper och bli en MEVN utvecklare! Jag kan inte tänka mig att arbeta
med en annan stack just nu, så det var kul att bli så pass inspirerad av en
kurs.

#### Allmänt gällande kursen
Generellt när det kommer till kursen så har jag endast positiva kommentarer,
det här har varit min absoluta favorit kurs, särskilt då vi fick relativt fria
händer samt att vi fick låta våra vingar flyga. Det har inte alltid varit
lätt, men jag anser att en lär sig bäst om en får kasta sig ut i verkligheten.
Det har blivit en hel del felsökning och en har fått leta information på
egenhand i stor utsträckning till skillnad från övriga dbwebb kurser. Det
känns helt enkelt som en kurs som kan tänkas påminna om hur det är ute i
arbetslivet sedan. Jag känner väl att det är först nu, efter denna kurs som
jag känner mig lite självsäkrare med programmering, att jag faktiskt kan bygga
mindre applikationer på egen hand utan särskilda instruktioner. Det var även
intressant att äntligen få binda ihop, frontend, backend och devops i ett och
samma projekt, det har gett mig en väldigt bra förståelse för hur allt hänger
ihop. Jag gillade verkligen att vi fick sätta oss in i uppsättning utav en
server på en droplet, om det är något jag skulle vilja tillföra så är det väl
att vi hade fått lära oss lite mer om server konfiguration, vad en kan göra
för att få snabbare server respons. En annan sak skulle vara att byta ut
Selenium och kanske låta studenterna välja egen väg för att testa frontenden.
Handledningen har varit superb och jag som distans student från Mexiko har
alltid fått hjälp snabbt utav Emil via Discord när det har behövts. Det är en
väldigt modern kurs som ligger helt rätt i tiden helt enkelt och för mig är
guiderna som ligger upp på jsramverk de mest humant anpassande materialet, i
andra kurser har jag upplevt instruktioner som otydliga och aningen kryptiska.
Den här kursen får 10/10 utav mig!`,
    },
  };

  res.status(200).json(data);
});

module.exports = router;
