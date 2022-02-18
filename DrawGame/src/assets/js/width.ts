import { App } from 'vue'

function resize(app: App, options: any) {
  app.directive('resize', {
    mounted(el, binding) {
      // 这里使用debounce防抖处理，防抖的延时时间可以通过自定义指令的参数传过来，如`v-resize:300`表示300ms延时
      // 也可以将此处延时去掉，放在绑定的函数中自定义
      function debounce(fn: Function, delay = 16) {
        let t: any = null
        return function (this: any) {
          if (t) clearTimeout(t);
          const context = this;
          const args = arguments;
          t = setTimeout(function () {
            fn.apply(context, args)
          }, delay)
        }
      }
      el._resizer = new window.ResizeObserver(debounce(binding.value, Number(binding.arg) || 16))
      el._resizer.observe(el)
    },
    unmounted(el) {
      el._resizer.disconnect()
    },
  })
}

export default {
  install: resize
}

