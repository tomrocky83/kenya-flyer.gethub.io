document.getElementById('capt').style.display = 'none';

function showCapt() {
    const img = document.getElementById('capt');
    img.style.display = '';
    if (img.style.display == 'inline') {
        img.style.display = 'none';
    } else {
        img.style.display = 'block';
    }
}