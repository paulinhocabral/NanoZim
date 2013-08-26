#pragma strict

var speedRotation: float;
var sideMoveSpeed: float;
var downMoveSpeed: float;
var player : GameObject;


function Update () {

transform.Rotate(0, 0, Time.deltaTime * speedRotation);

if (player.transform.position.x > transform.position.x){
	transform.Translate(sideMoveSpeed * Time.deltaTime,0,0, Space.World);
}
else{
	transform.Translate(-sideMoveSpeed * Time.deltaTime,0,0, Space.World);
}

transform.Translate(0,-downMoveSpeed * Time.deltaTime,0, Space.World);

}