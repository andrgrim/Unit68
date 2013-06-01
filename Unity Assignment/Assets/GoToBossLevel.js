#pragma strict

function Start () {

}

function Update () {

}

function OnGUI(){

	GUI.Label(Rect(0,15,150,25),"Your Score was :"+GameController.score);
	
		
	if (GUI.Button(Rect(300,350,100,100),"Boss Level"))
		{
 			
			Application.LoadLevel(9);
		}
}