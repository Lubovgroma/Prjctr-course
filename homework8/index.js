//Parent prototype of all classes
const OlympicSport = function (team, sportName, year) {
    this.team = team;
    this.sportName = sportName;
    this.year = year;
}

OlympicSport.prototype.win = function (sportName) {
    return `Partisipant won ${sportName} competition`;
}
OlympicSport.prototype.compete = function () {
    `Olympics competition is every ${this.year} years`;
}
OlympicSport.prototype.represent = function () {
    if (this.team === 'Ukraine') {
        return 'winner';
    }
    else {
        return 0;
    }
}
const u = new OlympicSport('Ukraine', 'Gym', 4);
console.log(u.represent());

//Child prototype of OlympicSport class and parent for StrokeSwimming and TeamSwimming
const Swimming = function(team, sportName, year, style, approach, distance){
    OlympicSport.call(this, team, sportName, year);
    this.style = style;
    this.approach = approach;
    this.distance = distance;
}
Swimming.prototype = Object.create(OlympicSport.prototype);

Swimming.prototype.swim = function(sportName, style){
    this.sportName = sportName;
    this.style = style;
    if (sportName.toLowerCase() === 'swimming') {
        console.log(`Partisipant is swimming using ${style}`);
    }else {
        console.log('You r checking wrong sport');
    }
}
Swimming.prototype.lead = function(){
    return `Partisipant is leading the ${this.distance} race`;
}
Swimming.prototype.coach = function(approach){
    this.approach = approach;
    if (approach) {
        return 1;
    } else {
        return;
    }
}

const p = new Swimming();
p.coach(true);
console.log(p);
//child prototype of Swimming class
const StrokeSwimming = function(team, sportName, style, approach, distance, stroke, record, position) {
    Swimming.call(this, team, sportName, style, approach, distance);
    this.stroke = stroke;
    this.position = position;
    this.record = record;
}
StrokeSwimming.prototype = Object.create(Swimming.prototype);

StrokeSwimming.prototype.swimIndividualy = function(position){
    this.position = position
    return `Partisipant is ${this.position}`;
}
StrokeSwimming.prototype.getStroke = function(stroke){
    if(['butterfly', 'freestyle', 'backstroke', 'breaststroke', 'Sidestroke'].includes(stroke)){
        console.log('Good choice!');
        return;
    }else {
        throw new Error ('Please select correct stroke');
    }
}
StrokeSwimming.prototype.chooseStroke = function(stroke){
    this.stroke = stroke;
    return `Good choice!`;
}
StrokeSwimming.prototype.fixRecord = function(record){
    this.record = record;
    if (record < 10) {
        return 'Fix your record';
    } else {
        return 'Good job!';
    }
}

const k = new StrokeSwimming();
console.log(k.lead());
console.log(k);
//child prototype of Swimming class
const TeamSwimming = function(team, sportName, style, approach, distance, gameName, numberOfPartisipants, direction) {
    Swimming.call(this, team, sportName, style, approach, distance);
    this.gameName = gameName;
    this.numberOfPartisipants = numberOfPartisipants;
    this.direction = direction;
}
TeamSwimming.prototype = Object.create(Swimming.prototype);

TeamSwimming.prototype.swimWithTeam = function(gameName){
    this.gameName = gameName;
    console.log(`Partisipants are competing in ${this.gameName}`);
}
TeamSwimming.prototype.game = function(gameName, numberOfPartisipants){
    this.gameName = gameName;
    this.numberOfPartisipants = numberOfPartisipants;
    console.log(`Start a ${this.gameName} with ${numberOfPartisipants} partisipants!`);
}
TeamSwimming.prototype.fail = function(direction){
    this.direction = direction;
    console.log(`Failed to follow correct ${direction} direction`);
}

const t = new TeamSwimming();
t.fail('forward');
//child prototype of OlympicSport class
const Athletics = function(team, sportName, year, trackOrField, usedEquipment) {
    OlympicSport.call(this, team, sportName, year);
    this.trackOrField = trackOrField;
    this.origin = 'white line';
    this.usedEquipment = usedEquipment;
}
Athletics.prototype = Object.create(OlympicSport.prototype);
Athletics.prototype.start = function(sportName){
    this.sportName = sportName;
    return `Partisipant started to ${this.sportName} from ${this.origin}.`;
}
Athletics.prototype.finsih = function(){
    return `Partisipants has all finished`;
}
Athletics.prototype.selectEquipment = function(usedEquipment){
    this.usedEquipment = usedEquipment;
    alert(`You have selected ${this.usedEquipment}`);
}

//child prototype of OlympicSport class
const RacketSports = function(team, sportName, year, racketType, ballType, score, info) {
    OlympicSport.call(this, team, sportName, year);
    this.racketType = racketType;
    this.ballType = ballType;
    this.score = score;
    this.info = info;
}
RacketSports.prototype = Object.create(OlympicSport.prototype);
RacketSports.prototype.hit = function(ballType, racketType){
    this.ballType = ballType;
    this.racketType = racketType;
    console.log(`Partisipant hit ${this.ballType} with ${this.racketType}`);
}
RacketSports.prototype.checkInfo = function(info){
    this.info = info;
    if(!this.info){
        console.log('No info provided')
    }else {
        console.log(this.info);
    };
}
RacketSports.prototype.checkYourScore = function(score, info){
    this.score = score;
    console.log(`Your score is ${this.score}`);
    return 'info';
}

const a = new RacketSports();
a.checkYourScore(24);
console.log(a);
const b = new Athletics();
b.start('run');