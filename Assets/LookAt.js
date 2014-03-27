#pragma strict
var sheThe1st : GameObject;
var sheThe2nd : GameObject;
private var lookState : int = 0;

function Start () {

}

function Update () {

	if (lookState == 2) {
		Destroy (sheThe1st);
		Destroy (sheThe2nd);
		Destroy (gameObject);
	}
	else if (lookState == 0) {
		if (transform.position.x < 0) lookState = 1;
		transform.LookAt(sheThe1st.transform);
	}
	else { 
		if (transform.position.x > 0) lookState = 2;
		transform.LookAt(sheThe2nd.transform);
	}

}