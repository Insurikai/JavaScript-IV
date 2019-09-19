/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

function GameObject(obj) {
    this.createdAt = obj.createdAt;
    this.name = obj.name;
    this.dimensions = obj.dimensions;
}
GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`;
};

function CharacterStats(obj) {
    GameObject.call(this, obj);
    this.healthPoints = obj.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage.`
}

function Humanoid(obj) {
    CharacterStats.call(this, obj);
    this.team = obj.team;
    this.weapons = obj.weapons;
    this.language = obj.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`
}

/************* Refactored ************/

class GameObject{
    constructor(args){
    this.createdAt = args.createdAt;
    this.name = args.name;
    this.dimensions = args.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game.`;
    };
}
class CharacterStats extends GameObject {
    constructor(args){
        super(args);
        this.healthPoints = args.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`
    }
}