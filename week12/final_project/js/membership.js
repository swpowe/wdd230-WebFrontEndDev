let label = document.getElementById('membership-desc')

function handleChange(e) {
    if(e.value === 'bronze') {
        label.innerText = "Bronze includes a listing our our monthly newsletter."
    }else if(e.value === 'silver') {
        label.innerText = "Silver includes sponsorship listing in the playbill."
    }else if(e.value === 'gold') {
        label.innerText = "Gold includes promotional listing on our business page."
    }
}