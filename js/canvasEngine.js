function DEBUG(message){
    console.log(message);
}

// ----------------------------------------- Class Values -------------------------------------------------------------------------
var KeyCode = {
    BACKSPACE : { symbol: "BACKSPACE", value: 8 },
    TAB: { symbol : "TAB", value: 9 },
    ENTER: { symbol: "ENTER", value: 13 },
    SHIFT: { symbol: "SHIFT", value: 16 },
    CTRL: { symbol: "CTRL", value: 17 },
    ALT: { symbol: "ALT", value: 18 },
    PAUSE: { symbol: "PAUSE/BREAK", value: 19 },
    BREAK: { symbol: "PAUSE/BREAK", value: 19 },
    CAPS_LOCK: { symbol: "CAPS_LOCK", value: 20 },
    ESCAPE: { symbol: "ESCAPE", value: 27 },
    SPACE: {symbol: " ", value: 32 },
    PAGE_UP: { symbol: "PAGE_UP", value: 33 },
    PAGE_DOWN: { symbol: "PAGE_DOWN", value: 34 },
    END: { symbol: "END", value: 35 },
    HOME: { symbol: "HOME", value: 36 },
    LEFT_ARROW: { symbol: "LEFT_ARROW", value: 37 },
    UP_ARROW: { symbol: "UP_ARROW", value: 38 },
    RIGHT_ARROW: { symbol: "RIGHT_ARROW", value: 39 },
    DOWN_ARROW: { symbol: "DOWN_ARROW", value: 40 },
    INSERT: { symbol: "INSERT", value: 45 },
    DELETE: { symbol: "DELETE", value: 46 },
    ZERO: { symbol: '0', value: 48 },
    ONE: { symbol: '1', value: 49 },
    TWO: { symbol: '2', value: 50 },
    THREE: { symbol: '3', value: 51 },
    FOUR: { symbol: '4', value: 52 },
    FIVE: { symbol: '5', value: 53 },
    SIX: { symbol: '6', value: 54 },
    SEVEN: { symbol: '7', value: 55 },
    EIGHT: { symbol: '8', value: 56 },
    NINE: { symbol: '9', value: 57 },
    A: { symbol: 'A', value: 65 },
    B: { symbol: 'B', value: 66 },
    C: { symbol: 'C', value: 67 },
    D: { symbol: 'D', value: 68 },
    E: { symbol: 'E', value: 69 },
    F: { symbol: 'F', value: 70 },
    G: { symbol: 'G', value: 71 },
    H: { symbol: 'H', value: 72 },
    I: { symbol: 'I', value: 73 },
    J: { symbol: 'J', value: 74 },
    K: { symbol: 'K', value: 75 },
    L: { symbol: 'L', value: 76 },
    M: { symbol: 'M', value: 77 },
    N: { symbol: 'N', value: 78 },
    O: { symbol: 'O', value: 79 },
    P: { symbol: 'P', value: 80 },
    Q: { symbol: 'Q', value: 81 },
    R: { symbol: 'R', value: 82 },
    S: { symbol: 'S', value: 83 },
    T: { symbol: 'T', value: 84 },
    U: { symbol: 'U', value: 85 },
    V: { symbol: 'V', value: 86 },
    W: { symbol: 'W', value: 87 },
    X: { symbol: 'X', value: 88 },
    Y: { symbol: 'Y', value: 89 },
    Z: { symbol: 'Z', value: 90 },
    LEFT_WINDOW_KEY: { symbol: "LEFT_WINDOW_KEY", value: 91 },
    RIGHT_WINDOW_KEY: { symbol: "RIGHT_WINDOW_KEY", value: 92 },
    SELECT_KEY: { symbol: "SELECT_KEY", value: 93 },
    NUMPAD_0: { symbol: "NUMPAD_0", value: 96 },
    NUMPAD_1: { symbol: "NUMPAD_1", value: 97 },
    NUMPAD_2: { symbol: "NUMPAD_2", value: 98 },
    NUMPAD_3: { symbol: "NUMPAD_3", value: 99 },
    NUMPAD_4: { symbol: "NUMPAD_4", value: 100 },
    NUMPAD_5: { symbol: "NUMPAD_5", value: 101 },
    NUMPAD_6: { symbol: "NUMPAD_6", value: 102 },
    NUMPAD_7: { symbol: "NUMPAD_7", value: 103 },
    NUMPAD_8: { symbol: "NUMPAD_8", value: 104 },
    NUMPAD_9: { symbol: "NUMPAD_9", value: 105 },
    MULTIPLY: { symbol: "*", value: 106 },
    ADD: { symbol: "+", value: 107 },
    SUBTRACT: { symbol: "-", value: 109 },
    DECIMAL_POINT: { symbol: ".", value: 110 },
    DIVIDE: { symbol: "/", value: 111 },
    F1: { symbol: "F1", value: 112 },
    F2: { symbol: "F2", value: 113 },
    F3: { symbol: "F3", value: 114 },
    F4: { symbol: "F4", value: 115 },
    F5: { symbol: "F5", value: 116 },
    F6: { symbol: "F6", value: 117 },
    F7: { symbol: "F7", value: 118 },
    F8: { symbol: "F8", value: 119 },
    F9: { symbol: "F9", value: 120 },
    F10: { symbol: "F10", value: 121 },
    F11: { symbol: "F11", value: 122 },
    F12: { symbol: "F12", value: 123 },
    NUM_LOCK: { symbol: "NUM_LOCK", value: 144 },
    SCROLL_LOCK: { symbol: "SCROLL_LOCK", value: 145 },
    SEMICOLON: { symbol: ';', value: 186 },
    EQUAL_SING: { symbol: '=', value: 187 },
    COMMA: { symbol: ',', value: 188 },
    PERIOD: { symbol: '.', value: 190 },
    SLASH: { symbol: "SLESH", value: 191 },
    GRAVE_ACCENT: { symbol: "`", value: 192 },
    OPEN_BRACKET: { symbol: '[', value: 219 },
    BACK_SLASH: { symbol: "BACK_SLASH", value: 220 },
    CLOSE_BREAK: { symbol: ']', value: 221 },
    SINGLE_QUOTE: { symbol: "'", value: 222 }
};

