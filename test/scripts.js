function setDynamicMessage() {
    const now = new Date();
    const hours = now.getHours();
    const messageElement = document.getElementById('dynamicMessage');

    if (hours < 12) {
      messageElement.textContent = 'Good Morning, Visitor!';
    } else if (hours < 18) {
      messageElement.textContent = 'Good Afternoon, Visitor!';
    } else {
      messageElement.textContent = 'Good Evening, Visitor!';
    }
  }

  // Change the background color to a random color
  function changeBackgroundColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  }

  // Set the initial message when the page loads
  window.onload = setDynamicMessage;