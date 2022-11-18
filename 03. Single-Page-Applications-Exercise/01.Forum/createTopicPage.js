let mainEl = document.querySelector(`main`)
let formEl = mainEl.querySelector(`form`)

export function createTopic() {
    formEl.addEventListener(`submit`, function (e) {
        e.preventDefault()
        let formData = new FormData(e.target)
        if (e.submitter.textContent == `Post`) {
            let title = formData.get(`topicName`)
            let username = formData.get(`username`)
            let post = formData.get(`postText`)
            fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`)
        } else if (e.submitter.textContent == 'Cancel') {
            formEl.reset()
        }

    })

}


