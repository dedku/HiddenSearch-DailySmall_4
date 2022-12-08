import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="search active">
    <input type="text" class="input" placeholder="Search..."/>
    <button class="btn">
      <i class="fas fa-search"></i>
    </button>
  </div>
`
const search = document.querySelector('.search') as HTMLDivElement
const btn = document.querySelector('.btn') as HTMLButtonElement
const input = document.querySelector('.input') as HTMLInputElement


btn?.addEventListener('click', () => {
  search?.classList.toggle('active')
  input?.focus()
})