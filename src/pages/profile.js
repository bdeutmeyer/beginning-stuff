import React from "react";
import snm from "./../images/SNM.avif";
import nmr from "./../images/NMR.png";

const Profile = () => {
return (
	<div>
	<h1>
        I am a music teacher, but I'm going to try to be a tech person instead.
	</h1>
    <h3>
        <img src={nmr} alt="Naked Mole Rat" width="300" height="300" />
        <img src={snm} alt="Star-nosed Mole" width="400" />
    </h3>
    </div>
);
};

export default Profile;