function Vector2(x, y){
    // @Area
    this.x = x;
    this.y = y;

    this.RIGHT = function(){return new Vector2(0,1);};
    this.DOWN = function(){return new Vector2(-1,0);};
    this.LEFT = function(){return new Vector2(0,-1);};
    this.ZERO = function(){return new Vector2(0,0);};
    this.ONE = function(){return new Vector2(1,1);};
    this.UP = function(){return new Vector2(1,0);};
    this.SAME = function(value){return new Vector2(value, value);};

    this.clone = function (vector2){
        if(vector2 instanceof  Vector2)
            return new Vector2(vector2.x, vector2.y);
        if(vector2 == undefined)
            return new Vector2(this.x, this.y)
    };

    this.subtract = function(vector){
        this.x -= vector.x;
        this.y -= vector.y;

        return this;
    };

    this.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;

        return this;
    };

    this.multiply = function(vector){
        this.x *= vector.x;
        this.y *= vector.y;

        return this;
    };

    this.divide = function(vector){
        this.x /= vector.x;
        this.y /= vector.y;
        
        return this;
    };

    this.equal = function(vector){
        return vector.x === this.x && vector.y === this.y;
    };
    
    this.set = function(vector){
        if(vector instanceof  Vector2) {
            this.x = vector.x;
            this.y = vector.y;
        }
    };
}

function Shift(Value) {
    // @Area
    // private
    var value;
    var procent;

    // @Methods
    this.getValue = function(Value) {
        if(procent)
            return Value * value/100.0;
        return Value + value;
    }
    
    this.setValue = function(Value){
        value = parseFloat(Value);
        procent = Value.toString().indexOf('%') > -1;
    }
    
    this.clone = function(){
        return new Shift(value + procent ? '%' : 0);
    };

    // @Constructor
    this.setValue(Value);
}

function Size(height, width){
    this.height = height;
    this.width = width;

    this.clone = function (size){
        if(size instanceof  Size)
            return new Size(size.height, size.width);
        if(size == undefined)
            return new Size(this.height, this.width);
    };

    this.SAME = function(value){return new Size(value,value);};
    
    // do poprawy height i width moze byc shift'em
    this.subtract = function(value){
        if(value instanceof Shift){
            this.height -= value.getValue(this.height);
            this.width -= value.getValue(this.width);
        }else if(value instanceof Number){
            this.height -= value;
            this.width -= value;
        }
    };

    this.add = function (value) {
        if(value instanceof Shift){
            this.height += value.getValue(this.height);
            this.width += value.getValue(this.width);
        }else if(value instanceof Number){
            this.height += value;
            this.width += value;
        }
    };

    this.multiply = function(value){
        if(value instanceof Shift){
            this.height *= value.getValue(this.height);
            this.width *= value.getValue(this.width);
        }else if(value instanceof Number){
            this.height *= value;
            this.width *= value;
        }
    };

    this.share = function(value){
        if(value instanceof Shift){
            this.height /= value.getValue(this.height);
            this.width /= value.getValue(this.width);
        }else if(value instanceof Number){
            this.height /= value;
            this.width /= value;
        }
    };
}

