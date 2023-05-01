//Parent of all classes
class OlympicSport {
    #year;
    constructor(team, sportName, year){
        this.team = team;
        this.sportName = sportName;
        this.#year = year;
    }
    win(sportName){
        console.log(`Partisipant won ${sportName} competition`);
    }
    compete(){
        console.log(`Olympics competition is every ${this.#year} years`);
    }
    #represent(){
        if (this.team === 'Ukraine') {
            return 'winner';
        }
        else {
            return 0;
        }
    }
    getTeam(){
        return this.#represent();
    }
}

const u = new OlympicSport('Ukraine', 'Gym', 4);
console.log(u.getTeam());

//Child class of OlympicSport class and parent for StrokeSwimming and TeamSwimming
class Swimming extends OlympicSport{
    #distance;
    constructor(team, sportName, style, approach, distance){
        super(team, sportName);
        this.style = style;
        this.approach = approach;
        this.#distance = distance;
    }
    swim(sportName, style){
        this.sportName = sportName;
        this.style = style;
        if (sportName.toLowerCase() === 'swimming') {
            console.log(`Partisipant is swimming using ${style}`);
        }else {
            console.log('You r checking wrong sport');
        }
    }
    lead(){
        console.log(`Partisipant is leading the ${this.#distance} race`);
    }
    coach(approach){
        this.approach = approach;
        if (approach) {
            return 1;
        } else {
            return 0;
        }
    }
}
const p = new Swimming();
p.swim('Swimming', 'batterfly');
console.log(p);
//child class of Swimming class
class StrokeSwimming extends Swimming {
    #position;
    constructor(team, sportName, style, approach, distance, stroke, record, position){
        super(team, sportName, style, approach, distance);
        this.stroke = stroke;
        this.#position = position;
        this.record = record;
    }
    swimIndividualy(position){
        this.#position = position
        console.log(`Partisipant is ${this.#position}`);
    }
    #getStroke(stroke){
       if(['butterfly', 'freestyle', 'backstroke', 'breaststroke', 'Sidestroke'].includes(stroke)){
            console.log('Good choice!');
            return;
        }else {
            throw new Error ('Please select correct stroke');
        }
    }
    chooseStroke(stroke){
        this.stroke = stroke
        return this.#getStroke(stroke);
    }
    fixRecord(record){
        this.record = record;
        if (record < 10) {
            console.log('Fix your record');
        }
    }
}
const k = new StrokeSwimming();
k.chooseStroke('freestyle');
console.log(k);
//child class of Swimming class
class TeamSwimming extends Swimming {
    #direction;
    constructor(team, sportName, style, approach, distance, gameName, numberOfPartisipants, direction){
        super(team, sportName, style, approach, distance);
        this.gameName = gameName;
        this.numberOfPartisipants = numberOfPartisipants;
        this.#direction = direction;
    }
    swimWithTeam(gameName){
        this.gameName = gameName;
        console.log(`Partisipants are competing in ${this.gameName}`);
    }
    game(gameName, numberOfPartisipants){
        this.gameName = gameName;
        this.numberOfPartisipants = numberOfPartisipants;
        console.log(`Start a ${this.gameName} with ${numberOfPartisipants} partisipants!`);
    }
    fail(direction){
        this.#direction = direction;
        console.log(`Failed to follow correct ${direction} direction`);
    }
}
const t = new TeamSwimming();
t.fail('forward');
//child class of OlympicSport class
class Athletics extends OlympicSport {
    #origin;
    constructor(team, sportName, trackOrField, usedEquipment){
        super(team, sportName);
        this.trackOrField = trackOrField;
        this.#origin = 'white line';
        this.usedEquipment = usedEquipment;
    }
    start(sportName){
        this.sportName = sportName;
        console.log(`Partisipant started to ${this.sportName} from ${this.#origin}.`);
    }
    finsih(){
        console.log(`Partisipants has all finished`);
    }
    selectEquipment(usedEquipment){
        this.usedEquipment = usedEquipment;
        alert(`You have selected ${this.usedEquipment}`);
    }
}
//child class of OlympicSport class
class RacketSports extends OlympicSport {
    #info;
    constructor(team, sportName, racketType, ballType, score, info){
        super(team, sportName);
        this.racketType = racketType;
        this.ballType = ballType;
        this.score = score;
        this.#info = info;
    }
    hit(ballType, racketType){
        this.ballType = ballType;
        this.racketType = racketType;
        console.log(`Partisipant hit ${this.ballType} with ${this.racketType}`);
    }
    #checkInfo(info){
        this.info = info;
        if(!this.info){
            console.log('No info provided')
        }else {
            console.log(this.info);
        };
    }
    checkYourScore(score, info){
        this.score = score;
        console.log(`Your score is ${this.score}`);
        return this.#checkInfo(info);
    }
}

const a = new RacketSports();
a.checkYourScore(24);

const b = new Athletics();
b.start('run');