#pragma strict
var speed:int;
var rotate:float;
var horizontalDirection:float;
var verticalDirection:float;
var explosion:GameObject;
var size:int = 2;

function generateSmallAsteroids()
{
// stop the function from generating if the asteroid is small
	Explode();


		var counter:int;
		counter = 0;
	
		for(counter = 0; counter<5; counter++)
		{
			var smallAsteroid:Rigidbody = Instantiate(this.rigidbody, transform.position, Quaternion.identity);
			//Decrease size of asteroid by 1
			smallAsteroid.GetComponent(AsteroidController).size = size - 1;
			smallAsteroid.transform.localScale = Vector3(size - 1, size - 1, 1);	
		}
	}
	
	// destroy self
	Destroy(gameObject);
}

function Explode() {
	Instantiate(explosion, transform.position, Quaternion.identity);
}

function Start () {
	
//	rotate = Random.Range(-30.0, 30.0);
	
	//coordinates position to generate horizontal movement
	horizontalDirection = Random.Range(-4.0,4.0);
	//coordinates position to generate vertical movement
	verticalDirection = Random.Range(-4.0,4.0);
}

function Update () {
	
	BordersCalculator.EnableBorders(this.transform);
	
	//vertical movement
	transform.Translate(Vector3.left * speed * horizontalDirection * Time.deltaTime);
	//vertical movement
	transform.Translate(Vector3.up *  speed * verticalDirection * Time.deltaTime);
}
