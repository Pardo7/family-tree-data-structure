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






