let popups = []; // Store active popups
var spacingTop = 50;

var backgroundColor = "#292929"
var textColor = 'white'

function createPopup(message) {
    let popup = document.createElement('div');
    popup.innerText = message;
    popup.style.position = 'fixed';
    popup.style.top = `${spacingTop + 50 * popups.length}px`; // Calculate position based on number of popups
    popup.style.right = '25px';
    popup.style.backgroundColor = backgroundColor;
    popup.style.color = textColor;
    popup.style.border = '1px solid #000';
    popup.style.padding = '10px';
    popup.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    popup.style.zIndex = '1000';
    popup.style.marginBottom = "30px"
    popup.style.borderRadius = "10px"
    popup.style.border = "solid 2px rgb(59, 59, 59)"
    document.body.appendChild(popup);

    popups.push(popup); // Add to active popups

    setTimeout(function() {
        popup.remove();
        popups = popups.filter(p => p !== popup); // Remove from active popups
        updatePopupPositions(); // Adjust positions of remaining popups
    }, 2000);
}

function updatePopupPositions() {
    popups.forEach((popup, index) => {
        popup.style.top = `${spacingTop + 50 * index}px`; // Update position
    });
}

function showPopups() {
    let timeout = Math.random() * (12000 - 1000);
    setTimeout(function() {
        const messages = [
            "deposited 0.5 SOL!",
            "deposited 1 SOL!",
            "deposited 1.5 SOL!",
            "deposited 2 SOL!",
            "deposited 2.5 SOL!",
            "deposited 3 SOL!"
        ];

        // Select a random message from the array
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        createPopup(`${generateSolanaAddress()} ${randomMessage}`);
        showPopups(); // Schedule the next popup
    }, timeout);
}

// Start the loop
showPopups();

function generateSolanaAddress() {
    const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'; // Base58 characters
    let address = '';

    // Generate 44 characters for the address
    for (let i = 0; i < 44; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        address += chars[randomIndex];
    }

    // Return the formatted string (first 4 and last 4 characters for display)
    return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
}

function generateEthereumAddress() {
    let address = '0x';

    // Generate 40 hexadecimal characters
    for (let i = 0; i < 40; i++) {
        address += Math.floor(Math.random() * 16).toString(16);
    }

    // Return the formatted string (first 2 and last 2 characters)
    return `${address.substring(0, 4)}...${address.substring(address.length - 2)}`;
}
