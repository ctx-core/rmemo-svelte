import { sig_ } from 'ctx-core/rmemo'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { rmemo_readable_ } from './index.js'
test('rmemo_readable_|subscribe,off', ()=>{
	const sig = sig_(0)
	const readable = rmemo_readable_(sig)
	equal(readable.$, 0)
	sig.set(1)
	equal(readable.$, 1)
	equal(sig(), 1)
	readable.off()
	sig.set(2)
	equal(readable.$, 1)
	equal(sig(), 2)
})
test.run()
