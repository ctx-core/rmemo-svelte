import { readable_ } from '@ctx-core/svelte'
import { memo_, subscribe } from 'ctx-core/rmemo'
/**
 * @param {rmemo_T}rmemo
 * @private
 */
export function rmemo_readable_(rmemo) {
	let set
	let readable = readable_(rmemo(), _set=>{
		set = _set
	})
	let unsubscribe_a = [
		subscribe(rmemo, ()=>
			memo_(()=>{
				set(rmemo())
			}))
	]
	readable.off = ()=>{
		unsubscribe_a.map(unsubscribe=>unsubscribe())
	}
	return readable
}
