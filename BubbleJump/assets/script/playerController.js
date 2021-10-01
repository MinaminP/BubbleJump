cc.Class({
    extends: cc.Component,

    properties: {
        maxVelocityX: 0,
        walkForce: 0,
        jumpForce: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
        this.Rigid_Body = this.node.getComponent(cc.RigidBody);
        this.Direction = 0;
        this.Grounded = false;
    },

    onKeyPressed(event){
        let key_code = event.keyCode;
        switch(key_code){
            case cc.macro.KEY.left:
                this.Direction = -1;
            break;
            case cc.macro.KEY.right:
                this.Direction = 1;
            break;    
            //case cc.macro.KEY.up:
              //  if(this.Grounded){
                //    this.Rigid_Body.applyForceToCenter(cc.v2(0, this.jumpForce), true);
                  //  this.Grounded = false;
                //}
            //break;    
        }
    },

    onKeyReleased(event){
       let key_code = event.keyCode;
        switch(key_code){
            case cc.macro.KEY.left:
            case cc.macro.KEY.right:
                this.Direction = 0;
            break;    
        }
    },

    onBeginContact(contact, selfCollider, otherCollider){
        if(selfCollider.tag == 2){
            this.Grounded = true;
        }
    },
    update (dt) {
        if((this.Direction > 0 && this.Rigid_Body.linearVelocity.x < this.maxVelocityX) || 
        (this.Direction < 0 && this.Rigid_Body.linearVelocity.x > -this.maxVelocityX)){
            this.Rigid_Body.applyForceToCenter(cc.v2(this.Direction*this.walkForce,0),true);
        }

    },
});
