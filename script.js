
const viewDisplay = (data) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerText = "";
    data.forEach(card => {
        const thumbnail = card.thumbnail;
        const title = card.title;
        const authorProfilePic = card.authors[0].profile_picture;
        const authorProfileName = card.authors[0].profile_name;
        const authorVerified = card.authors[0].verified;
        const views = card.others.views;
        const postedDate = card.others.posted_date;
        const divElement = document.createElement('div'); 

        // create element and use template string to apply some logic for the view
        // append the element
    });
}

const curActiveCatId = null; // intialially we don't know the active category

document.getElementById('sort-view').addEventListener('click', () => {
    if (curActiveCatId !== null) {
        getView(curActiveCatId).then(data => {
            // sort data
            data.sort((a, b) => {
                return parseFloat(b.others?.views) - parseFloat(a.others?.views);
            })
            viewDisplay(data);
        })
    }
})

const getView = async (catId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catId}`);
    const json = await res.json();
    return json.data;
}
