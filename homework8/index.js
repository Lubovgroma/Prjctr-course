//Parent prototype of all classes
const OlympicSport = function (team, sportName, year) {
    this.team = team;
    this.sportName = sportName;
    this.year = year;
}

OlympicSport.prototype.checkIfwon = function () {
    return `Partisipant won ${this.sportName} competition`;
}
OlympicSport.prototype.getYear = function () {
    return `Olympics competition is every ${this.year} years`;
}
OlympicSport.prototype.getTeamRepresentation = function () {
    return `${this.team} team with represent their country`
}

//Child prototype of OlympicSport class and parent for StrokeSwimming and TeamSwimming
const Swimming = function(team, sportName, year, style, approach, distance){
    OlympicSport.call(this, team, sportName, year);
    this.style = style;
    this.approach = approach;
    this.distance = distance;
}
Swimming.prototype = Object.create(OlympicSport.prototype);

Swimming.prototype.checkStyle = function(){
    if (this.sportName.toLowerCase() === 'swimming') {
        `Partisipant is swimming using ${this.style}`;
    }else {
        return 'You r checking wrong sport';
    }
}
Swimming.prototype.getApproach = function(){
    return this.approach;
}
Swimming.prototype.checkDistance = function(){
    return `Partisipant started ${this.distance} race`;
}

//child prototype of Swimming class
const StrokeSwimming = function(team, sportName, style, approach, distance, stroke, record, position) {
    Swimming.call(this, team, sportName, style, approach, distance);
    this.stroke = stroke;
    this.position = position;
    this.record = record;
}
StrokeSwimming.prototype = Object.create(Swimming.prototype);

StrokeSwimming.prototype.checkPosition = function(){
    return `Partisipant is ${this.position}`;
}
StrokeSwimming.prototype.getStroke = function(){
    if(['butterfly', 'freestyle', 'backstroke', 'breaststroke', 'Sidestroke'].includes(this.stroke)){
        return 'Good choice!';
        
    }else {
        throw new Error ('Please select correct stroke');
    }
}
StrokeSwimming.prototype.chooseStroke = function(){
    return `Selected stroke ${this.stroke}`;
}
StrokeSwimming.prototype.fixRecord = function(){
    if (this.record < 10) {
        return 'Fix your record';
    } else {
        return 'Good job!';
    }
}

//child prototype of Swimming class
const TeamSwimming = function(team, sportName, style, approach, distance, gameName, numberOfPartisipants, direction) {
    Swimming.call(this, team, sportName, style, approach, distance);
    this.gameName = gameName;
    this.numberOfPartisipants = numberOfPartisipants;
    this.capitan = capitan;
}
TeamSwimming.prototype = Object.create(Swimming.prototype);

TeamSwimming.prototype.getGameName = function(){
    return `Partisipants are competing in ${this.gameName}`;
}
TeamSwimming.prototype.checkGameInfo = function(){
    return `Start a ${this.gameName} with ${this.numberOfPartisipants} partisipants!`;
}
TeamSwimming.prototype.checkWhoIsCapitan = function(){
    return `Capitan is ${this.capitan}`;
}
//child prototype of OlympicSport class
const Athletics = function(team, sportName, year, trackOrField, usedEquipment) {
    OlympicSport.call(this, team, sportName, year);
    this.trackOrField = trackOrField;
    this.origin = 'white line';
    this.usedEquipment = usedEquipment;
}
Athletics.prototype = Object.create(OlympicSport.prototype);
Athletics.prototype.checkOrigin = function(){
    return `Partisipant started ${this.sportName} from ${this.origin}.`;
}
Athletics.prototype.checkTrackOfField = function(){
    return this.trackOrField;
}
Athletics.prototype.checkSelectedEquipment = function(){
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
RacketSports.prototype.checkBallAndRacketType = function(){
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
