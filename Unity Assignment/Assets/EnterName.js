#pragma strict
var guiSkin : GUISkin;
function Start () {

}

function Update () {

}

function OnGUI(){

	GUI.skin = guiSkin;
	GUI.Label(Rect((Screen.width/2)-95,300,150,25),"Enter Name: ");
	GameController.playerName = GUI.TextField(Rect((Screen.width/2)+20,280,100,55), GameController.playerName);
	
	if (GUI.Button(Rect((Screen.width/2)-150,400,300,50),"Start Level 1"))
		{

			Application.LoadLevel(1);
		}
}