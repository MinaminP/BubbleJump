
cc.Class({
    extends: cc.Component,

    properties: {
       playerNode:cc.Node,
    },

    update (dt) {
        let targetPos = this.playerNode.getPosition();

        targetPos.x = cc.misc.clampf(targetPos.x,0,0);

        let currentPos = this.node.getPosition();

        currentPos.lerp(targetPos,0.1,currentPos);

        //currentPos.x = cc.misc.clampf(targetPos.x,0,0);

        this.node.setPosition(currentPos);

    },
});
