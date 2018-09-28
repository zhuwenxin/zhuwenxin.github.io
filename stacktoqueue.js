function Stack()
{
	this.data=[];
	this.top=0;
	this.pop=pop;
	this.push=push;
}
function push(Element)
{
	this.data[this.top++]=Element;
}
function pop()
{
	return this.data[--this.top];
}
function Queue()
{
	this.inqueue=inqueue;
	this.outqueue=outqueue;
}
function inqueue(Element)
{
	stack1.push(Element);
}
function outqueue()
{
	if(stack2.top==0)
	{
		var i;
		for(i=0;i<stack1.top;i++)
		{
			stack2.push(stack1.pop());
		}
		console.log(stack1.pop());
	}
	else
	{
		console.log(stack2.pop());
	}	
}
var stack1=new Stack();
var stack2=new Stack();
var queue=new Queue();
queue.inqueue('A');
queue.inqueue('B');
queue.inqueue('C');
queue.outqueue();