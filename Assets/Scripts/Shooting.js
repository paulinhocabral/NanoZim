#pragma strict

var projectile : Transform;

function Update () {

if (Input.GetKeyDown("space")){
   Instantiate(projectile, transform.position, transform.rotation);
}

}