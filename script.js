// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
    const modelviewer = document.querySelector('model-viewer');
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
const modelViewer = document.querySelector('model-viewer');
const hamburger = document.querySelector('.hamburger');
const sidebar   = document.querySelector('.sidebar');
hamburger.addEventListener('click', function() {
  sidebar.classList.toggle('show'); 
})
window.onload = function() {
  modelViewer.addEventListener('progress', onProgress);
}



// Cek Device Apple Or Not 
const isAppleDevice = /iPhone|iPad|iPod/i.test(navigator.userAgent);
if (isAppleDevice) {
  console.log('Ini adalah perangkat Apple (iPhone atau iPad).');
} else {
  console.log('Ini bukan perangkat Apple.');
}

// Check Device Support AR Viewer Or Not 
document.addEventListener('DOMContentLoaded', function () {
    // Check IF Device Support AR Viewer Or Not
    console.log(modelViewer.canActivateAR)
})  

ARSupport(); 


function ARSupport() {
  document.addEventListener('DOMContentLoaded', function () {
    const modelViewer = document.querySelector('model-viewer'); // Ganti 'model-viewer' dengan ID atau selector yang sesuai
  
    // Periksa apakah perangkat mendukung AR-Viewer
    if (modelViewer.canActivateAR) {
      // Perangkat mendukung AR-Viewer, Anda dapat menambahkan tombol atau logika yang memungkinkan pengguna memulai AR
      const arButton = document.createElement('button');
      arButton.textContent = 'Lihat dalam AR';
      arButton.addEventListener('click', () => {
        modelViewer.activateAR();
      });
  
      // Masukkan tombol AR ke dalam slot "ar-button"
      modelViewer.appendChild(arButton);
    } else {
      // Perangkat tidak mendukung AR-Viewer, berikan pesan atau tindakan alternatif
      const unsupportedMessage = document.createElement('p');
      unsupportedMessage.textContent = 'AR tidak didukung pada perangkat ini.';
      modelViewer.appendChild(unsupportedMessage);
    }
  });
}
