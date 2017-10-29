import Moon from 'moonjs'

export const Contact = Moon.component('Contact', {
  data: {
    msg: 'Can you see me?'
  },
  template: `<div class="content">
               <h3>Contact</h3>
               <p>Dolor sit {{msg}} amet</p>
             </div>`
})