var Verticaly = {
    TOP:0,
    CENTER:0.5,
    BOTTOM:1
}

var Horizontal = {
    LEFT:0,
    CENTER:0.5,
    RIGHT:1
}

function Point(Vert, Horiz){
    // @Area
    this.verticaly = Vert || Verticaly.TOP;
    this.horizontal = Horiz || Horizontal.LEFT;

    // @Methods
    this.getHorizontal = function(shift){
        return shift * this.horizontal;
    };

    this.getVertical = function(shift){
        return shift * this.verticaly;
    };
    
    this.clone = function(){
        var clonePoint = new Point();
        clonePoint.verticaly = this.verticaly;
        clonePoint.horizontal = this.horizontal;
        return clonePoint;
    };
}

function Foothold(x,y){
    // @Area
    this.point = new Point();
    this.position = {
        x: new Shift(x || 0),
        y: new Shift(y || 0)
    };

    // @Methods
    this.getPosition = function(size){
        return new Vector2(new Shift(size.width).getValue(this.point.getHorizontal(this.position.x.getValue(size.width))) - size.width,
            new Shift(size.height).getValue(this.point.getVertical(this.position.y.getValue(size.height))) - size.height);
    };
    
    this.clone = function (){
        var cloneFoothold = new Foothold(this.position.x.clone(), this.position.y.clone());
        cloneFoothold.point = this.point.clone();
        return cloneFoothold;
    };
}

function Color(r,g,b,a){
    // @Area
    // public
    this.r;
    this.g;
    this.b;
    this.a;

    // @Methods
    // private
    function addZERO(number){
        var nr = number.toString(16);
        return nr.length == 1 ? "0" + nr: nr;
    }

    // public
    this.setColor = function(r,g,b,a){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a == undefined ? 255 : a;
    };

    this.getColor = function(){
        return 'rgba('+ this.r +','+ this.g +','+ this.b +','+ (this.a/255) +')' ;
    };
    
    this.clone = function(){
        return new Color(this.r, this.g, this.b, this.a);
    };

    // @Constructor
    this.setColor(r,g,b,a);
}

function Space(Starting, Ending){
    this.starting = Starting instanceof Vector2 ? Starting : undefined;
    this.ending = Ending instanceof Vector2 ? Ending : undefined;
}
// ------------------------------------------------- Class Component-----------------------------------------------

function Camera(compoment){
    var gameObject;
    var game;
    var context2D;
    var gameObjects;
    this.size = new Size(new Shift('100%'), new Shift('100%'));

    this.Start = function(){
        gameObject = compoment.getParent();
        if(gameObject) {
            game = gameObject.getGame();
            context2D = game.getContext2D();
            gameObjects = game.getGameObjects();
        }
    };

    this.Update = function(){
        context2D.clearRect(0, 0, game.width(), game.height());

        for(var b = 0; b < gameObjects.length; b++){
            if(gameObjects[b] == undefined)
                continue;

            for(var c = 0; c < gameObjects[b].length; c++){
                if(gameObjects[b][c] == undefined)
                    continue;

                this.renderer(gameObjects[b][c]);
            }
        }

    };

    this.renderer = function(gameObject){
        var compShape = gameObject.getComponent('Shape');

        if(compShape == undefined)
            return;

        var shape = compShape.getScript();

        if(shape.show == false)
            return;

        this.draw(gameObject.transform.position, shape)
    };

    this.draw = function(pos, shape){
        context2D.beginPath();
        var comSize = gameObject.foothold.getPosition(new Size(this.size.height.getValue(game.height()),this.size.width.getValue(game.width())));
        var cameraPoz = gameObject.transform.position;
        var vector = pos.clone().add(comSize).subtract(cameraPoz);
        switch(shape.figure.getType()){
            case FigureType.square:
                var size = shape.getSize();
                context2D.rect(vector.x, vector.y, size.width, size.height);
                break;
            case FigureType.circle:
                var radius = shape.figure.radius;
                context2D.arc(vector.x + radius, vector.y + radius, radius, 0, 2*Math.PI);
                break;
            case FigureType.polyhedron:
                var mesh = shape.figure.mesh;
                context2D.moveTo(vector.x + mesh.getAngle(0).point.x, vector.y + mesh.getAngle(0).point.y);
                for(var i = 0; i<mesh.getAnglesLenght(); i++){
                    var angle = mesh.getLine(i);
                    if(angle[0].curvature.after.equal(new Vector2().ZERO()) && angle[1].curvature.before.equal(new Vector2().ZERO()))
                        context2D.lineTo(vector.x + angle[1].point.x, vector.y + angle[1].point.y);
                    else
                        context2D.bezierCurveTo(vector.x + angle[0].point.x + angle[0].curvature.after.x, vector.y + angle[0].point.y + angle[0].curvature.after.y,
                                                vector.x + angle[1].point.x + angle[1].curvature.before.x, vector.y + angle[1].point.y + angle[1].curvature.before.y,
                                                vector.x + angle[1].point.x, vector.y + angle[1].point.y);
                }
                context2D.closePath();
                break;
        }

        if(shape.material.fill){
            context2D.fillStyle = shape.material.backgroundColor.getColor();
            context2D.fill();
        }
        if(shape.material.stroke){
            context2D.strokeStyle = shape.material.borderColor.getColor();
            context2D.stroke();
        }
    };
}

