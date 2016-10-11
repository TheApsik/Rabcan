var gameObjectIdentifier = 0; //TODO: Change way to create ID ( Use class game!)

function gameObject(Name, Position){
    //@Fields
    // private
    var name;

    var id;

    var components;
    var updateList;
    var listComponentsImplementingClass;
    var listGameObjectsWhoHaveUpdateFunction;
    var lengthGameObjectsWhoHaveUpdateFunction;

    var game;
    var parent;
    var generation;

    var gameObjects;
    var listNameGameObject;
    var listGameObjectsImplementingClass;
    
    // public
    this.active;

    this.transform;
    
    //@Methods
    // public
    
    this.getName = function () {
        return name;
    };

    this.getId = function(){
        return id;
    };

    //#Parent
    this.assign = function(Parent){
        if(parent) {
            if (game)
                throw Error("AssignGameObjectException: Mustn't assign gameObject who is assigned.");
            else if(parent.getGame()) {
                generation = parent.getGeneration() + 1;
                if(generation > 127)
                    throw Error("TimeoutAssignGameObjectException: Can't add more gameObjects. Limit exceeded.");

                game = parent.getGame();
                if(gameObjects.length > 0){
                    for(var GameObject in listNameGameObject){
                        gameObjects[listNameGameObject[GameObject].level][listNameGameObject[GameObject].page].assign();
                    }
                }
            }
            else
                throw Error("AssignGameObjectException: Parent haven't got parent Game.");
        }
        else{
            if (Parent instanceof Game) {
                generation = 0;
                game = parent = Parent;
                if(gameObjects.length > 0){
                    for(var GameObject in listNameGameObject){
                        gameObjects[listNameGameObject[GameObject].level][listNameGameObject[GameObject].page].assign();
                    }
                }
            } else if(Parent instanceof gameObject){
                parent = Parent;
                if(parent.getGame()) {
                    generation = parent.getGeneration() + 1;
                    if (generation > 127)
                        throw Error("TimeoutAssignGameObjectException: Can't add more gameObjects. Limit exceeded.");

                    game = parent.getGame();
                }
            }else
                throw Error("TypeGameException: Can't assign Parent. Parent isn't type gameObject/Game.");
        }
    };

    this.getGeneration = function(){
        return generation;
    };
    
    this.isParent = function(){
        return parent ? true : false;
    };
    
    this.getParent = function () {
        return parent;
    };

    this.getGame = function () {
        return game;
    };

    //#Component
    this.isComponent = function(Name){
        return components[Name] ? true: false;
    };

    this.haveUpdateFunction = function (GameObject) {
        if(listNameGameObject[GameObject.getName()] == GameObject){
            listGameObjectsWhoHaveUpdateFunction[GameObject.getName()] = GameObject;
            if(parent)
                parent.haveUpdateFunction(this);
        }
    };

    this.addComponent = function(component){
        if(component instanceof Component){
            if(component.getName() == undefined)
                throw Error("NULLNameComponentException: gameObject '" + name + "' can't add component. Component have to name.");
            if(components[component.getName()])
                throw Error("DuplicateComponentException: gameObject '" + name + "' have this component '" + component.getName() + "'");
            if(typeof this[component.getName()] != "undefined")
                throw Error("ReservedNameException: Component name can't be the same as an already used variable.");

            components[component.getName()] = component.clone();
            components[component.getName()].assign(this);
            this[component.getName()] = components[component.getName()].getScript();
            if(components[component.getName()].isUpdate()){
                updateList[component.getName()] = components[component.getName()].update;
                if(parent)
                    parent.haveUpdateFunction(this);
            }
            
            if(game)
                components[component.getName()].start();

            return components[component.getName()].getScript();
        }else
            throw Error("TypeAddComponentException: gameObject '" + name +"' can't add component. Component isn't type object Component.");
    };
    
    this.startComponents = function(){
        for(var gObject in listNameGameObject) {
            gameObjects[listNameGameObject[gObject].level][listNameGameObject[gObject].page].startComponents();
        }

        for(var component in components) {
            components[component].start();
        }
    };

    this.getComponent = function (Name) {
        return components[Name];
    };

    this.removeComponent = function (Name) {
        if(components[Name] != undefined){
            if(components[Name] instanceof Component) {
                components[Name].destroy();
                delete this[Name];
                delete updateList[Name];
                delete components[Name];
                for(var classImple in listComponentsImplementingClass){
                    for(var comp in listComponentsImplementingClass[classImple]){
                        if(comp == Name) {
                            delete listComponentsImplementingClass[classImple][comp];
                            if(--listComponentsImplementingClass[classImple]["value"] == 0){
                                delete listComponentsImplementingClass[classImple];
                                if(listGameObjectsImplementingClass[classImple] == undefined && parent)
                                    parent.gameObjectNotImplementingClass(classImple, this);
                            }
                        }
                    }
                }
            }
        }
    };

    this.componentImplementingClass = function(nameCompClassImplemented, component){
        if(typeof nameCompClassImplemented == "string"){
            if(listComponentsImplementingClass[nameCompClassImplemented] == undefined){
                if(ListComponentClassImplementer.isComponentClassImplementer(nameCompClassImplemented)) {
                    listComponentsImplementingClass[nameCompClassImplemented] = [];
                    listComponentsImplementingClass[nameCompClassImplemented]["value"] = 0;
                }
                else
                    throw Error("NoFindComponentClassImplementer: " + nameCompClassImplemented + " not exist.");
            }
            if(components[component.getName()] == component){
                listComponentsImplementingClass[nameCompClassImplemented][component.getName()] = component.getScript();
                ++listComponentsImplementingClass[nameCompClassImplemented]["value"];

                if(parent)
                    parent.gameObjectImplementingClass(nameCompClassImplemented, this);
            }else
                throw Error("NoComponentException: gameObject haven't this component");
            

        }else
            throw Error("TypeParameterException: Parameter nameCompClassImplemented have to be string.");
    };

    //#gameObjects
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
            if(game)
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
                        }
                        else
                            throw Error("NoFindComponentClassImplementer: " + className + " not exist.");
                    }

                    if(listGameObjectsImplementingClass[className][gO.level] == undefined)
                        listGameObjectsImplementingClass[className][gO.level] = [];

                    listGameObjectsImplementingClass[className][gO.level][gO.page] = GameObject;
                    ++listGameObjectsImplementingClass[className]["value"];

                    if(parent)
                        parent.gameObjectImplementingClass(className, this);
                }else
                    throw Error("NoGameObjectException: gameObject haven't this gameObject");
            }else
                throw Error("TypeParameterException: Parameter GameObject have to be object gameObject");
        }else
            throw Error("TypeParameterException: Parameter className have to be string");
    };

    this.gameObjectNotImplementingClass = function(className, gameObject){
        var pozGameObject = listNameGameObject[gameObject.getName()];
        var gObject = listGameObjectsImplementingClass[className][pozGameObject.level][pozGameObject.page];
        if(gObject == gameObject) {
            delete gObject;
            if(--listGameObjectsImplementingClass[className]["value"] < 1) {
                delete listGameObjectsImplementingClass[className];
                if(parent){
                    parent.gameObjectNotImplementingClass(className, this);
                }
            }
        }
    };

    this.isComponentImplementingClass = function(className){
        return listComponentsImplementingClass[className] ? true : false;
    };

    this.getGameObjectsImplementingClass = function(className, putResult){
        var gameObjectWhoImplementingClass = [];
        var GameObjectsClass = listGameObjectsImplementingClass[className];
        if(GameObjectsClass != undefined) {
            for (var i = 0; i < GameObjectsClass.length; i++) {
                if (GameObjectsClass[i] == undefined)
                    continue;

                for (var a = 0; a < GameObjectsClass[i].length; a++) {
                    if (GameObjectsClass[i][a] == undefined)
                        continue;

                    if(GameObjectsClass[i][a].active) {
                        if (putResult) {
                            if (putResult[i] == undefined)
                                putResult[i] = [];

                            if (putResult[i][a] == undefined)
                                putResult[i][a] = [];

                            if (GameObjectsClass[i][a].isComponentImplementingClass(className))
                                putResult[i][a].push(GameObjectsClass[i][a]);

                            GameObjectsClass[i][a].getGameObjectsImplementingClass(className, putResult);
                        } else {
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
        }
        if(putResult == undefined) {
            var finalListGameObject = [];
            for (var i = 0; i < gameObjectWhoImplementingClass.length; i++) {
                if (GameObjectsClass[i] == undefined)
                    continue;

                for (var a = 0; a < gameObjectWhoImplementingClass[i].length; a++) {
                    if (GameObjectsClass[i][a] == undefined)
                        continue;

                    for (var b = 0; a < gameObjectWhoImplementingClass[i][b].length; b++) {
                        if (GameObjectsClass[i][a] == undefined)
                            continue;

                        finalListGameObject.push(GameObjectsClass[i][a][b]);
                    }
                }
            }
            return finalListGameObject;
        }
    };

    this.clone = function(Name){
        var gObject = new gameObject(Name || name);
        
        for(var comp in components){
            gObject.addComponent(components[comp]);
        }

        if(gameObjects.length > 0) {
            for (var i = 0; i < gameObjects.length; i++) {
                for (var a = 0; i < gameObjects[i].length; a++) {
                    if (gameObjects[i][a] == undefined)
                        break;
                    gObject.addGameObject(gameObjects[i][a].clone());
                }
            }
        }
        return gObject;
    };
    
    //@Constructor
    this.active = true;
    
    this.transform = {
        position: Position ? Position.clone() : new Vector2().ZERO(),
        rotate: 0,
        scale: new Vector2().ZERO()
    };

    name = Name;
    id = gameObjectIdentifier++;
    listNameGameObject = [];
    listComponentsImplementingClass = [];
    listGameObjectsImplementingClass = [];
    listGameObjectsWhoHaveUpdateFunction = [];
    lengthGameObjectsWhoHaveUpdateFunction = 0;
    gameObjects = [];
    components = [];
    updateList = [];

}