'use strict'

window.onload = function () {
    const parallax = document.querySelector('.wrapper');

    if(parallax) {
        // main__conclusion
        const decor = document.querySelector('.conclusion__decor');
        const previewLogo = document.querySelector('.conclusion__preview-image');
        // for first screen
        const decorBlue = document.querySelector('.hero-preview__decor-blue');
        const decorRed = document.querySelector('.hero-preview__decor-red');
        const frame = document.querySelector('.hero-preview__frame');
        const mcduck = document.querySelector('.hero-preview__mcduck');
        const money = document.querySelector('.hero-preview__money');
        const decorOther = document.querySelector('.hero-preview__other');
        // for utility
        const blueMash = document.querySelector('.utility__decor-bg');
        const duckHead = document.querySelector('.utility__decor-duck');
        // for meet
        const coin1 = document.querySelector('.meet-article__decor-coin_top-left');
        const coin2 = document.querySelector('.meet-article__decor-coin_top-right');
        const coin3 = document.querySelector('.meet-article__decor-coin_bottom-right');
        const meetDecor = document.querySelector('.meet-article__decor');
        // for airdrop
        const airCoin1 = document.querySelector('.airdrop-article__coin1');
        const airCoin2 = document.querySelector('.airdrop-article__coin2');
        const airMoney = document.querySelector('.airdrop-article__money');

        // main__conclusion
        const forDecor = -50;
        const forPreviewLogo = 20;
        // for first screen
        const forDecorBlue = 60;
        const forDecorRed = 40;
        const forFrame = -70;
        const forMcduck = 45;
        const forMoney = 75;
        const forDecorOther = 64;
        // for utility
        const forBlueMash = 30;
        const forDuckHead = -50;
        // for meet
        const forCoin1 = 45;
        const forCoin2 = -15;
        const forCoin3 = 40;
        const forMeetDecor = 30;
        // for airdrop
        const forAirCoin1 = 20;
        const forAirCoin2 = -10;
        const forAirMoney = 30;
        

        const speed = 0.12;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            // main__conclusion
            decor.style.cssText = `transform: translate(${positionX / forDecor}%, ${positionY / forDecor}%);`;
            previewLogo.style.cssText = `transform: translate(${positionX / forPreviewLogo}%, ${positionY / forPreviewLogo}%);`;

            // for first screen
            decorBlue.style.cssText = `transform: translate(${positionX / forDecorBlue}%, ${positionY / forDecorBlue}%);`;
            decorRed.style.cssText = `transform: translate(${positionX / forDecorRed}%, ${positionY / forDecorRed}%);`;
            frame.style.cssText = `transform: translate(${positionX / forFrame}%, ${positionY / forFrame}%);`;
            mcduck.style.cssText = `transform: translate(${positionX / forMcduck}%, ${positionY / forMcduck}%);`;
            money.style.cssText = `transform: translate(${positionX / forMoney}%, ${positionY / forMoney}%);`;
            decorOther.style.cssText = `transform: translate(${positionX / forDecorOther}%, ${positionY / forDecorOther}%);`;

            // for utility
            blueMash.style.cssText = `transform: translate(${positionX / forBlueMash}%, ${positionY / forBlueMash}%);`;
            duckHead.style.cssText = `transform: translate(${positionX / forDuckHead}%, ${positionY / forDuckHead}%);`;

            // for meet
            coin1.style.cssText = `transform: translate(${positionX / forCoin1}%, ${positionY / forCoin1}%);`;
            coin2.style.cssText = `transform: translate(${positionX / forCoin2}%, ${positionY / forCoin2}%);`;
            coin3.style.cssText = `transform: translate(${positionX / forCoin3}%, ${positionY / forCoin3}%);`;
            meetDecor.style.cssText = `transform: translate(${positionX / forMeetDecor}%, ${positionY / forMeetDecor}%);`;

            // for airdrop
            airCoin1.style.cssText = `transform: translate(${positionX / forAirCoin1}%, ${positionY / forAirCoin1}%);`;
            airCoin2.style.cssText = `transform: translate(${positionX / forAirCoin2}%, ${positionY / forAirCoin2}%);`;
            airMoney.style.cssText = `transform: translate(${positionX / forAirMoney}%, ${positionY / forAirMoney}%);`;


            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            // nulls
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });
    }
}