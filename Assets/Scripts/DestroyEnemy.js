#pragma strict

function OnCollisionEnter(collision : Collision) {


 if(collision.gameObject.name=="Projectile 1")
   {
   Destroy(rigidbody);
}
}