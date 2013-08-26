#pragma strict

var moveSpeed: float;


function Start () {

}

function Update () {

if (Input.GetKey ("w")){
   transform.position.y = transform.position.y + moveSpeed * Time.deltaTime;
} 	
if (Input.GetKey ("a") && transform.position.x > -97.75){
   transform.position.x = transform.position.x - moveSpeed * Time.deltaTime;
} 	
if (Input.GetKey ("s")){
   transform.position.y = transform.position.y - moveSpeed * Time.deltaTime;
} 	
if (Input.GetKey ("d") && transform.position.x < 97.75){
   transform.position.x = transform.position.x + moveSpeed * Time.deltaTime;
} 	
	
 
}