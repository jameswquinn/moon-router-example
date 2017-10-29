import Moon from 'moonjs'
/*
const app1 = new Moon({
  el: "#app1",
  data: {
    msg: "Hello Moon!"
  }
});
*/
export const Contact = Moon.component('Home', {
  props: ['msg'],
  template: '<p id="{{app2}} >Data from Parent: {{msg}}</p>'
});