function Curvature(before, after){
    this.before;
    this.after;

    this.clone = function(curvature){
        if(curvature instanceof Curvature)
            return new Curvature(curvature.before.clone(), curvature.after.clone());
        return new Curvature(this.before.clone(), this.after.clone());
    };
    
    // @Constructor
    if(before == undefined)
        this.before = new Vector2().ZERO();
    else if(before instanceof Vector2)
        this.before = before.clone();
    else if(Array.isArray(before)){
        if(before.length == 2)
            this.before = new Vector2(before[0], before[1]);
    }else
        throw Error("Curvature: Parameter 'before' have to be Vector2/Array[2]");

    if(after == undefined)
        this.after = new Vector2().ZERO();
    else if(after instanceof Vector2)
        this.after = after.clone();
    else if(Array.isArray(after)){
        if(after.length == 2)
            this.after = new Vector2(after[0], after[1]);
    }else
        throw Error("Curvature: Parameter 'after' have to be Vector2/Array[2]");
        
}

function Angle(position, curvature){
    this.point;
    this.curvature;
    this.getCorrectAngle = function(vector){
        var point = this.point.clone();
        var curvature = this.curvature.clone();
        point.subtract(vector);
        return new Angle(point, curvature);
    };

    this.clone = function(){
        return new Angle(this.point.clone(),this.curvature.clone());
    };
    
    // @Constructor
    if(position == undefined)
        this.point = new Vector2().ZERO();
    else if(position instanceof Vector2)
        this.point = position.clone();
    else if(Array.isArray(position)){
        if(position.length = 2) 
            this.point = new Vector2(position[0], position[1]);
    }else
        throw Error("Angle: Parameter 'position' have to be Vector2/Array[2]");

    if(curvature == undefined)
        this.curvature = new Curvature();
    else if(curvature instanceof Curvature)
        this.curvature = curvature.clone();
    else if(Array.isArray(curvature)){
        if(curvature.length == 2)
            this.curvature = new Curvature(curvature[0], curvature[1]);
    }else
        throw Error("Angle: Parameter 'curvature' have to be Curveture/Array[Vector2, Vector2]/Array[Array[2], Array[2]]");
}

