// wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', (event) => {

    // define the element on the parent page that is your container
    targetElement = document.getElementById('arRenderContainer');
    modelID = targetElement.dataset.arModel;

    const buttonContainer = document.getElementById("arRenderContainer");

    // optional: load a stylesheet that targets your div for styling a button and iframe
    var customStylesheet = document.createElement("link");
    customStylesheet.href = "https://www.aryourcommerce.com/arviewer/noviostores/brievenbusdirect/ALLUX600/embed.css";
    customStylesheet.type = "text/css";
    customStylesheet.rel = "stylesheet";
    customStylesheet.media = "screen,print";

    // load a custom stylesheet
    document.getElementsByTagName("head")[0].appendChild(customStylesheet);

    // NEW function to toggle show
    function toggleMyAr() {
        targetFrame = document.getElementById('myArOverlay');

        if (targetFrame) {

            if (targetFrame.style.display === 'none') {
                targetFrame.style.display = 'flex';
            } else {
                targetFrame.style.display = 'none';
            }
        }

    }

    // create a button that toggles an iframe
    //newButton = document.createElement('a');
    //newButton.href = '#';
    //newButton.id = 'myArButton';
    //newButton.innerHTML = 'test';


    // Create the button element
    const newButton = document.createElement("button");
    newButton.id = "myArButton";

    // Set the background color of the button to white
    newButton.style.background = "white";

    // Create the image element
    const image = document.createElement("img");
    image.src = "https://www.aryourcommerce.com/arviewer/noviostores/brievenbusdirect/ALLUX600/images/ar-ecombutton.png";
    image.alt = "Image Button";

    // Append the image to the button
    newButton.appendChild(image);

    // Add the button to the container
    buttonContainer.appendChild(newButton);

    // add toggle function to the button
    newButton.addEventListener('click', function () {

        toggleMyAr();
	
  
    });

    // Create an overlay container
    myOverlay = document.createElement('div');
    myOverlay.id = "myArOverlay";
    myOverlay.style.display = 'none';

    myOverlayClose = document.createElement('button');
    myOverlayClose.innerText = 'X';
    myOverlayClose.id = 'myArOverlayClose';


    myOverlayClose.addEventListener('click', function () {
        toggleMyAr();
    });

    myOverlayInner = document.createElement('div');
    myOverlayInner.id = "myArOverlayInner";

    // Create a new iframe to append to the parent page container
    newFrame = document.createElement('iframe');
    newFrame.src = 'https://www.aryourcommerce.com/arviewer/noviostores/brievenbusdirect/ALLUX600/';
    newFrame.id = 'myArFrame';

    // Creating the new Dom
    myOverlayInner.appendChild(myOverlayClose);
    myOverlayInner.appendChild(newFrame);
    myOverlay.appendChild(myOverlayInner);

    // append our new elements to the parent page
    targetElement.appendChild(newButton);
    document.body.appendChild(myOverlay);

    // toggle if #openAr is present
    if (window.location.hash) {
        var hash = window.location.hash.substring(1);

        if (hash == "openAr") {
            toggleMyAr();
        }
    }
 const targetFrameN = document.getElementById('myArOverlay');
targetFrameN.addEventListener('click', function (event) {
    const targetOverlayInner = document.getElementById('myArOverlayInner');
    
    // Check if the clicked element is not the inner content
    if (event.target !== targetOverlayInner) {
        targetFrameN.style.display = 'none';
    }
});

});