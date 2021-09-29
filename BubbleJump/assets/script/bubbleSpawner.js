// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        bubblePrefab: cc.Prefab,
        //camera: cc.Node,
        posX:0,
        posY:0,
        //nodeCanvas: cc.Node,
        maxSpawn: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //this.node.on('mousemove', this.mouse_position, this);
        this.node.on('mousedown', this.bubble_spawn, this);
    },

    bubble_spawn:function(event){
        var mousePos = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("mouse clicked at" + event.getLocation());
        //var currentPos = this.node.getPosition();

        //currentPos.lerp(targetPos,0.1,currentPos);
        if(this.maxSpawn > 0){
            var bubble = cc.instantiate(this.bubblePrefab);
            this.node.addChild(bubble);
            
            this.posX = mousePos.x;
            this.posY = mousePos.y;

            bubble.setPosition(mousePos);
            //bubble = this.target;
            //this.maxSpawn--;
        }
    },
});
