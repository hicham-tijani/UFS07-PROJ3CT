// maps
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (p) {
        var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
        var mapOptions = {
            center: LatLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
        var marker = new google.maps.Marker({
            position: LatLng,
            map: map,
            title: "<div style = 'height:60px;width:200px'><b>Your location:</b><br />Latitude: " + p.coords.latitude + "<br />Longitude: " + p.coords.longitude
        });
        google.maps.event.addListener(marker, "click", function (e) {
            var infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent(marker.title);
            infoWindow.open(map, marker);
        });
    });
} else {
    alert('Geo Location feature is not supported in this browser.');
}




console.clear();

const { gsap } = window;

const cursorOuter = document.querySelector(".cursor--large");
const cursorInner = document.querySelector(".cursor--small");
let isStuck = false;
let mouse = {
	x: -100,
	y: -100,
};


let scrollHeight = 0;
window.addEventListener('scroll', function(e) {
	scrollHeight = window.scrollY
})

let cursorOuterOriginalState = {
	width: cursorOuter.getBoundingClientRect().width,
	height: cursorOuter.getBoundingClientRect().height,
};
const buttons = document.querySelectorAll("main button");

buttons.forEach((button) => {
	button.addEventListener("pointerenter", handleMouseEnter);
	button.addEventListener("pointerleave", handleMouseLeave);
});

document.body.addEventListener("pointermove", updateCursorPosition);
document.body.addEventListener("pointerdown", () => {
	gsap.to(cursorInner, 0.15, {
		scale: 2,
	});
});
document.body.addEventListener("pointerup", () => {
	gsap.to(cursorInner, 0.15, {
		scale: 1,
	});
});

function updateCursorPosition(e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
}

function updateCursor() {
	gsap.set(cursorInner, {
		x: mouse.x,
		y: mouse.y,
	});

	if (!isStuck) {
		gsap.to(cursorOuter, {
			duration: 0.15,
			x: mouse.x - cursorOuterOriginalState.width/2,
			y: mouse.y - cursorOuterOriginalState.height/2,
		});
	}

	requestAnimationFrame(updateCursor);
}

updateCursor();

function handleMouseEnter(e) {
	isStuck = true;
	const targetBox = e.currentTarget.getBoundingClientRect();
	gsap.to(cursorOuter, 0.2, {
		x: targetBox.left, 
		y: targetBox.top + scrollHeight,
		width: targetBox.width,
		height: targetBox.width,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0.1)",
	});
}

function handleMouseLeave(e) {
	isStuck = false;
	gsap.to(cursorOuter, 0.2, {
		width: cursorOuterOriginalState.width,
		height: cursorOuterOriginalState.width,
		borderRadius: "50%",
		backgroundColor: "transparent",
	});
}

// open widget

//maps
  function ToggleNav(navigation) {
	var e = document.getElementById(navigation);
	if(e.style.display == 'none')
	   e.style.display = 'block';
	else
	   e.style.display = 'none';
 }

//live
function ToggleNav(live) {
	var e = document.getElementById(live);
	if(e.style.display == 'none')
	   e.style.display = 'block';
	else
	   e.style.display = 'none';
 }

 //camera
function ToggleNav(camera) {
	var e = document.getElementById(camera);
	if(e.style.display == 'none')
	   e.style.display = 'block';
	else
	   e.style.display = 'none';
 }

  //chats
function ToggleNav(chats) {
	var e = document.getElementById(chats);
	if(e.style.display == 'none')
	   e.style.display = 'block';
	else
	   e.style.display = 'none';
 }

   //gree pass
function ToggleNav(green_pass) {
	var e = document.getElementById(green_pass);
	if(e.style.display == 'none')
	   e.style.display = 'block';
	else
	   e.style.display = 'none';
 }

    //more
function ToggleNav(more) {
	var e = document.getElementById(more);
	if(e.style.display == 'none')
	   e.style.display = 'block';
	else
	   e.style.display = 'none';
 }




// camera

var video = document.getElementById('CameraOutput');

$(document).ready(function(){
  // Get access to the camera!
	if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			// Not adding `{ audio: true }` since we only want video now
			navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
					//video.src = window.URL.createObjectURL(stream);
					video.srcObject = stream;
					video.play();
			});
	}
	
	$(".Settings").click(function(){
    $(".SettingsBlock").css({"bottom": "0px", "opacity": "1"});
  });
	
	$("#CameraOutput").click(function(){
    $(".SettingsBlock").css({"bottom": "-51%", "opacity": "0"});
  });
});


//chat

var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Salve Prof !',
  'come sta ?',
  'come le pare il mio progetto ?',
  'Spero le piaccia , Arrivederci :)',
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="https://media-exp1.licdn.com/dms/image/D4D03AQF4_5o9JmsePw/profile-displayphoto-shrink_400_400/0/1647862889049?e=1653523200&v=beta&t=_4MFLoc_x9i8Mlr5dWAMPs6JKKTLL_nnf60yVslEQyY" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="https://media-exp1.licdn.com/dms/image/D4D03AQF4_5o9JmsePw/profile-displayphoto-shrink_400_400/0/1647862889049?e=1653523200&v=beta&t=_4MFLoc_x9i8Mlr5dWAMPs6JKKTLL_nnf60yVslEQyY" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}

// close_chats

function closeWin() {
  myWindow.close();
}


// greenpass

function myFunction() {
  var x = document.getElementById("snackbar")
  x.className = "show";

  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
}




