#pragma strict

function OnCollisionEnter(collision : Collision) {


 if(collision.gameObject.name=="Capsule")
   {

Application.LoadLevel(Application.loadedLevelName);
}
}