#pragma strict

var speed:int;
var guiSkin : GUISkin;

var health:int=100;
static var shotsfired:int=0;
static var shotshit:int=0;
static var shotsmissed:int=0;
var gameOver:boolean=false;
var totalTime:float=5.00;

var laserPrefab:Rigidbody;

function Start () {
	BordersCalculator.Set();
	
	shotsfired = 0;
	shotshit = 0;
	shotsmissed = 0;
}

function Update () {

	BordersCalculator.EnableBorders(this.transform);
	
	if (Input.GetKeyDown(KeyCode.LeftControl))
		{
			Instantiate(laserPrefab,transform.position,transform.rotation);
			shotsfired++;
		}
	
		//rotate left and right
		transform.Rotate(Vector3.back * 90 * Time.deltaTime * Input.GetAxis("Horizontal"));
		
		//move forward at a given speed
		
		transform.Translate(Vector3.up * speed * Time.deltaTime * Input.GetAxis("Vertical"));
		
	if (totalTime >= 0){
	
		totalTime -= Time.deltaTime;
	}
	
	if (totalTime <= 0){
		GameOver();
	}
	

		

}

function OnGUI()
{
// Create style for a button

	GUI.skin = guiSkin;

	shotsmissed = shotsfired - shotshit;
	
	GUI.Label(Rect(400,20,200,25),"Player :"+GameController.playerName);
	GUI.Label(Rect(40,60,500,50),"Time Elapsed: "+totalTime);
	GUI.Label(Rect(300,60,200,25),"Score :"+GameController.score);
	GUI.Label(Rect(400,60,200,25),"Health :"+health);
	GUI.Label(Rect(550,60,200,25),"Shots Fired :"+shotsfired);
	//GUI.Label(Rect(725,20,200,25),"Shots Hit :"+shotshit);
	GUI.Label(Rect(725,60,200,25),"Shots Missed :"+shotsmissed);	
	GUI.Label(Rect(900,60,200,25),"Level :"+GameController.level);
}

function OnTriggerEnter(otherObject:Collider)
{
	if(otherObject.gameObject.tag == "Asteroid")
	{
		health = health - 1;
		var otherAsteroidController = otherObject.gameObject.GetComponent(AsteroidController);
		otherAsteroidController.generateSmallAsteroids();
		
		Destroy(otherObject.gameObject);
	
		if (GameController.score == 10) {
			health += 5;
		}
		
		if (GameController.score == 15) {
			speed += 10;
		}
		
		if (health==0)
		{
			GameOver();
		}
	}
}

function GameOver() {
	Application.LoadLevel(8);
}