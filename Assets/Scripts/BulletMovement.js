#pragma strict

var speed: float;

function Update () {

transform.position.y = transform.position.y + speed * Time.deltaTime;

}