function Mesh(value){
    // @Area
    // public
    var space;
    var angles; // Vector2
    
    // @Methods
    // private

    function findStartSpace(index){
        var smallX = angles[0].point.x;
        var smallY = angles[0].point.y;
        for(var i = 1; angles.length > i; i++){
            if(i == index)
                continue;

            if(smallX > angles[i].point.x)
                smallX = angles[i].point.x;

            if(smallY > angles[i].point.y)
                smallY = angles[i].point.y;
        }

        return new Vector2(smallX, smallY);
    };

    function findEndSpace(index){
        var highX = angles[0].point.x;
        var highY = angles[0].point.y;
        for(var i = 1; angles.length > i; i++){
            if(i == index)
                continue;

            if(highX < angles[i].point.x)
                highX = angles[i].point.x;

            if(highY < angles[i].point.y)
                highY = angles[i].point.y;
        }

        return new Vector2(highX, highY);
    }

    var checkSpace = function(angle){
        if(space == undefined)
            space = new Space(new Vector2().clone(angle.point), new Vector2().clone(angle.point));

        if(space.starting == undefined)
            space.starting = new Vector2().clone(angle.point);

        if(space.ending == undefined)
            space.ending = new Vector2().clone(angle.point);

        if(angle.point.x < space.starting.x)
            space.starting.x = angle.point.x;

        if(angle.point.x > space.ending.x)
            space.ending.x = angle.point.x;

        if(angle.point.y < space.starting.y)
            space.starting.y = angle.point.y;

        if(angle.point.y > space.ending.y)
            space.ending.y = angle.point.y;
    }.bind(this);

    // public
    this.addAngle = function(angle){
        if(angle instanceof Angle){
            var cAngle = angle.clone();
            angles.push(cAngle);
            checkSpace(cAngle);
        }
    };

    this.pushAngle = function(index, angle){
        if(angle instanceof Angle){
            if(angles.length > index) {
                angles.splice(index, 0, angle);
                checkSpace(angle);
            }
        }
    };

    this.changeAngle = function(index, angle){
        if(angle instanceof Angle){
            if(angles[index] != undefined) {
                angles[index] = angle;
                checkSpace(angle);
            }
        }
    };

    this.removeAngle = function(index){
        if(angles.length > index) {
            var angle = angles[index];
            if(angle.point.x == space.starting.x || angle.point.y == space.starting.y)
                space.starting = findStartSpace(index);
            if(angle.point.x == space.ending.x || angle.point.y == space.ending.y)
                space.ending = findEndSpace(index);
            angles.splice(index, 1);
        }
    };

    this.getSpace = function(){
        return new Size(space.ending.x - space.starting.x, space.ending.y - space.starting.y);
    };

    this.clone = function(mesh){
        var meshToClone;
        if(mesh instanceof Mesh)
            meshToClone = mesh.getToClone();
        else
            meshToClone = angles;

        var newMesh = new Mesh();
        for(var i = 0; i < meshToClone.length; i++){
            newMesh.addAngle(meshToClone[i].clone());
        }

        return newMesh;
    };

    this.getToClone = function(){
        return angles;
    };

    this.getAnglesLenght = function () {
        return angles.length;
    }

    this.getLine = function(index){
        if(index+1 < angles.length)
            return [angles[index].getCorrectAngle(space.starting), angles[index + 1].getCorrectAngle(space.starting)];
        else if(index < angles.length)
            return [angles[index].getCorrectAngle(space.starting), angles[0].getCorrectAngle(space.starting)];
        else
            throw Error('Index is too high');
    };

    this.getAngle = function(index){
        if(index+1 < angles.length)
            return angles[index].getCorrectAngle(space.starting);
        else
            throw Error('Index is too high');
    };

    // @Constructor
    angles = [];

    if(value) {
        if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++){
                if(Array.isArray(value[i])){
                    switch(value[i].length){
                        case 2:
                            this.addAngle(new Angle(new Vector2(value[i][0], value[i][1])));
                            break;
                        case 4:
                            this.addAngle(new Angle(new Vector2(value[i][0], value[i][1]), new Vector2(value[i][2], value[i][3])));
                            break;
                        default:
                            throw Error('Position angles is not correct: ' + value[i]);
                            break;
                    }
                }
                if(value[i] instanceof Angle)
                    this.addAngle(value[i].clone());
                if(value[i] instanceof Vector2)
                    this.addAngle(new Angle(value[i].clone()));

            }
        }
    }
}
var FigureType = {
    square: 'square', // kwadrat
    circle: 'circle', // kolo
    polyhedron: 'polyhedron', //wielokont
    line: 'line' // linia
};

