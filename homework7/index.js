//Parent of all classes
class OlympicSport {
    #year;
    constructor(type, sportName){
        this.type = type;
        this.sportName = sportName;
        this.#year = 'year';
    }
    win(){
        console.log('Partisipant won competition');
    }
    compete(){
        console.log(`Partisipant compete for the best final score`);
    }
    lose(){
        console.log(`Partisipant lose competition`);
    }
}
//Child class of OlympicSport class and parent for StrokeSwimming and TeamSwimming
class Swimming extends OlympicSport{
    #distance;
    constructor(type, sportName, style, approach){
        super(type, sportName);
        this.style = style;
        this.approach = approach;
        this.#distance = 'distance';
    }
    swim(){
        console.log('Partisipant is swimming');
    }
    lead(){
        console.log('Partisipant is leading the race');
    }
    coach(){
        console.log(`Coaching is in progress`);
    }
}
//child class of Swimming class
class StrokeSwimming extends Swimming {
    #position;
    constructor(style, approach, distance, stroke, record){
        super(type, sportName, style, approach, distance);
        this.stroke = stroke;
        this.#position = 'Face front';
        this.record = record;
    }
    swimIndividualy(style){
        this.style = style;
        console.log(`Partisipant is swimming in ${this.style} style`);
    }
    chooseStroke(stroke){
        if(['butterfly', 'freestyle', 'backstroke', 'breaststroke', 'Sidestroke'].includes(size)){
            this.stroke = stroke;
        }
        else {
            throw new Error ('Please select correct stroke');
        }
    }
    fixRecord(record){
        this.record = record;
    }
}
//child class of Swimming class
class TeamSwimming extends Swimming {
    #direction;
    constructor(style, approach, distance, gameName, numberOfPartisipants){
        super(type, sportName, style, approach, distance);
        this.gameName = gameName;
        this.numberOfPartisipants = numberOfPartisipants;
        this.#direction = 'forward';
    }
    swimWithTeam(gameName){
        this.gameName = gameName;
        console.log(`Partisipants are competing in ${this.gameName}`);
    }
    game(gameName, numberOfPartisipants){
        this.gameName = gameName;
        this.numberOfPartisipants === numberOfPartisipants;
        console.log(`Start a ${this.gameName} with ${numberOfPartisipants} partisipants!`);
    }
    fail(){
        console.log(`team failed`);
    }
}
//child class of OlympicSport class
class Athletics extends OlympicSport {
    #origin;
    constructor(type, sportName, trackOrField, usedEquipment){
        super(type, sportName);
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
    constructor(type, sportName, racketType, ballType, score){
        super(type, sportName);
        this.racketType = racketType;
        this.ballType = ballType;
        this.score = score;
        this.#info = 'Private';
    }
    hit(ballType, racketType){
        this.ballType = ballType;
        this.racketType = racketType;
        console.log(`Partisipant hit ${this.ballType} with ${this.racketType}`);
    }
    chooseSport(sportName){
        this.sportName = sportName;
    }
    checkYourScore(score){
        this.score = score;
        console.log(`Your score is ${this.score}`);
    }
}

const a = new RacketSports();
a.checkYourScore(24);

const b = new Athletics();
b.start('run');