cc.Class({
    extends: cc.Component,

    properties: {
       bubbleRoot: cc.Node,
       explosionForce: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onBeginContact(contact, selfCollider, otherCollider){
       
        if(otherCollider.body.type == cc.RigidBodyType.Dynamic && otherCollider.node != this.bubbleRoot){
            var otherPos = otherCollider.node.getPosition();
            var selfPos = this.bubbleRoot.getPosition();

            var forceVector = otherPos.sub(selfPos);
            forceVector.normalizeSelf();
            forceVector.mulSelf(100000);

            otherCollider.body.applyForceToCenter(forceVector);
        }

    },

    start () {

    },

    // update (dt) {},
});
