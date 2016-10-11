function Vector2(x,y){
    //@Areas
    // public
    this.x = x;
    this.y = y;

    //@Enums
    this.UP = function(){return new Vector2(0,1);};
    this.ONE = function(){return new Vector2(1,1);};
    this.ZERO = function(){return new Vector2(0,0);};
    this.DOWN = function(){return new Vector2(0,-1);};
    this.LEFT = function(){return new Vector2(-1,0);};
    this.RIGHT = function(){return new Vector2(1,0);};

    //@Methods
    // public
    this.clone = function () {
        return new Vector2(this.x, this.y);
    };

    this.equal = function (vector) {
        return this.x == vector.x && this.y == vector.y;
    };

    this.same = function(number){
        return new Vector2(number, number);
    };
    
    this.set = function (x,y) {
        this.x = x;
        this.y = y;
    };
    
    this.copy = function (vector) {
        this.x = vector.x;
        this.y = vector.y;
    };

    this.add = function (value) {
        if(value instanceof Vector2) {
            this.x += value.x;
            this.y += value.y;
        }else if(value instanceof Number){
            this.x += value;
            this.y += value
        }else
            throw Error("TypeVariableException: Parameter value is not Vector/Number");
    };

    this.share = function (value) {
        if(value instanceof Vector2) {
            this.x /= value.x;
            this.y /= value.y;
        }else if(value instanceof Number){
            this.x /= value;
            this.y /= value
        }else
            throw Error("TypeVariableException: Parameter value is not Vector/Number");
    };

    this.subtract = function(value){
        if(value instanceof Vector2) {
            this.x -= value.x;
            this.y -= value.y;
        }else if(value instanceof Number){
            this.x -= value;
            this.y -= value
        }else
            throw Error("TypeVariableException: Parameter value is not Vector/Number");
    };

    this.multiply = function (value) {
        if(value instanceof Vector2) {
            this.x *= value.x;
            this.y *= value.y;
        }else if(value instanceof Number){
            this.x *= value;
            this.y *= value
        }else
            throw Error("TypeVariableException: Parameter value is not Vector/Number");
    };
}