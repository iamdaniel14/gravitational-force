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
 attract(mover){
let force=p5.Vector.sub(this.pos,mover.pos);
let dSqr=force*force;
dSqr=constrain(dSqr,0,(width,height)); //limit the distance square btn 0 and (width,height);
force.normalize();
let strength=this.G*(this.EarthMass*mover.mass)/dSqr;
force.setMag(strength);
mover.applyForce(force);
    }
}