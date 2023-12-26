async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
/*
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  document.addEventListener('DOMContentLoaded', async () => {
    const cardsContainer = document.querySelector('.cards');
    const infoParagraph = document.querySelector('.info');
  
    // Remove existing learner cards
    cardsContainer.innerHTML = '';
  
    // Display loading message
    infoParagraph.textContent = 'Fetching learner cards...';
  
    try {
      // Fetch learner cards data asynchronously (replace 'your-api-endpoint' with the actual API endpoint)
      const response = await fetch('your-api-endpoint');
      const data = await response.json();
  
      // Process the fetched data and update the DOM
      data.forEach((learner) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h3>${learner.name}</h3>
          <div>${learner.email}</div>
          <h4 class="closed">Mentors</h4>
          <ul>${learner.mentors.map((mentor) => `<li>${mentor}</li>`).join('')}</ul>
        `;
        cardsContainer.appendChild(card);
      });
  
      // Remove loading message
      infoParagraph.textContent = '';
    } catch (error) {
      console.error('Error fetching learner cards:', error.message);
      // Display an error message if fetching fails
      infoParagraph.textContent = 'Error fetching learner cards. Please try again later.';
    }
  });
  */
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()



