function Game(Element, Height, Width, Tick){
    //@Fields
    // private
    var element;

    var start;
    var time;

    var gameObjects;
    var listNameGameObject;
    
    var listGameObjectsImplementingClass;
    
    var listUpdate;

    var tickRate;
    var tick;
    var updater;

    //@Methods
    // private
    function render() {
        requestAnimationFrame(render);
        //DEBUG("render");
    }

    function update(){
        ++tick;
        for(var i = 0; i <listUpdate.length; i++){
            for(var a = 0; a<listUpdate[i].length; a++){
                listUpdate[i][a]();
            }
        }
    }

    // public

    //#gameObject
    this.isGameObjectWithName = function(Name){
        return listNameGameObject[Name]? true : false;
    };

    this.getGameObjectWithName = function(Name){
        var GameObject = listNameGameObject[Name];
        if(GameObject) {
            return gameObjects[GameObject.level][GameObject.page];
        }
    };

    this.addGameObject = function(GameObject, level){
        if(GameObject instanceof gameObject){
            if(level < 0)
                throw Error("LevelGameObjectException: Level can't be less then zero.");
            if(!level)
                level = 0;

            if(gameObjects[level] == undefined)
                gameObjects[level] = [];

            if(GameObject.isParent())
                throw Error("ParentGameObjectException: Can't add object gameObject '" + GameObject.getName() + "'. This object is assigning.");

            if(this.isGameObjectWithName(GameObject.getName()))
                throw Error("DuplicateNameGameObjectException: gameObject with the name '" + GameObject.getName() + "' is added. Can't add gameObject with the same name.");

            var length = gameObjects[level].length;
            gameObjects[level][length] = GameObject;
            listNameGameObject[gameObjects[level][length].getName()] = {level: level, page: length};
            gameObjects[level][length].assign(this);
            gameObjects[level][length].startComponents();
            

        }else
            throw Error("TypeAddGameObjectException: Can't add gameObject. Add gameObject isn't type object gameObject.");
    };

    this.gameObjectImplementingClass = function (className, GameObject) {
        if(typeof className == "string"){
            if(GameObject instanceof gameObject){
                var gO = listNameGameObject[GameObject.getName()];
                if(gameObjects[gO.level][gO.page] == GameObject){
                    if(listGameObjectsImplementingClass[className] == undefined){
                        if(ListComponentClassImplementer.isComponentClassImplementer(className)) {
                            listGameObjectsImplementingClass[className] = [];
                            listGameObjectsImplementingClass[className]["value"] = 0;
                        }else
                            throw Error("NoFindComponentClassImplementer: " + className + " not exist.");
                    }

                    if(listGameObjectsImplementingClass[className][gO.level] == undefined)
                        listGameObjectsImplementingClass[className][gO.level] = [];

                    listGameObjectsImplementingClass[className][gO.level][gO.page] = GameObject;
                    ++listGameObjectsImplementingClass[className]["value"];
                }else
                    throw Error("NoGameObjectException: gameObject haven't this gameObject");
            }else
                throw Error("TypeParameterException: Parameter GameObject have to be object gameObject");
        }else
            throw Error("TypeParameterException: Parameter className have to be string");
    };

    this.getGameObjectsImplementingClass = function(className){
        var gameObjectWhoImplementingClass = [];
        var GameObjectsClass = listGameObjectsImplementingClass[className];
        if(GameObjectsClass != undefined) {
            for (var i = 0; i < GameObjectsClass.length; i++) {
                if (GameObjectsClass[i] == undefined)
                    continue;

                for (var a = 0; a < GameObjectsClass[i].length; a++) {
                    if (GameObjectsClass[i][a] == undefined && GameObjectsClass[i][a].active)
                        continue;

                    if(GameObjectsClass[i][a].active) {
                        if (gameObjectWhoImplementingClass[i] == undefined)
                            gameObjectWhoImplementingClass[i] = [];

                        if (gameObjectWhoImplementingClass[i][a] == undefined)
                            gameObjectWhoImplementingClass[i][a] = [];

                        if (GameObjectsClass[i][a].isComponentImplementingClass(className))
                            gameObjectWhoImplementingClass[i][a].push(GameObjectsClass[i][a]);

                        GameObjectsClass[i][a].getGameObjectsImplementingClass(className, gameObjectWhoImplementingClass);
                    }
                }
            }
        }

        var finalListGameObject = [];
        for(var i = 0; i<gameObjectWhoImplementingClass.length; i++){
            if(gameObjectWhoImplementingClass[i] == undefined)
                continue;

            for(var a =0; a<gameObjectWhoImplementingClass[i].length; a++) {
                if (gameObjectWhoImplementingClass[i][a] == undefined)
                    continue;

                for(var b =0; b<gameObjectWhoImplementingClass[i][a].length; b++) {
                    if (gameObjectWhoImplementingClass[i][a] == undefined)
                        continue;

                    finalListGameObject.push(gameObjectWhoImplementingClass[i][a][b]);
                }
            }
        }
        
        return finalListGameObject;
    };

    this.gameObjectNotImplementingClass = function(className, gameObject){
        var pozGameObject = listNameGameObject[gameObject.getName()];
        var gObject = listGameObjectsImplementingClass[className][pozGameObject.level][pozGameObject.page];
        if(gObject == gameObject) {
            delete gObject;
            if(--listGameObjectsImplementingClass[className]["value"] == 0)
                delete listGameObjectsImplementingClass[className];
        }
    };

    //#Update
    this.setTickRate = function (Tick) {
        updater && clearInterval(updater);
        tickRate = Tick;
        updater = setInterval(update, tickRate ? 1000/tickRate : 0);
    };

    this.getTickRate = function () {
        return tickRate;
    };

    this.addGameObjectUpdates = function(GameObject, ListUpdates){
        if(GameObject instanceof gameObject) {
            var ID = GameObject.getId();
            listUpdate[ID] = [];
            for(var Update in ListUpdates){
                listUpdate[ID][listUpdate[ID].length] = ListUpdates[Update];
            }
        }
        else
            throw Error("TypeVariableException: Paramether GameObject have to be gameObject");
    };

    //#Canvas
    this.setHeight = function(Height){
        element.height = Height;
    };

    this.getHeight = function(){
        return element.height;
    };

    this.setWidth = function(Width){
        element.width = Width;
    };

    this.getWidth = function () {
        return element.width;
    };

    //@Constructor
    if(Element)
        element = document.getElementById(Element);
    else
        throw Error("NoSetElement: Element canvas isn't assign.");


    this.setHeight(Height || 500);
    this.setWidth(Width || 500);
    start = new Date().getTime();
    render();
    this.setTickRate(Tick || 0);
    tick = 0;
    gameObjects = [];
    listNameGameObject = [];
    listGameObjectsImplementingClass = [];
    listUpdate = [];
}