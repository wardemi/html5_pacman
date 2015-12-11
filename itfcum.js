function itfcum(pname,px,py,pmap){

	console.log(pmap);
	
	var direction = process(px,py);

	console.log("irány: "+direction);

    $("body").trigger({
			type: "refreshmap",
			name: pname,
			walk: direction	//
		});
}

function process(x,y)
{
	defult_direction = -1;

	tmp_fel = 0;
	tmp_le = 0;
	tmp_jobb = 0;
	tmp_bal = 0;

	tmp_l_fel = true;
	tmp_l_le = true;
	tmp_l_jobb = true;
	tmp_l_ball = true;

	//négy irány bejárása

	for (var i = 1; i <= 4; i++) {
		

		//fel  ||  $("#m"+x+"_"+(y-i)).hasClass("m0") || $("#m"+x+"_"+(y-i)).hasClass("m1") || $("#m"+x+"_"+(y-i)).hasClass("m2") || $("#m"+x+"_"+(y-i)).hasClass("m3")  $("#m"+x+"_"+(y-i)).hasClass("m4")
		if(tmp_l_fel)
		{
			if($("#m"+x+"_"+(y-i)).hasClass("m0") || $("#m"+x+"_"+(y-i)).hasClass("m1") || $("#m"+x+"_"+(y-i)).hasClass("m2") || $("#m"+x+"_"+(y-i)).hasClass("m3") || $("#m"+x+"_"+(y-i)).hasClass("m4"))
			{
				return kerul_fentrol(x,y);
			}
			else if($("#m"+x+"_"+(y-i)).hasClass("map9"))
			{
				tmp_l_fel = false;
			}
			else if($("#m"+x+"_"+(y-i)).text() == 1){
				tmp_fel++;
			}
		}
		
		//bal
		if(tmp_l_ball)
		{
			if($("#m"+(x-i)+"_"+y).hasClass("m0") || $("#m"+(x-i)+"_"+y).hasClass("m1") || $("#m"+(x-i)+"_"+y).hasClass("m2") || $("#m"+(x-i)+"_"+y).hasClass("m3") || $("#m"+(x-i)+"_"+y).hasClass("m4"))
			{
				return	kerul_balrol(x,y);
			}
			else if($("#m"+(x-i)+"_"+y).hasClass("map9"))
			{
				tmp_l_ball = false;
			}
			else if($("#m"+(x-i)+"_"+y).text() == 1){
				tmp_bal++;
			}
		}
		
		//le
		if(tmp_l_le)
		{
			if($("#m"+x+"_"+(y+i)).hasClass("m0") || $("#m"+x+"_"+(y+i)).hasClass("m1") || $("#m"+x+"_"+(y+i)).hasClass("m2") || $("#m"+x+"_"+(y+i)).hasClass("m3") || $("#m"+x+"_"+(y+i)).hasClass("m4"))
			{
				return kerul_lentrol(x,y);
			}
			else if($("#m"+x+"_"+(y+i)).hasClass("map9"))
			{
				tmp_l_le = false;
			}
			else if($("#m"+x+"_"+(y+i)).text() == 1){
				tmp_le++;
			}
		}

		//jobb
		if(tmp_l_jobb)
		{
			if($("#m"+(x+i)+"_"+y).hasClass("m0") || $("#m"+(x+i)+"_"+y).hasClass("m1") || $("#m"+(x+i)+"_"+y).hasClass("m2") || $("#m"+(x+i)+"_"+y).hasClass("m3") || $("#m"+(x+i)+"_"+y).hasClass("m4"))
			{
				return kerul_jobbrol(x,y);
			}
			else if($("#m"+(x+i)+"_"+y).hasClass("map9"))
			{
				tmp_l_jobb = false;
			}
			else if($("#m"+(x+i)+"_"+y).text() == 1){
				tmp_jobb++;
			}
		}

	};

	console.log("Mérés_fel: "+tmp_fel);
	console.log("Mérés_bal: "+tmp_bal);
	console.log("Mérés_le: "+tmp_le);
	console.log("Mérés_jobb: "+tmp_jobb);

	if(tmp_fel > 0 && tmp_fel >= tmp_bal && tmp_fel >= tmp_jobb && tmp_fel >= tmp_le)
	{
		return 0;
	}

	if(tmp_bal > 0 && tmp_bal >= tmp_fel && tmp_bal >= tmp_jobb && tmp_bal >= tmp_le)
	{
		return 1;
	}

	if(tmp_le > 0 && tmp_le >= tmp_bal && tmp_le >= tmp_jobb && tmp_le >= tmp_fel)
	{
		return 2;
	}

	if(tmp_jobb > 0 && tmp_jobb >= tmp_bal && tmp_jobb >= tmp_fel && tmp_jobb >= tmp_le)
	{
		return 3;
	}

	return Math.floor(Math.random()*4);
	
}

function kerul_fentrol(x,y)
{
	console.log("elkerülés fentőrl");
	if(!$("#m"+x+"_"+(y+1)).hasClass("map9"))
	{
		return 2;
	}
	else if(!$("#m"+(x-1)+"_"+y).hasClass("map9"))
	{
		return 1;
	}
	else{
		return 3;
	}
}

function kerul_lentrol(x,y)
{
	console.log("elkerülés lentrol");
	if(!$("#m"+x+"_"+(y-1)).hasClass("map9"))
	{
		return 0;
	}
	else if(!$("#m"+(x-1)+"_"+y).hasClass("map9"))
	{
		return 1;
	}
	else{
		return 3;
	}
}

function kerul_balrol(x,y)
{
	console.log("elkerülés balról");
	if(!$("#m"+(x+1)+"_"+y).hasClass("map9"))
	{
		return 3;
	}
	else if(!$("#m"+x+"_"+(y-1)).hasClass("map9"))
	{
		return 0;
	}
	else{
		return 2;
	}
}

function kerul_jobbrol(x,y)
{
	console.log("elkerülés jobbról");
	if(!$("#m"+(x-1)+"_"+y).hasClass("map9"))
	{
		return 1;
	}
	else if(!$("#m"+x+"_"+(y-1)).hasClass("map9"))
	{
		return 0;
	}
	else{
		return 2;
	}
}
