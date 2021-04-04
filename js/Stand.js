class Stand{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        //this.body = the bdy of rectangle, and factors - same with widh 
        //and height
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //add world to the stand - 
        World.add(world, this.body);
      }
      display(){
        //code to fully display and give animations to stand 
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}