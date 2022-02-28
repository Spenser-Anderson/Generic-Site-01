const toggle = document.getElementById("toggle");
const openModal = document.getElementById('open');
const closeModal = document.getElementById('close');
const modal = document.getElementById('modal');

//Toggle 

// toggle.addEventListener('click', () => 
// document.body.classList.toggle('show-nav')
// );

toggle.addEventListener('click', function() {
    document.body.classList.toggle('show-nav')
});


//Show Modal

openModal.addEventListener('click', () => 
    modal.classList.add('show-modal')
);


closeModal.addEventListener('click', () => 
    modal.classList.remove('show-modal')
);

//hide on outside click

window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false
);