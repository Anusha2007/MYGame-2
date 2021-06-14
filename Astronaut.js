class Astronaut{
    constructor(x,y,width,height){
        var options={
            density:0.1,
            friction:0.01,
            isStatic:true

        }
       this.width=width;
       this.height=height;
       this.body=Bodies.rectangle(x,y,width,height,options);
       World.add(myworld,this.body);

    }

    display(){
        push();
        rectMode (CENTER);
        fill("blue");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}
//shiril.sachdeva@gmail.com