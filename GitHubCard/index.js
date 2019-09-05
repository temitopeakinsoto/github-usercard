/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function fetchGithubInformation(githubData){
    const cardDivElement = document.createElement('div');
    cardDivElement.classList.add('card');

    const img = document.createElement('img');
    img.setAttribute('src', githubData.data.avatar_url);

    cardInfoDivElement = document.createElement('div');
    cardInfoDivElement.classList.add('card-info');
    
    const h3 = document.createElement('h3');
    h3.classList.add('name');
    h3.textContent = githubData.data.name;
    cardInfoDivElement.appendChild(h3);

    for (let i = 0; i < 6; i++) {
      const p = document.createElement('p');      
      if (i === 0){
        p.classList.add('username');
        p.textContent = githubData.data.login
      }
      else if(i === 1){
        p.textContent = `Location: ${githubData.data.location}`;
      }
      else if(i === 2){
        p.textContent = "Profile: ";
        const a = document.createElement('a');
        a.setAttribute('href', githubData.data.url);
        a.textContent = githubData.data.url;
        p.appendChild(a);
      }
      else if(i === 3){
        p.textContent = `Followers: ${githubData.data.followers}`;
      }
      else if(i === 4){
        p.textContent = `Following: ${githubData.data.following}`;
      }
      else if(i === 5){
        p.textContent = `Bio: ${githubData.data.bio}`;
      }
      cardInfoDivElement.appendChild(p);
    }
  
    cardDivElement.appendChild(img);
    cardDivElement.appendChild(cardInfoDivElement);

    document.querySelector('.cards').appendChild(cardDivElement);
  }   


  axios.get('https://api.github.com/users/temitopeakinsoto')
  .then(response => {
    fetchGithubInformation(response)
  })
  .catch(error => {
  console.log(error.message);
  });  
//}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];
followersArray.forEach(follower => {
  const axiosBaseUrl = 'https://api.github.com/users/';
  const followerUrl = axiosBaseUrl + follower;
  axios.get(followerUrl)
  .then(response => {
    fetchGithubInformation(response);
  })
  .catch();  
})

