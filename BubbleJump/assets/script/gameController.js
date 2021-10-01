cc.Class({
    extends: cc.Component,

    properties: {
       
    },
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.physicsManager();
        window.Global = {
            maxSpawn: 4,
            isPopped: false,
        };
    },
    
    physicsManager(){
        let physics_manager = cc.director.getPhysicsManager();
        physics_manager.enabled = true;
        physics_manager.gravity = cc.v2(0, -2000);
    },
});
