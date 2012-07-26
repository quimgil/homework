/* Copyright (c) 2012, Quim Gil - quimgil@gmail.com
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met: 

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer. 
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those
of the authors and should not be interpreted as representing official policies, 
either expressed or implied, of the FreeBSD Project. */



// WHO SHOULD I FOLLOW FROM ALL MY FOLLOWERS?

// These are my followers + myself
var myFollowers = [john, mary, susan, peter, chris, itsMe];

// Each follower has some followers, and follows some people
function Follower(userId, followers, following) {
this.userId = userId;
this.followers = followers;
this.following = following;
}

// John is very popular, and follows just me!
var john = new Follower("@john", 1000, 1);

// Mary is so-so, follows many and is followed by as many.
var mary = new Follower("@mary", 26, 23);

// Susan is like Mary, but with bigger numbers
var susan = new Follower("@susan", 233, 230);

// Peter follows everybody but nobody follows him.
var peter = new Follower("@peter", 2, 250);

// Chris is... maybe a spammer with few blind followers?
var chris = new Follower("@chris", 25, 2500);

// And now yourself
var itsMe = new Follower(prompt("Your userId"),prompt("How many followers?"),prompt("And how many following?"));

// Let's make some conclusions out of this
Follower.prototype.karma = function() {

	// In principle more followers means more karma
	var karmaQuantity = this.followers / 100;

	// Ratio followers vs following, more is better
	var karmaRatio = this.followers / this.following;
	
	// Following more people means less atention to you
	// Assuming following 300 is the the limit of quality attention
	var followingMany = this.following;
	function karmaAttention(followingMany) {
		var attention = 0.00001;
		if (followingMany < 300) {
			attention = 1 - (Math.sin(Math.PI / 2 * followingMany / 300));
		}
		return attention;
	}
	
	// Magic karma formula
	var karmaValue = karmaQuantity * karmaRatio * karmaAttention(followingMany);
	return karmaValue.toFixed(8);
};

// Let's see what we've got here...
for (i = 0; i < myFollowers.length; i++) {
var followerName = myFollowers[i];
console.log(followerName.userId + " " + followerName.karma());
}

// ToDo:
// Sort the results by karma
// It would be nice to pull real profiles
// Then we can have a one page website for easy I/O.
