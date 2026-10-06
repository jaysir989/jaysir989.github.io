<script>
    const songSelect = document.getElementById("songSelect");
    const musicPlayer = document.getElementById("musicPlayer");

    songSelect.addEventListener("change", function () {
    musicPlayer.src = this.value;
    musicPlayer.play();
});
</script>