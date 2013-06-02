#pragma strict
var laserSpeed:int;

function Start () {

}

function Update () {
	//move forward
	transform.Translate(Vector3.up * laserSpeed * Time.deltaTime);
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function OnTriggerEnter(otherObject:Collider)
{
	var counter:int;
	counter = 0;
	
	//short hand for initing and setting value
	var xpos:int=0;
	var ypos:int=0;
	var zpos:int=1;

	var otherAsteroidController:AsteroidController;
	
	if (otherObject.gameObject.tag == "Asteroid")
	{
		//increment score, destroy laser, destroy asteroid
		GameController.score++;
		SpaceshipController.shotshit++;
		Destroy(this.gameObject);
		
		otherAsteroidController = otherObject.gameObject.GetComponent(AsteroidController);
		otherAsteroidController.generateSmallAsteroids();
		
		Destroy(otherObject.gameObject);
		
	}

}