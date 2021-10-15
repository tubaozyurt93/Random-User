const country = document.getElementById("country");
const age = document.getElementById("age");
const filtersList = document.getElementById("filtersList");
let data;
let filteredItems = [];

window.addEventListener('load', async () => {
	// Random User API adresinden verileri get isteği atarak çekme
	data = await fetch("https://randomuser.me/api/?results=10")
	.then(response => response.json())
	.then(data => data.results)
	.catch(error => console.error(error));

	// Ülke adlarını select'e ekletme
	setCountries(data.map((user) => user.location.country));
});


const setUsers = (user) => {
	return `<li>
		<figure>
			<img src=${user.picture.medium} />
		</figure>
		<strong>${user.name.first} ${user.name.last}</strong>
		<span>${user.dob.age}</span>
		<span>${user.gender}</span>
		<a href= ${user.email}>${user.email}</a>
		<address>${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode} </address>
	</li>`;
}

const filter = () => {
	filteredItems = data.filter(user => user.dob.age === parseInt(age.value) && user.location.country === country.value);
	filteredItems.map((user) => filtersList.innerHTML += setUsers(user));
}

const setCountries = (countries) => {
	// Ülkeleri select'e atayan fonksiyon
	countries.map((countryName) => {
		let option = document.createElement("option");
		option.value = countryName;
		option.text = countryName;
		country.add(option);
	});
};

function newquery() {
    localStorage.clear();
    window.location.href="index.html";
}
