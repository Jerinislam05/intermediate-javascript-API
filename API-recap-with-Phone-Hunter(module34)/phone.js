const loadPhone = async (searchText='13') => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones);
};

const displayPhones = (phones) => {
  // console.log(phones);
  //1. get element by id
  const phoneContainer = document.getElementById('phone-container');
//clear the container cards
  phoneContainer.textContent = '';

//   display show all button if there are more than 12 phones
const showAllContainer = document.getElementById('show-all-container');
if(phones.length > 12) {
    showAllContainer.classList.remove('hidden')
} else {
    showAllContainer.classList.add('hidden')
}

//   display only first 12 phones
  phones = phones.slice(0,12);

  phones.forEach((phone) => {
    // console.log(phone);
    //2. create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`;
    //3. set inner html
    phoneCard.innerHTML = `
    <figure>
        <img src="${phone.image}" alt="Shoes"/>
    </figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-center">
        <button onclick="handleShowDetails('${phone.slug}');show_details_modal.showModal()" class="btn btn-primary">show details</button>
        </div>
    </div>
        `;
        //4. appendChild
        phoneContainer.appendChild(phoneCard)
  });

//   hide loading spinner
toggleLoadingSpinner(false)

};

// 
const handleShowDetails = async (id) => {
    // console.log('clicked on show details', id);
    // load individual/single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;

    showPhoneDetails(phone);
}

const showPhoneDetails = (phone) => {
    console.log(phone);
    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML = `
        <img src="${phone.image}" alt="" />
        <p>Brand: ${phone.brand}</p>
        <p>Name: ${phone.name}</p>
        <p><span> Storage:</span>${phone?.mainFeatures?.storage}</p>
        <p><span> Display:</span>${phone?.mainFeatures?.displaySize}</p>
        <p><span> Release Date:</span>${phone?.mainFeatures?.releaseDate || 'No Date'}</p>
        <p><span> GPS:</span>${phone?.others?.GPS || 'No GPS'}</p>
    `


    // show the modal
    show_details_modal.showModal()
}

// handle search button
const handleSearchButton = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText);
}

// handle search recap
const handleSearch2 = () => {
    toggleLoadingSpinner(true);
    const searchField2 = document.getElementById('search-field2');
    const searchText2 = searchField2.value;
    loadPhone(searchText2);
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading) {
        loadingSpinner.classList.remove('hidden')
    } else {
        loadingSpinner.classList.add('hidden')
    }
}

loadPhone();
