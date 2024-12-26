const listItems = document.querySelectorAll('li')
const lists = document.querySelectorAll('ul')
lists.forEach(list => {
    list.setAttribute('role', 'list')
})
listItems.forEach(listItem => {
    listItem.setAttribute('role', 'listitem')
})