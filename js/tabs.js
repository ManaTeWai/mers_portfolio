const tabs = document.querySelectorAll('[data-tabs-handler]')
const tabsContent = document.querySelectorAll('[data-tabs-field]')
const title = document.querySelectorAll('.design__title')

for(let btn of tabs) {
    btn.addEventListener('click', () => {
        tabs.forEach(item => {
            item.classList.remove('design-list__item_active')
        })
        btn.classList.add('design-list__item_active')
        
        tabsContent.forEach(content => {
            if (content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove('hidden')
            } else {
                content.classList.add('hidden')
            }
        })

        title.forEach(title => {
            title.classList.toggle('hidden')
        })
    })
}