function Figure(Type){
    var type;

    this.setType = function(figure, value){
        switch (type) {
            case FigureType.square:
                delete this.size;
                break;
            case  FigureType.circle:
                delete this.radius;
                break;
            case FigureType.polyhedron:
                delete this.mesh;
                break;
            case FigureType.line:
                delete this.vector;
                break;
        }

        if(typeof figure == 'string') {
            switch (figure) {
                case FigureType.square:
                    type = FigureType.square;
                    this.size = value instanceof Size ? value.clone() : new Size(100, 100);
                    break;
                case  FigureType.circle:
                    type = FigureType.circle;
                    this.radius = value instanceof Number ? value : 50;
                    break;
                case FigureType.polyhedron:
                    type = FigureType.polyhedron;
                    this.mesh = value instanceof Mesh ? value.clone() : new Mesh([[0, 100], [50.445454554, 5], [100, 100]]);
                    break;
                case FigureType.line:
                    type = FigureType.line;
                    this.vector = value instanceof Vector2 ? value.clone() : new Vector2(100, 100);
                    break;
            }
        }
        else if(figure instanceof Vector2) {
            type = FigureType.line;
            this.vector = figure.clone();
        }
        else if(figure instanceof Mesh) {
            type = FigureType.polyhedron;
            this.mesh = figure.clone();
        }
        else if(figure instanceof Size) {
            type = FigureType.square;
            this.size = figure.clone();
        }
        else if(figure instanceof Number) {
            type = FigureType.circle;
            this.radius = figure;
        }
    };

    this.getType = function(){
        return type;
    };

    this.getSize = function(){
        switch (type){
            case FigureType.circle:
                return new Size().SAME(this.radius*2);
            case FigureType.line:
                return new Size(this.vector.x, this.vector.y);
            case FigureType.polyhedron:
                return this.mesh.getSpace();
            case FigureType.square:
                return this.size.clone();
                
        }
    };

    this.clone = function(){
        var cloneFigure = new Figure();
        switch (type){
            case FigureType.square:
                cloneFigure.setType(this.size);
                break;
            case FigureType.circle:
                cloneFigure.setType(this.radius);
                break;
            case FigureType.polyhedron:
                cloneFigure.setType(this.mesh);
                break;
            case FigureType.line:
                cloneFigure.setType(this.vector);
                break;
        }

        return cloneFigure;
    };

    // @Constructior
    this.setType(Type || FigureType.square);
}

function Shape(Component){
    var gameObject;

    this.show = true;
    this.material = new Material();
    this.figure = new Figure();

    this.Start = function(){
        gameObject = Component.getParent();
    };

    this.getSize = function () {
        var size = this.figure.getSize();
        size.add(gameObject.transform.position);
        return size;
    };

    this.clone = function(Component){
        var cloneShape = new Shape(Component);
        cloneShape.show = this.show;
        cloneShape.material = this.material.clone();
        cloneShape.figure = this.figure.clone();
        return cloneShape;
    };
}

// ------------------------------------------------ Class Game ----------------------------------------------------
function Component(Name, Script){
    // @Area
    // private
    var script;
    var parent;
    
    // public
    this.name;
    
    // @Methods
    //public
    this.assignComponent = function(GameObiect){
        if(!parent)
            parent = GameObiect;
    };
    
    this.setScript = function (Script){
        if(typeof Script === 'function') {
            script = new Script(this);
        }
        else if(typeof Script === 'object') {
            if(typeof Script.clone === 'function')
                script = Script.clone(this);
            else if(typeof Script.constructor === 'function') {
                script = new (Script.constructor)(this);
                if(typeof Script.getToClone == 'function')
                    if(typeof script.pasteClone == 'function')
                        script.pasteClone(Script.getToClone());
            }
        }else
            throw Error("Set Script have to function/object");
    };

    this.start = function () {
        if(script.Start)
            script.Start();
    };

    this.update = function (event) {
        if(script.Update)
            script.Update(event);
    };
    
    this.destroy = function(){
        if(script.Destroy)
            script.Destroy();
    };
    
    this.getScript = function(){
        return script;
    };

    this.getParent = function(){
        return parent;
    };

    this.clone = function () {
        var cloneComponent = new Component(this.name);
        cloneComponent.setScript(script);
        return cloneComponent;
    };
    
    // @Constructor 
    script = {};

    if(typeof Name === 'object') {
        this.setScript(Name);
        if (typeof Name.constructor === 'function')
            if (Name.constructor.name != '')
                this.name = Name.constructor.name;
    }else
        this.name = Name;


    if(Script != undefined)
        this.setScript(Script);
}

function Material(fill, stroke){
    // Area
    this.strokeSize = 1;
    this.fill = fill instanceof Boolean ? fill : true;
    this.stroke = stroke instanceof Boolean ? stroke : false;
    this.borderColor = new Color(0,0,0,255);
    this.backgroundColor = new Color(0,0,0,255);

    // Methods
    this.clone = function(){
        var cloneMaterial = new Material(this.fill, this,stroke);
        cloneMaterial.backgroundColor = this.backgroundColor.clone();
        cloneMaterial.borderColor = this.borderColor.clone();
        cloneMaterial.strokeSize = this.strokeSize;
        return cloneMaterial;
    };
}

