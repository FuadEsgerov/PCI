const EYE_OPEN = `
<path d="M8.34129 2.90865C10.0451 2.90865 11.4263 4.30963 11.4263 6.03783C11.4263 7.76603 10.0451 9.16701 8.34129 9.16701C6.63747 9.16701 5.25626 7.76603 5.25626 6.03783C5.25626 4.30963 6.63747 2.90865 8.34129 2.90865ZM8.34129 4.0821C7.27641 4.0821 6.41315 4.95771 6.41315 6.03783C6.41315 7.11795 7.27641 7.99357 8.34129 7.99357C9.40618 7.99357 10.2694 7.11795 10.2694 6.03783C10.2694 4.95771 9.40618 4.0821 8.34129 4.0821ZM8.34129 0.167007C11.8995 0.167007 14.9711 2.63124 15.8234 6.08458C15.9009 6.39892 15.7126 6.71753 15.4027 6.79622C15.0928 6.8749 14.7787 6.68387 14.7011 6.36953C13.977 3.4354 11.3657 1.34045 8.34129 1.34045C5.31559 1.34045 2.70346 3.4372 1.98061 6.37306C1.9032 6.68744 1.58919 6.87865 1.27925 6.80014C0.9693 6.72163 0.780788 6.40312 0.858193 6.08874C1.70896 2.63336 4.78153 0.167007 8.34129 0.167007Z" fill="#19c2e5"/>
`;

const EYE_OFF = `
<line x1="1" y1="1" x2="15" y2="9" stroke="#19c2e5" stroke-width="1.5"/>
<path d="M8.34129 2.90865C10.0451 2.90865 11.4263 4.30963 11.4263 6.03783C11.4263 7.76603 10.0451 9.16701 8.34129 9.16701C6.63747 9.16701 5.25626 7.76603 5.25626 6.03783C5.25626 4.30963 6.63747 2.90865 8.34129 2.90865ZM8.34129 4.0821C7.27641 4.0821 6.41315 4.95771 6.41315 6.03783C6.41315 7.11795 7.27641 7.99357 8.34129 7.99357C9.40618 7.99357 10.2694 7.11795 10.2694 6.03783C10.2694 4.95771 9.40618 4.0821 8.34129 4.0821ZM8.34129 0.167007C11.8995 0.167007 14.9711 2.63124 15.8234 6.08458C15.9009 6.39892 15.7126 6.71753 15.4027 6.79622C15.0928 6.8749 14.7787 6.68387 14.7011 6.36953C13.977 3.4354 11.3657 1.34045 8.34129 1.34045C5.31559 1.34045 2.70346 3.4372 1.98061 6.37306C1.9032 6.68744 1.58919 6.87865 1.27925 6.80014C0.9693 6.72163 0.780788 6.40312 0.858193 6.08874C1.70896 2.63336 4.78153 0.167007 8.34129 0.167007Z" fill="#19c2e5"/>
`;

let pinVisible = {
  pin1: false,
  pin2: false
};

function renderEye(iconId, visible) {
  const svg = document.getElementById(iconId);
  svg.innerHTML = visible ? EYE_OFF : EYE_OPEN;
}

// Initialize SVGs as open
renderEye('eyeIcon1', false);
renderEye('eyeIcon2', false);

// Toggle function for PINs
function togglePIN(inputId, iconId) {
  pinVisible[inputId] = !pinVisible[inputId];
  const input = document.getElementById(inputId);
  input.type = pinVisible[inputId] ? "text" : "password";
  renderEye(iconId, pinVisible[inputId]);
}

// PIN validation and enable/disable button
const pin1 = document.getElementById('pin1');
const pin2 = document.getElementById('pin2');
const confirmBtn = document.getElementById('confirmBtn');

function validatePins() {
  const p1 = pin1.value.trim();
  const p2 = pin2.value.trim();
  // Enable if both are 4 digits and match
  confirmBtn.disabled = !(p1.length === 4 && /^\d+$/.test(p1) && p1 === p2);
}

pin1.addEventListener('input', validatePins);
pin2.addEventListener('input', validatePins);

// Optional: Prevent non-digit input
[pin1, pin2].forEach(input => {
  input.addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '').slice(0, 4);
  });
});

// Form submit
document.getElementById('pinForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('PIN uğurla təyin olundu!');
});