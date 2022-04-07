class Snow {

    constructor(x,y,){

        var options = {
            isStatic : false
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("snow4.webp");
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        imageMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        angleMode(RADIANS);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}