let particles=[];
let attractor;
 let colors = ['#9d686b' ,'#3d4355' ,'#c18512' ,'#c68413','#d2be68','#a53e2c' ,'#41556d','#cf9f6d','#661f24','#73343c','#aa926e',
 '#e4a77b','#a8585b','#b0865c','#cf4145','#3d4349','#d9be70','#1c1734','#48030d' ,'#884f51','#a98214','#98676b','#d08913','#936d1b' ,'#64545f' ,'#64545f','#1b263b','#1b263b' ,'#bf504b' ,'#bd9f7a' ,'#26242f' ,'#b09d7c','#928e67','#a35120','#41495c'];
 let range;
 let checkbox; 
 let numberOfParticles;

function setup (){
createCanvas (windowWidth,windowHeight);

//numberOfParticles=select('#numberOfParticles');
backColor=select ('#col');
checkbox=select('#checkbox');

attractor=new Attractor ();
 numberOfParticles=int(width/100); 


 for(let i=0; i<numberOfParticles; i++) {
   let x=random(width);
   let y=random (height);
   let col=random(colors);
   let mass=random (4,20);
   particles [i]=new Particles (x,y,color(col),mass);
}

}

function draw (){

background (backColor.value());


for (let p of particles){
   // p.applyForce()
    p.update();
    p.show();
 attractor.attract(p,checkbox);
}

document.querySelector('#numberOfParticles').innerHTML=numberOfParticles;

}

function mousePressed(){

    let x=mouseX;
    let y=mouseY;
    let col=random(colors);
    let mass=random (4,20);
    let p=new Particles (x,y,color(col),mass);
    numberOfParticles++;
    particles.push(p);
}

function windowResized () {
    resizeCanvas (windowWidth,windowHeight);
    setup()
  }
