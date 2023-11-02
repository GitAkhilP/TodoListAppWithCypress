document.querySelector('.header-container button#NewList').addEventListener('click', function () {
        const listForm = document.createElement('form')
        listForm.setAttribute('action', '/lists')
        listForm.setAttribute('method', 'POST')
        listForm.setAttribute('class', 'temp')
        const input = document.createElement('input')
        input.setAttribute('name', 'listName')
        input.setAttribute('placeholder', ' List Name: ')
        listForm.appendChild(input)
        const ref = document.querySelector('div.body-container')
        document.body.insertBefore(listForm, ref)
})

var listOfBtns = document.querySelectorAll('.header-container .row div:not(:last-child) button')
for (var i = 0; i < listOfBtns.length; i++) {
        listOfBtns[i].addEventListener('click', e => {
                window.location.href = `/lists/${e.target.innerText}`
        })
}

var listOfItems = document.querySelectorAll('input[type="checkbox"]')
listOfItems.forEach(items => {
        items.addEventListener('click', function (e) {
                console.log(e.target.classList[0])
                document.querySelector(`li.itemNum${e.target.classList[0]} input[type="text"]`).classList.toggle('striked')
        })
})


