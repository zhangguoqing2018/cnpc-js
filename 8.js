//扑克牌
let newCards = [];
const cards = {
    diamond: ["Dia1", "Dia2", "Dia3", "Dia4", "Dia5", "Dia6", "Dia7", "Dia8", "Diam9", "Diam10", "Diam11", "Diam12", "Diam13"],
    spade: ["Spa1", "Spa2", "Spa3", "Spa4", "Spa5", "Spa6", "Spa7", "Spa8", "Spa9", "Spa10", "Spa11", "Spa12", "Spa13"],
    heart: ["Hea1", "Hea2", "Hea3", "Hea4", "Hea5", "Hea6", "Hea7", "Hea8", "Hea9", "Hea10", "Hea11", "Hea12", "Hea13"],
    club: ["Clu1", "Clu2", "Clu3", "Clu4", "Clu5", "Clu6", "Clu7", "Clu8", "Clu9", "Clu10", "Clu11", "Clu12", "Clu13"],

    style: ['diamond', 'spade', 'heart', 'club'],

    method() {

        while (this.diamond.length > 0 && this.spade.length > 0 && this.heart.length > 0 && this.club.length > 0) {
            const various = this.style[Math.floor(Math.random() * 4)];
            switch (various) {
                case 'diamond':
                    newCards.push(this.diamond.shift());
                    break;
                case 'spade':
                    newCards.push(this.spade.shift());
                    break;
                case 'heart':
                    newCards.push(this.heart.shift());
                    break;
                case 'club':
                    newCards.push(this.club.shift());
                    break;
            }
        }
        return newCards;
    }
};
console.log(cards.method());
