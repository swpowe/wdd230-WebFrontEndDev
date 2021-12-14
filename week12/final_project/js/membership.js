let label = document.getElementById('membership-desc')

function handleChange(e) {
    if(e.value === 'bronze') {
        label.innerText = "Bronze includes ..."
    }else if(e.value === 'silver') {
        label.innerText = "Silver includes ...."
    }else if(e.value === 'gold') {
        label.innerText = "Gold includes ....."
    }
}