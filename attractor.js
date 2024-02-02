class Attractor{
 constructor(){
this.pos=createVector (width/2,height/2);
this.EarthMass =50;
this.r=sqrt(this.EarthMass)*20;
this.G=1.7;
    }

show (){
circle(this.pos.x,this.pos.y,this.r*2);
    }
 attract(particles,checkbox){
let force=p5.Vector.sub(this.pos,particles.pos);
let dSqr=force*force;
dSqr=constrain(dSqr,2,(width,height)); //limit the distance square btn 0 and (width,height);
force.normalize();
let strength=this.G*(this.EarthMass*particles.mass)/dSqr;
force.setMag(strength);

if(checkbox.checked()) { 
particles.applyForce(force);
    }}
}