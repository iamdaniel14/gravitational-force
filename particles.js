
class Particles {
    constructor(x,y) {
this.pos=createVector(x,y);
this.vel=p5.Vector.random2D();
this.acc=createVector(0,1);
this.x=x;
this.y=y;
this.r=random(20,40);
    }

applyForce (force){
 //force=mass times acceleration
 this.acc.add(force);
        
    }


show (){
noStroke();
circle(this.pos.x,this.pos.y, this.r*2)
    }
update (){
this.pos.add(this.vel);
this.vel.add (this.acc);
this.acc.set(0,0)
this.edges();
    }
 edges(){

 if (this.pos.x>width-this.r ||this.pos.x<this.r) {  
      this.vel.x*=-1;
} else if (this.pos.y>height-this.r ||this.pos.y<this.r) {
 this.vel.y*=-1;
    }

    }
}