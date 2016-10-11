function Component(Name, Script){
    //@Areas
    // public
    this.active;
    this.tag;
    
    // private
    var name;
    
    var script;

    var parent;

    var time;

    //@Methods
    this.initialization = function(Time){
        time = Time;
    };
    
    this.isUpdate = function(){
        return script.Update ? true: false;
    };
    
    this.assign = function(Parent){
        if(parent)
            throw Error("AssignComponentException: Mustn't assign Component who is assigned.");
        else{
            if (Parent instanceof gameObject)
                parent = Parent;
            else
                throw Error("AssignParentComponentException: Parent have to be type object gameObject.");
        }
    };

    this.setScript = function(Script){
        if(typeof Script == "function")
            script = new Script();
        else if(typeof Script == "object"){
            if(typeof Script.clone == "function")
                script = Script.clone();
            else
                script = new Script.constructor();
        }else
            throw Error("TypeScriptComponentException: Add Script isn't type function/object");
    };
    
    this.getScript = function () {
        return script;
    };

    this.clone = function(){
        var cloneComponent = new Component(name);
        cloneComponent.setScript(script);
        return cloneComponent;
    };
    
    this.getName = function(){
        return name;
    };

    this.start = function(){
        if(script.Start){
            var This = this;
            script.Start({
                implement: function(classImplementer){
                    parent.componentImplementingClass(classImplementer, This);
                },
                name: name,
                parent: parent
            });
        }
    };
    
    this.update = function (Time) {
        if(script.Update)
            script.Update({
                time: time
            });
    };

    this.destroy = function(){
      if(script.Destroy)
          script.Destroy();
    };

    //@Constructor
    this.active = true;
    this.tag = "gameObject";
    
    if(typeof Name == "string")
        name = Name;
    else if(typeof Name.constructor)
        name = Name.constructor.name;
    else
        throw Error("ConstructorNameComponentException: Name have to be type string or Object constructor.name  ");

    if(typeof Name == "function" || typeof Name == "object")
        this.setScript(Name);
    else if(Script)
        this.setScript(Script);
}