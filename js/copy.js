document.addEventListener('click', e => {
    if (e.target.dataset.action === 'copy-token') {
        copyText();
    }
})

function copyText() {
    var copyText = document.getElementById("token-id");
    copyText.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}