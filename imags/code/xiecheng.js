  move();	
      var timer=null,i=0;
			
			function move()
			{	
				var turnpic=document.getElementsByClassName("turnpic");
				
				clearInterval(timer);
				timer=setInterval(function(){
					turnpic[i].style.display="none";
					i=(i+1)%turnpic.length;
					turnpic[i].style.display="block";
				},1000);
			}	
			function turn()
			{
				var main=document.getElementById("main-page");
				var search=document.getElementById("search-page");
				
				if(main.style.display=="block")
				{
					main.style.display="none";
					search.style.display="block";
				}
				else
				{
					main.style.display="block";
					search.style.display="none";
				}
			}