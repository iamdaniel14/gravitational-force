
class Particles {
constructor(x,y,col,mass) {
this.pos=createVector(x,y);
this.vel=p5.Vector.random2D();
this.acc=createVector(0,0);
this.col=col;
this.mass=mass;
this.r=sqrt(this.mass)*10;
    }

applyForce(force){
 //acc=force divide by mass 
 let f=p5.Vector.div(force,this.mass);
 this.acc.add(f);      
    }
show (){
fill(this.col)
noStroke();
circle(this.pos.x,this.pos.y, this.r*2);
    }


update (){
this.vel.add (this.acc);
this.vel.limit (4);
this.pos.add(this.vel);
this.acc.set(0,0); //rest acceleration to 0 in every frame
this.edges();
    }

 edges () {
if (this.pos.x>width-this.r || this.pos.x<this.r){

    this.vel.x*=-1;
} else if (this.pos.y>height-this.r || this.pos.y<this.r){
this.vel.y*=-1;
}

    }

}