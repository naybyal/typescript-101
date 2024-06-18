interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface User {
  name: Name;
  email: string;
  picture: Picture;
}

interface APIResponse {
  results: User[];
}

const apiUrl = 'https://randomuser.me/api/';

const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
const userDetailsDiv = document.getElementById('user-details') as HTMLDivElement;

const fetchRandomUser = async () => {
try {
  const response = await fetch(apiUrl);
  const data: APIResponse = await response.json();
  const user = data.results[0];

  displayUser(user);
} catch (error) {
  console.error('Error fetching user:', error);
}
};

const displayUser = (user: User) => {
userDetailsDiv.innerHTML = `
  <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
  <p>Email: ${user.email}</p>
  <img src="${user.picture.large}" alt="User Picture">
`;
};

generateBtn.addEventListener('click', fetchRandomUser);

function App() {

  return (
    <>
      <h1>Random User Generator</h1>
      <button id='generate-btn'>
        Generate User
      </button>
      <div id='user-details'></div>
    </>
  )
}

export default App
