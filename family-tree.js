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





