import { writable_ } from '@ctx-core/svelte'
import { memo_, subscribe } from 'ctx-core/rmemo'
/**
 * @param {sig_T}sig
 * @private
 */
export function rmemo_writable_(sig) {
	let writable = writable_(sig())
	let unsubscribe_a = [
		writable.subscribe(val=>sig._ = val),
		subscribe(sig, ()=>
			memo_(()=>{
				writable.$ = sig()
			}))
	]
	writable.off = ()=>{
		unsubscribe_a.map(unsubscribe=>unsubscribe())
	}
	return writable
}
