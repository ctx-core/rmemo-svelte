import { sig_ } from 'ctx-core/rmemo'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { rmemo_writable_ } from './index.js'
test('rmemo_writable_|subscribe,off', ()=>{
	const sig = sig_(0)
	const writable = rmemo_writable_(sig)
	equal(writable.$, 0)
	sig.set(1)
	equal(writable.$, 1)
	equal(sig(), 1)
	writable.$ = 2
	equal(writable.$, 2)
	equal(sig(), 2)
	writable.off()
	sig.set(3)
	equal(writable.$, 2)
	equal(sig(), 3)
	writable.$ = 4
	equal(writable.$, 4)
	equal(sig(), 3)
})
test.run()