function gameObject(Name, Position){
    // @Area
    // public
    this.active;
    this.transform = {
        position: Position instanceof Vector2 ? Position.clone() : new Vector2().ZERO(),
        scale: new Vector2().ZERO(),
        rotation: 0
    };
    this.tag = "Object";
    this.foothold;

    // private
    var name = Name || "New gameObject";
    var components;
    var parent;
    var game;
    var gameObjects;
    var listNamesGameObject;

    // @Method
    // private
    var changeName = function(Name){
        for(var i = 0; ;i++) {
            if (!this.findGameObject(Name + "(" + i + ")")) {
                return Name + "(" + i + ")";
            }
        }
    }.bind(this);

    // public
    this.assignObject = function(obiect){
        if(parent)
            console.error("gameObject '" + obiect.name + "' had to add, becouse this parent is object "
                + (obiect.getParent() instanceof Game ? "Game" : ("gameObiect '" + obiect.getParent().name + "'")));
        else {
            parent = obiect;
            game = parent instanceof Game ? parent : parent.getGame();
        }
    };

    this.getName = function(){
        return name;
    };

    this.setName = function(sName){
        if(parent){
            if(game){
                if(!game.findGameObject(sName))
                    name = sName;
            }else{
                if(!parent.findGameObject(sName))
                    name = sName;
            }
        }else {
            name = sName;
        }
    };

    this.addComponent = function(component){
        if(component instanceof Component) {
            if(component.name == undefined)
                throw Error("gameObiect '" + name + "'. Component have to name'");
            if(components[component.name])
                throw Error("gameObiect '" + name + "' have this component '" + component.name + "'");
            else{
                components[component.name] = component.clone();
                components[component.name].assignComponent(this);
                if(game)
                    components[component.name].start();
                return components[component.name];
            }
        }
        else
            console.error('It is not component');
    };
    
    this.getComponent = function(Name){
        if(components[Name])
            return components[Name];
    };

    this.removeComponent = function(Name){
        if (components[Name]) {
            components[Name].destroy();
            delete components[Name];
        }
    };

    this.positionFoothold = function(){
        var foothold = (this.foothold.getPosition(this.size));
        return new Vector2(this.position.x + foothold.x, this.position.y + foothold.y);
    };

    this.getParent = function(){
        return parent;
    };

    this.getGame = function(){
        return game;
    };

    this.addGameObject = function(GameObject, level) {
        if(GameObject instanceof gameObject) {
            if (level == undefined)
                level = 0;
            if (level < 0)
                throw Error('Level have to > 0');

            if (gameObjects[level] == undefined)
                gameObjects[level] = [];

            if (GameObject.getParent())
                throw Error("gameObiect '" + GameObject.name + "' had to add, becouse this parent is obiect "
                    + (GameObject.getParent() instanceof Game ? "Game" : ("gameObiect '" + GameObject.getParent().name + "'")));
            else {
                if (this.findGameObject(GameObject.getName()))
                    GameObject.setName(changeName(GameObject.getName()));

                var length = gameObjects[level].length;
                gameObjects[level][length] = GameObject;
                listNamesGameObject[GameObject.getName()] = {gameObject : GameObject, level : level, stack: length};
                gameObjects[level][length].assignObject(this);
                gameObjects[level][length].startComponents();
            }
        }else
            throw Error("Add gameObject isn't gameObject");
    };
    
    this.findGameObject = function (Name){
        return listNamesGameObject[name].gameObject;
    };

    this.destroyGameObject = function (Name){
        listNamesGameObject[Name].gameObject.destroy();
        delete listNamesGameObject[Name];
    };

    this.updateComponents = function(events){
        if(components != [])
            for(var component in components)
                components[component].update(events);
    };

    this.destroyComponents = function(){
        if(components != [])
            for(var component in components)
                this.removeComponent(component);
    };

    this.startComponents = function (){
        if(components != [])
            for(var component in components)
                components[component].start();
    };
    
    this.destroy = function () {
        if(gameObjects != [])
            for(var i = 0; i < gameObjects.length; i++){
                if(gameObjects[i] == undefined)
                    continue;
                for(var a = 0; a < gameObjects[i].length; a++) {
                    gameObjects[i][a].destroy();
                    delete gameObjects[i][a];
                }
            }
        
        parent = undefined;
        game = undefined;
        this.destroyComponents();
    };

    this.clone = function(Position){
        var cloneGameObject = new gameObject('(Clone) ' + name);
        for(var component in components){
            cloneGameObject.addComponent(components[component].clone());
        }
        
        for(var i = 0; i<gameObjects.length; i++){
            cloneGameObject.addGameObject(gameObjects[i].clone(true));
        }

        cloneGameObject.transform.position = Position instanceof Vector2 ? Position.clone() : this.transform.position.clone();
        cloneGameObject.transform.rotation = this.transform.rotation;
        cloneGameObject.transform.scale = this.transform.scale.clone();
        cloneGameObject.active = this.active;
        cloneGameObject.tag = this.tag;
        cloneGameObject.foothold = this.foothold.clone();
        
        return cloneGameObject;
    };

    // @Constructor
    this.active = true;
    this.foothold = new Foothold();
    components = [];
    gameObjects = [];
    listNamesGameObject = [];
}

