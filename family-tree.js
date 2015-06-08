// 															Patrick     Robert
//                                +          +                  
//                                |          |                  
//                                +----+-----+     Mary         
//                                     |            +           
//                                     |            |           
//                                     +            +           
//                      Samuel       George        James       Aaron
//                        +            +            +            +
//                        |            |            |            |
//                        +-------------------------+------------+           
//                                     |                        
//                                     |                        
//                                     +        Catherine   Joseph
//                                   Kevin          +         +
//                                     +            |         |
//                                     |            +----+----+
//                                     +                 +      
//                 Adam               Jill              Carl    
//                  +                  +                 +      
//                  |                  |                 |      
//                  |                  |                 |      
//                  |                  |                 |      
//                  +------------------------------------+      
//                                     |                        
//                                     +                        
//                                   Nancy


var Tree = function(data){
	this.data     = data;
	this.parent   = null;
	this.children = [];
};

Tree.prototype.add = function(data){
	var child    = new Tree(data);
	child.parent = this;
	this.children.push(child);
};

// Here we pass in a name and it finds the grandparent
Tree.prototype.findGrandparent = function(name) {
	console.log(name.data + "'s grandparent is " + name.parent.parent.data);
};

// Here we will implement a depth first search and log the family members with no children.
Tree.prototype.traverseNoChildren = function() {
  for (var i = 0, length = this.children.length; i < length; i++) {
    this.children[i].traverseNoChildren();
    if(this.children[i].children.length <= 0) {
  		console.log(this.children[i].data + " has no children");
    }
  }
};


// Creating our family tree
var tree = new Tree("Nancy");
tree.add("Adamn");
tree.add("Jill");
tree.add("Carl");

var carl = tree.children[2];
carl.add("Catherine");
carl.add("Joseph");

var jill = tree.children[1];
jill.add("Kevin");

var kevin = tree.children[1].children[0];
kevin.add("Samuel");
kevin.add("George");
kevin.add("James");
kevin.add("Aaron");

var george = tree.children[1].children[0].children[1];
george.add("Patrick");
george.add("Robert");

var james = tree.children[1].children[0].children[2];
james.add("Mary");

tree.traverseNoChildren();



