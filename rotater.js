class Rotater {
  constructor(x, y, w, h,colors) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colors=colors;
    
    var Options = {

        isStatic:true


    }
    this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,Options)
    World.add(world,this.body)


  }
  show(){
    Matter.Body.rotate(this.body,angle)
    push();
     translate(this.body.position.x,this.body.position.y);
     rotate(angle);
     fill(this.colors)
     rect(0,0,this.w,this.h);
     pop();
     
     angle +=0.01;
   

  }


  
}
