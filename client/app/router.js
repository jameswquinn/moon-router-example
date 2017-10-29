import Moon from 'moonjs'
import MoonRouter from 'moon-router'

Moon.use(MoonRouter);

Moon.component("Home", {
  data: {
    msg1: 'Hello James... ',
    msg2: ' Can you see this?'
  },
  /*
    data: () => ({
        msg1: 'Hello James... ',
        msg2: ' Can you see this?'
    }),
    */
    template:
        `<div>
             <h1>Calculator</h1>
             <span>{{msg1 + msg2}}</span>
         </div>`,

});

    Moon.component("Calculator", {
        data: {
            number1: 1,
            number2: 2
        },
        template:
            `<div>
                 <h1>Calculator</h1>
                 <input type="number" m-model="number1">
                 +
                 <input type="number" m-model="number2">
                 =
                 <span>{{total}}</span>
             </div>`,
         computed: {
            total: {
                get: function() {
                  return +this.get("number1") + +this.get("number2");
                }
            }
        }
    });

    const router = new MoonRouter({
        map: {
            "/": "Home",
            "/calculator": "Calculator"
        }
    });

    new Moon({
        el: "#app",
        router: router
    });
