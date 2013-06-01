#pragma strict
var guiSkin : GUISkin;

var asteroidPrefab:Rigidbody;
//the time at START of game
//var starttime:float;
//the game at the moment
//var currenttime:float;
//the game has been played for - KEMM ILI NILGHAB
//static var elapsedtime:float;

function Start () {

	createAsteroids((GameController.level+5)-1);

}

function Update () {
	if (GameObject.FindGameObjectsWithTag("Asteroid").Length == 0) {
		GameObject.Find("Spaceship").GetComponent(SpaceshipController).GameOver();
	}
}

function OnGUI() {
	GUI.skin = guiSkin;
	GUI.Label(Rect(Screen.width - 110, Screen.height - 35, 100, 25), Application.loadedLevelName);
}


function createAsteroids(numberOfAsteroids:int)
{
	var counter:int;
	counter = 0;
	
	//short hand for initing and setting value
	
	
	
	for(counter = 0; counter<numberOfAsteroids; counter++)
	{
		var xpos:int=15;
		var ypos:int=15;
		var zpos:int=2;
		
		Instantiate(asteroidPrefab,Vector3(xpos,ypos,zpos),Quaternion.identity);
		
	}

}