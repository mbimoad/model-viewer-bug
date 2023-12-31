const modelViewer = document.querySelector('model-viewer');

// Handles loading the events for <model-viewer>'s slotted progress bar
const myarbutton = document.querySelector('.myar-button'); 


const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
    const modelviewer = document.querySelector('model-viewer');
    myarbutton.setAttribute("slot", "ar-button");
    myarbutton.style.display = 'unset';
  } else {
    progressBar.classList.remove('hide');
  }
};


const urlParams = new URLSearchParams(window.location.search);
const modelParam = urlParams.get('model');
if (modelParam) {
  const modelViewer = document.querySelector('#modelViewer model-viewer');
  const modelSrc = 'models/' + modelParam + '.glb';
  const modelIosSrc = 'models/' + modelParam + '.usdz';
  modelViewer.src = modelSrc;
  modelViewer.setAttribute('ios-src', modelIosSrc);
}

isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  const qrCodeMobileNotShown = document.querySelector('#qrcode-data-div-id');
  qrCodeMobileNotShown.style.display = "none";
  const modelViewerMobileBtn = document.querySelector('#openDiv');
  modelViewerMobileBtn.style.display = "none";
} 

if (!isMobile) {
  const div = document.querySelector('#qrcode-data-div-id');
  const qrCodeDiv = document.querySelector('#qrcode-image-div');
  let qrCode = document.createElement("img");
  qrCode.id = "qr-code-picture";
  qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + window.location.href;
  qrCode.alt = "QR Code for " + window.location.href;
  qrCodeDiv.appendChild(qrCode);

  const closeDiv = document.querySelector('#closeDiv');
  const openDiv = document.querySelector('#openDiv');

  closeDiv.onclick = function () {
    div.style.display = "none";
    openDiv.style.display = "flex";
  };

  openDiv.onclick = function () {
    div.style.display = "flex";
    openDiv.style.display = "none";
  };

}

// New JS 
// Get Desktop or Mobile 
const responsiveModel = () => {
  if(isMobile) {
    modelViewer.setAttribute("src", "./assets/medicalbag.glb"); 
    modelViewer.setAttribute("poster", "./assets/medicalbag.webp"); 
  } else {
    modelViewer.setAttribute("src", "./assets/digitaltwin.glb"); 
    modelViewer.setAttribute("poster", "./assets/digitaltwin.webp"); 
  }
}
responsiveModel(); 
window.onload = function() {
  modelViewer.addEventListener('progress', onProgress);
  responsiveModel(); 
}
window.onresize = function() {
  responsiveModel(); 
}