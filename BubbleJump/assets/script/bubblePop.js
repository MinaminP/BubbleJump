cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('touchstart', this.bubble_pop_animation, this);
        //this.Rigid_Body = this.node.getComponent(cc.RigidBody);
    },

    bubble_pop(){
        console.log("bubble pop");
        Global.maxSpawn++;
        Global.isPopped = true;
        this.node.destroy();
    },

    bubble_pop_animation(){
        this.node.getComponent(cc.Animation).play();
    }
});
