#pragma strict
var guiSkin : GUISkin;

function Start () {

}

function Update () {

}

function OnGUI(){

	GUI.skin = guiSkin;
	if (GUI.Button(Rect((Screen.width/2)-150,(Screen.height/2)+100,300,50),"Start Game"))
		{

			Application.LoadLevel(7);
		}
		
	if (GUI.Button(Rect((Screen.width/2)-150,(Screen.height/2)+200,300,50),"Exit Game"))
		{

			Application.Quit();
		}
}

