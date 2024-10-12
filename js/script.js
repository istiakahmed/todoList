// ============= Dom part
let inputHead     = document.querySelector('.inputHead')
let buttonHead    = document.querySelector('.buttonHead')
let todoBody      = document.querySelector('.todoBody')

console.log(buttonHead)

// ============ function part
buttonHead.addEventListener('click' , ()=>{
    if(inputHead.value == ''){
        alert('please enter value')
    }else{
        // =========== create element 
        let todoInside      = document.createElement('div')
        let inputBody       = document.createElement('input')
        let editButton      = document.createElement('button')
        let removeButton    = document.createElement('button')

        // ================= making child
        todoBody.appendChild(todoInside)
        todoInside.appendChild(inputBody)
        todoInside.appendChild(editButton)
        todoInside.appendChild(removeButton)

        // ================== adding class name
        todoInside.classList.add('todoInside')
        editButton.classList.add('editButton')
        removeButton.classList.add('removeButton')

        // ============= adding content into tags
        editButton.innerHTML   = 'Edit'
        removeButton.innerHTML = 'Delete'

        // ============== adding data into input 
        inputBody.value  = inputHead.value
        inputHead.value  = ''
        // ============== setting input attributes 
        inputBody.setAttribute('readonly' , 'readonly')
        // ============== removing data
        removeButton.addEventListener('click', ()=>{
            todoInside.remove()
        })
    }
}
)