var ListComponentClassImplementer = new (function(){
    var listName;
    this.addComponentClassImplementer = function(comClassImplementer){
        if(comClassImplementer instanceof ComponentClassImplementer){
            if(listName[comClassImplementer.getName()] != undefined)
                throw Error("DuplicationComponentClassImplementerException: Mustn't initiate same componentClassImplementer.");
            listName[comClassImplementer.getName()] = comClassImplementer;
        }else
            throw Error("TypeParameterException: Parameter have to be object ComponentClassImplementer");
    };
    
    this.isComponentClassImplementer = function(name){
        return listName[name]? true: false;
    };
    
    this.getComponentClassImplementer = function (name) {
        return listName[name];
    };

    //@Constructor
    listName = [];
});
var CreatorListClassImplementer = new (function () {
    //@Methods
    // private
    function ListFieldsComponentClassImplementer(list){
        //@Fields
        // private
        var fields;
        
        //@Methods
        // private
        this.get = function () {
            return fields;
        };
        
        //@Constructor
        fields = [];
        if(typeof list == "object"){
            for(var field in list){
                switch (typeof list[field]) {
                    case "object":
                    case "number":
                    case "string":
                    case "boolean":
                        fields[fields.length] = field;
                    default:
                        break;
                }
            }
        }else if(Array.isArray(list)) {
            for (var i = 0; i < list.length; i++) {
                if (typeof list[i] == "string")
                    fields[i] = list[i];
                else
                    throw Error("TypeValueListException:: Invalid type value.");
            }
        }else{
            if(typeof list == "string")
                fields = [list];
            else
                throw Error("TypeParametherException: Parameter have to be String.")
        }
    }

    function ListMethodsComponentClassImplementer(list){
        //@Fields
        // private
        var methods;

        //@Methods
        // private
        this.get = function () {
            return methods;
        };

        //@Constructor
        methods = [];
        if(typeof list == "object"){
            for(var method in list){
                if(typeof list[method] == "function")
                    methods[methods.length] = method;
            }
        }else if(Array.isArray(list)){
            for(var i = 0; i< list.length; i++) {
                if (typeof list[i] == "string")
                    methods[i] = list[i];
                else
                    throw Error("TypeValueListException: Invalid type value.");
            }
        }else{
            if(typeof list == "string")
                methods = [list];
            else
                throw Error("TypeParameterException: Parameter have to be String.")
        }
    }

    // public
    this.listFields = function (list) {
        return new ListFieldsComponentClassImplementer(list);
    };

    this.listMethods = function (list) {
        return new ListMethodsComponentClassImplementer(list);
    };

    this.isListMethodsComponentClassImplementer = function(object){
        return object instanceof ListMethodsComponentClassImplementer;
    };

    this.isListFieldsComponentClassImplementer = function(object){
        return object instanceof ListFieldsComponentClassImplementer;
    };
});

function ComponentClassImplementer(Name, Methods, Fields){
    //@Fields
    var name;
    var methods;
    var fields;
    
    //@Methods
    // private

    // public
    this.getName = function(){
        return name;
    };

    this.checkObjectImplementation = function(object){
        var i;
        if(fields) {
            for (var fiels = fields.get(), i = 0; i<fiels.length; i++) {
                switch (typeof object[fiels[i]]) {
                    case "object":
                    case "number":
                    case "string":
                    case "boolean":
                        break;
                    default:
                        return false;
                }
            }
        }

        if(methods)
            for(var meths = methods.get(), i=0; i<meths.length; i++)
                if(typeof object[meths[i]] != "function")
                    return false;

        return true;
    };
    
    //@Constructor
    if(typeof Name == "object") {
        if(Name.constructor.name != "Object")
            name = Name.constructor.name;
        else
            throw Error("NoNameException: Can't use anonymous object. Use constructor (\"string\", {})");
        
        fields = CreatorListClassImplementer.listFields(Name);
        methods = CreatorListClassImplementer.listMethods(Name);
        
    }else if (typeof Name == "string" && Name != "") {
        name = Name;
        if(typeof Methods == "object"){
            fields = CreatorListClassImplementer.listFields(Methods);
            methods = CreatorListClassImplementer.listMethods(Methods);
        }else{
            if (typeof Name == "string" && Name != "")
                name = Name;
            else
                throw Error("NoNameException: Parameter have to be String.");

            if (CreatorListClassImplementer.isListMethodsComponentClassImplementer(Methods))
                methods = Methods;
            else if (CreatorListClassImplementer.isListFieldsComponentClassImplementer(Methods))
                fields = Methods;
            else
                throw Error("TypeParameterException: Parameter have to be ListFieldsComponentClassImplementer/ListMethodsComponentClassImplementer.");

            if (Fields) {
                if (CreatorListClassImplementer.isListFieldsComponentClassImplementer(Fields)) {
                    if (fields)
                        throw Error("DuplicationParameterException: Type parameter Fields is same then other.");
                    fields = Fields;
                } else if (CreatorListClassImplementer.isListMethodsComponentClassImplementer(Fields)) {
                    if (methods)
                        throw Error("DuplicationParameterException: Type parameter Methods is same then other.");
                    methods = Fields;
                } else
                    throw Error("TypeParameterException: Parameter have to be ListFieldsComponentClassImplementer/ListMethodsComponentClassImplementer.");
            }
        }
    }else
        throw Error("NoNameException: Parameter have to be String.");
    if(fields.get().length == 0 && methods.get().length == 0)
        throw Error("EmptyFieldsMethodsException: Can't create empty implementation.");
    else
        ListComponentClassImplementer.addComponentClassImplementer(this);
}