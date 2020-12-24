//META{"name":"AnnoyingFrenchPeople"}*//
var AnnoyingFrenchPeople = (function () {
    class OpenLinksInDiscordV2 {
        getName() { return "AnnoyingFrenchPeople"; }
        getAuthor() { return "NEvana"; }
        getDescription() { return "brrrrrrrrrrr"; }
        getVersion() { return "0.0.1"; }
        start() {
            var croissant = new Audio('https://nevana.dev/french.mp3');
            this.playCroissant = () => croissant.play()
            
            document.addEventListener("click", this.playCroissant)
        }
        stop() { document.removeEventListener("click", this.playCroissant) }
    }
    return OpenLinksInDiscordV2;
})()