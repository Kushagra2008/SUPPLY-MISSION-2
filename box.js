class dustbin
{
    constructor(x, y)
    {
        var options = 
        {
            restitution:0,
            density: 1,
            friction: 1,
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 200;
        this.angle = 1;
        this.thickness = 20;
        this.left_body = Bodies.rectangle(this.x-this.width/2 - 10, this.y-this.height/2 + 10, this.thickness, this.height, options);
        Matter.Body.setAngle(this.left_body, this.angle);

        this.right_body = Bodies.rectangle(this.x+this.width/2 + 10, this.y-this.height/2 + 10, this.thickness, this.height, options);
        Matter.Body.setAngle(this.right_body, this.angle * (-1));

        this.bottom_body = Bodies.rectangle(this.x, this.y, this.width, this.thickness, options);
        World.add(world, this.left_body);
        World.add(world, this.right_body);
        World.add(world, this.bottom_body);
    }
    display()
    {
        var pos1 = this.left_body.position;
        var pos2 = this.right_body.position;
        var pos3 = this.bottom_body.position;
        //var he = this.body.width;
        //var wi = this.body.height;
        push();
        translate(pos1.x, pos1.y);
        rotate(this.angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.thickness, this.height);
        pop();

        push();
        translate(pos2.x, pos2.y);
        rotate(this.angle * (-1));
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.thickness, this.height);
        pop();

        push();
        translate(pos3.x, pos3.y);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.thickness);
        pop();
    }
};
