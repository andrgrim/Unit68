#pragma strict
var guiSkin : GUISkin;
function Start () {

}

function Update () {

}

function OnGUI(){

	GUI.skin = guiSkin;
	GUI.Label(Rect((Screen.width/2)-125,300,250,25),"Your Score was :"+GameController.score);
	GUI.Label(Rect((Screen.width/2)-125,330,150,25),"Level :"+GameController.level);
		
	if (GUI.Button(Rect((Screen.width/2)-150,400,300,50),"Next Level"))
		{
 			GameController.level++;
			Application.LoadLevel(GameController.level);
		}
}

