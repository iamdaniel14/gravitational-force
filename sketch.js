let particles=[];
function setup (){
createCanvas (windowWidth,windowHeight);

for(let i=0; i<50; i++) {
    let x=random(width);
    let y=random (height);
    particles [i]=new Particles (x,y);
}

}

function draw (){
background ('blue');
let x=mouseX/10
console.log(x)
let force= createVector(0.001,0.1)
for (let p of particles){
    p.show();
    p.update();
    p.applyForce (force);
}

}
