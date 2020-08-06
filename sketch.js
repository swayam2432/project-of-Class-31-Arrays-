const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var plinkos = [];
var particles = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
    var canvas = createCanvas(480, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, 790, width, 20);

    //plinkos work started

    for (var j = 40; j <= width; j = j + 50) {
        plinkos.push(new Plinko(j, 75));
    }

    for (var j = 15; j <= width - 10; j = j + 50) {
        plinkos.push(new Plinko(j, 155));
    }

    for (var Q = 40; Q <= width; Q = Q + 50) {
        plinkos.push(new Plinko(Q, 240));
    }

    for (var P = 15; P <= width - 10; P = P + 50) {
        plinkos.push(new Plinko(P, 325));
    }

    for (var D = 40; D <= width; D = D + 50) {
        plinkos.push(new Plinko(D, 410));
    }

    //End

    for (var k = 0; k <= width; k = k + 80) {
        divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
    }


}

function draw() {
    background(0);
    Engine.update(engine);

    //started from plinkos


    for (var l = 0; l < plinkos.length; l++) {
        plinkos[l].display();
    }

    for (var m = 0; m < plinkos.length; m++) {
        plinkos[m].display();
    }

    for (var a = 0; a < plinkos.length; a++) {
        plinkos[a].display();
    }

    for (var G = 0; G < plinkos.length; G++) {
        plinkos[G].display();
    }

    for (var K = 0; K < plinkos.length; K++) {
        plinkos[K].display();
    }

    //ended plinkos Work


    //this for loop is for particles
    if (frameCount % 60 === 0) {
        particles.push(new Particle(random(width / 2 - 100, width / 2 + 100), 30, 15));
    }

    //also for particles
    for (var j = 0; j < particles.length; j++) {
        particles[j].display();
    }



    // started Divisions Display Work

    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }

    //END

    ground.display();

}

