import '@/utils/rem'
// import "lib-flexible";
let timer = null
timer = setInterval(() => {
	setTimeout(() => {
		function setNativeValue(element, value) {
			const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set
			const prototype = Object.getPrototypeOf(element)
			const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set

			if (valueSetter && valueSetter !== prototypeValueSetter) {
				prototypeValueSetter.call(element, value)
			} else {
				valueSetter.call(element, value)
			}
		}
		setNativeValue(document.getElementsByClassName('webcast-chatroom___textarea')[0], '关注超值红料威信公众号')
		document.getElementsByClassName('webcast-chatroom___textarea')[0].dispatchEvent(new Event('input', { bubbles: true }))
		document.querySelector('.webcast-chatroom___send-btn').disabled = false
		document.querySelector('.webcast-chatroom___send-btn').style.cursor = 'default'
		document.querySelector('.webcast-chatroom___send-btn').click()
	}, Math.random() * 50 * 1000)
}, 10000)
