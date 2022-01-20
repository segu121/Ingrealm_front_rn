import React from "react";
import '../../../../css/homePage/centralButtonCss.css'

function ButtonTest () {

    const buttons = document.querySelectorAll('.centralBtn');
    buttons.forEach((centralBtn) => {
        let target = centralBtn.querySelector('.BtnCenter');
        function handleMove(e) {
            const x = -50 + (e.pageX - centralBtn.offsetLeft - 300 / 2) / 3;
            const y = -10 + (e.pageY - centralBtn.offsetTop - 100 / 2) / 3;

            target.style.setProperty('--x', `${ x }px`)
            target.style.setProperty('--y', `${ y }px`)
        }
        centralBtn.addEventListener('mousemove', (e) => {
            handleMove(e);
        });
        centralBtn.addEventListener('touchmove', (e) => {
            handleMove(e.changedTouches[0]);
        });
    });





}

export default ButtonTest