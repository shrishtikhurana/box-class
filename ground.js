class Ground{
    constructor(x,y,wh,hit){
        var opt={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,wh,hit,opt);
        this.width=wh;
        this.height=hit;
        World.add(world,this.body);

    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
    
}