//selecting nodes || nodes can be selected byId, byClass
const nameEl = document.querySelector('#name');
const professionEl = document.querySelector('.frontend');
const photoEl = document.querySelector('.item__photo');
const detailsEl = document.querySelector('.item__details');
const companyEl = document.querySelector('.item__company');

const bio = {
  name: 'Muhammad Usman',
  profesion: 'Frontend Developer',
  imageLink: './images/photo.jpeg',
};

//destructuring obj
const { name: myName, profesion, imageLink } = bio;
//adding textContent
nameEl.textContent = myName;
professionEl.textContent = profesion;

//item__photo: creating div
const imgDiv = document.createElement('div');
imgDiv.classList.add('img');
//creating img
const img = document.createElement('img');
img.src = imageLink;
img.alt = 'dev-photo';
//adding nodes to parent
imgDiv.appendChild(img);
photoEl.appendChild(imgDiv);

//item__details: I can create elements one by one and add to parent node as i've done in above section
detailsEl.innerHTML = `<h4>HELLO! I'M USMAN</h4>
        <p>I'm a Frontend Developer and I know Following Technologies</p>
        <h5>TECHNOLOGIES I KNOW</h5>
        <ul class="techno">
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>JS</li>
          <li>REACT</li>
        </ul>`;

// item__company:
companyEl.innerHTML = ` <h4>TECH HATCH DOING GREAT</h4>
        <span>Thank You Sir Arshad</span><br />
        <span>Thank You Sir Uzair</span><br />
        <span>
        Thanks to all team <a href="http://www.techhatch.org">
         </span>`;

// creating last span element and adding to existing ones
// companyEl.innerHTML += ` <span class="comp-name">TECH HATCH </span>`;
const techHatch = document.createElement('span');
techHatch.textContent = `TECH HATCH`;
techHatch.classList.add('comp-name');

// console.log(techHatch);
companyEl.appendChild(techHatch);
