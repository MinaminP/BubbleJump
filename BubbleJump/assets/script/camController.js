
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
        this.node.setPosition(currentPos);

    },
});
