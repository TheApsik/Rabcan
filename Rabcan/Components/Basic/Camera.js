function Camera(){
    var gameObject;
    var game;
    var listDrawObjects;

    this.Start = function(v){
        gameObject = v.parent;
        game = gameObject.getParent();
        game.getComponentsImplementingClass("Graphic");
    };

    this.RenderObject = function(){

    };
}
