let burnedValue = parseFloat(document.getElementById('burned').innerText);
let presaleValue = parseFloat(document.getElementById('presale').innerText);
let liquidityValue = parseFloat(document.getElementById('liquidity').innerText);
let marketingValue = parseFloat(document.getElementById('marketing').innerText);
let airdropValue = parseFloat(document.getElementById('airdrop').innerText);

const pie = document.querySelector('.tocenomics-pie__pie');

pie.style.background = `conic-gradient(
    rgba(219, 66, 84, 1) 0%,
    rgba(219, 66, 84, 1) ${burnedValue - 0.4}%,
    rgba(255, 99, 132, 0) ${burnedValue - 0.4}%,
    rgba(54, 162, 235, 0) ${burnedValue}%,
    rgba(160, 127, 242, 1) ${burnedValue}%,
    rgba(160, 127, 242, 1) ${(burnedValue + presaleValue) - 0.4}%,
    rgba(54, 162, 235, 0) ${(burnedValue + presaleValue) - 0.4}%,
    rgba(204, 101, 254, 0) ${burnedValue + presaleValue}%,
    rgba(180, 239, 1, 1) ${burnedValue + presaleValue}%,
    rgba(180, 239, 1, 1) ${(burnedValue + presaleValue + liquidityValue) - 0.4}%,
    rgba(255, 206, 86, 0) ${(burnedValue + presaleValue + liquidityValue) - 0.4}%,
    rgba(255, 206, 86, 0) ${burnedValue + presaleValue + liquidityValue}%,
    rgba(42, 171, 238, 1) ${burnedValue + presaleValue + liquidityValue}%,
    rgba(42, 171, 238, 1) ${(burnedValue + presaleValue + liquidityValue + marketingValue) - 0.4}%,
    rgba(75, 192, 192, 0) ${(burnedValue + presaleValue + liquidityValue + marketingValue) - 0.4}%,
    rgba(255, 99, 132, 0) ${burnedValue + presaleValue + liquidityValue + marketingValue}%,
    rgba(255, 255, 255, 1) ${burnedValue + presaleValue + liquidityValue + marketingValue}%,
    rgba(255, 255, 255, 1) ${(burnedValue + presaleValue + liquidityValue + marketingValue + airdropValue) - 0.4}%,
    rgba(75, 192, 192, 0) ${(burnedValue + presaleValue + liquidityValue + marketingValue + airdropValue) - 0.4}%,
    rgba(255, 99, 132, 0) 100%
)`;