function Input(element){
    var keysDownNow = [];
    var keysDown = [];
    var keysUp = [];

    this.getKeyDown = function (key) {
        if(keysDown[key.value])
            return true;
        return false;
    };

    this.getKeysDown = function(keys){
        for(var i = 0; i < keys.length; i++){
            if(keysDown[keys[i].value])
                continue;
            return false;
        }
        return true;
    };

    this.update = function(){
        keysUp = [];
        for(var i = 0; i < 223; i++){
            if((keysDown[i] && keysDownNow[i]) || (!keysDown[i] && !keysDownNow[i]))
                continue;
            if(keysDown[i] && !keysDownNow[i]) {
                keysUp[i] = true;
                keysDown[i] = false;
                continue;
            }
            if(!keysDown[i] && keysDownNow[i])
                keysDown[i] = true;
        }
    };

    // @Constructor
    element.contentEditable = true;
    element.addEventListener("keydown", function (e) {
        keysDownNow[e.keyCode] = true;
    });

    element.addEventListener("keyup", function (e) {
        keysDownNow[e.keyCode] = false;
    });

}


function Game(Element, Height, Width, Fps){
    // @Area
    // private
    var fps;
    var element;
    var allGameObjects;
    var gameObjects;
    var rendering;
    var input;
    var listNamesGameObject;
    var listID;

    // @Method
    // private
    var render = function() {
        var events = {
            input: input
        };
        input.update();
        for(var b = 0; b < gameObjects.length; b++){
            if(gameObjects[b] == undefined)
                continue;

            for(var c = 0; c < gameObjects[b].length; c++){
                if(gameObjects[b][c] == undefined)
                    continue;
                if(gameObjects[b][c].active) {
                    gameObjects[b][c].updateComponents(events);
                }
            }
        }
    }.bind(this);

    function reloadRendering(){
        clearInterval(rendering);
        rendering = setInterval(render, 1000 / fps);
    }

    var changeName = function(Name){
        for(var i = 0; ;i++) {
            if (!this.findGameObject(Name + "(" + i + ")")) {
                return Name + "(" + i + ")";
            }
        }
    }.bind(this);

    // public
    this.getContext2D = function(){
        return element.getContext('2d');
    };

    this.addGameObject = function(GameObject, level){
        if(GameObject instanceof gameObject) {
            if (level == undefined)
                level = 0;
            if (level < 0)
                throw Error('Level have to > 0');

            if (gameObjects[level] == undefined)
                gameObjects[level] = [];

            if (GameObject.getParent())
                throw Error("gameObiect '" + GameObject.name + "' had to add, becouse this parent is obiect "
                    + (GameObject.getParent() instanceof Game ? "Game" : ("gameObiect '" + GameObject.getParent().name + "'")));
            else {
                if (this.findGameObject(GameObject.getName()))
                    GameObject.setName(changeName(GameObject.getName()));

                var length = gameObjects[level].length;
                gameObjects[level][length] = GameObject;
                listNamesGameObject[GameObject.getName()] = {gameObject : GameObject, level : level, stack: length};;
                gameObjects[level][length].assignObject(this);
                gameObjects[level][length].startComponents();
            }
        }else
            throw Error("Add gameObject isn't gameObject");
    };
    
    this.findGameObject = function (name){
        if(listNamesGameObject[name])
            return listNamesGameObject[name].gameObject;
    };

    this.getGameObjects = function (){
        return gameObjects;
    };

    this.destroyGameObject = function (Name){
        listNamesGameObject[Name].gameObject.destroy();
        delete listNamesGameObject[Name];
    };
    
    this.maxFps = function (Fps) {
        fps = Fps;
        reloadRendering();
    };

    this.height = function(height){
        if(height != undefined)
            element.height = height;
        else
            return element.height;
    };

    this.width = function(width){
        if(width != undefined)
            element.width = width;
        else
            return element.width;
    };

    // @Constructor
    element = document.getElementById(Element);
    element.height = Height;
    element.width = Width;
    input = new Input(element);
    listNamesGameObject = [];
    gameObjects = [];
    this.maxFps(Fps || 30);
}
