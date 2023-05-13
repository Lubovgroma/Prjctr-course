//Parent prototype of all classes
const OlympicSport = function (team, sportName, year) {
    this.team = team;
    this.sportName = sportName;
    this.year = year;
}

OlympicSport.prototype.win = function () {
    return `Partisipant won ${this.sportName} competition`;
}
OlympicSport.prototype.compete = function () {
    return `Olympics competition is every ${this.year} years`;
}
OlympicSport.prototype.getTeamRepresentation = function () {
    return `${this.team} team with represent their country`
}
const u = new OlympicSport('Ukraine', 'Gym', 4);
console.log(u.getTeamRepresentation());

//Child prototype of OlympicSport class and parent for StrokeSwimming and TeamSwimming
const Swimming = function(team, sportName, year, style, approach, distance){
    OlympicSport.call(this, team, sportName, year);
    this.style = style;
    this.approach = approach;
    this.distance = distance;
}
Swimming.prototype = Object.create(OlympicSport.prototype);

Swimming.prototype.swimUsingStyle = function(){
    if (this.sportName.toLowerCase() === 'swimming') {
        `Partisipant is swimming using ${this.style}`;
    }else {
        return 'You r checking wrong sport';
    }
}
Swimming.prototype.lead = function(){
    return `Partisipant is leading the ${this.distance} race`;
}
Swimming.prototype.start = function(){
    return `Partisipant started ${this.distance} race`;
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

StrokeSwimming.prototype.swimIndividualy = function(){
    return `Partisipant is ${this.position}`;
}
StrokeSwimming.prototype.getStroke = function(stroke){
    if(['butterfly', 'freestyle', 'backstroke', 'breaststroke', 'Sidestroke'].includes(stroke)){
        return 'Good choice!';
        
    }else {
        throw new Error ('Please select correct stroke');
    }
}
StrokeSwimming.prototype.chooseStroke = function(){
    return `Selected stroke ${this.stroke}`;
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

TeamSwimming.prototype.swimWithTeam = function(){
    `Partisipants are competing in ${this.gameName}`;
}
TeamSwimming.prototype.game = function(){
    `Start a ${this.gameName} with ${numberOfPartisipants} partisipants!`;
}
TeamSwimming.prototype.fail = function(){
    `Failed to follow correct ${direction} direction`;
}

const t = new TeamSwimming();
t.fail('forward');
console.log(t);
//child prototype of OlympicSport class
const Athletics = function(team, sportName, year, trackOrField, usedEquipment) {
    OlympicSport.call(this, team, sportName, year);
    this.trackOrField = trackOrField;
    this.origin = 'white line';
    this.usedEquipment = usedEquipment;
}
Athletics.prototype = Object.create(OlympicSport.prototype);
Athletics.prototype.start = function(){
    return `Partisipant started to ${this.sportName} from ${this.origin}.`;
}
Athletics.prototype.finsih = function(){
    return `Partisipants has all finished`;
}
Athletics.prototype.selectEquipment = function(){
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
RacketSports.prototype.hit = function(){
    return `Partisipant hit ${this.ballType} with ${this.racketType}`;
}
RacketSports.prototype.checkInfo = function(){
    if(!this.info){
        return 'No info provided';
    }else {
        return this.info;
    };
}
RacketSports.prototype.checkYourScore = function(){
    console.log(`Your score is ${this.score}`);
    return 'info';
}

const a = new RacketSports();
a.checkYourScore(24);
console.log(a);
const b = new Athletics();
b.start('run');