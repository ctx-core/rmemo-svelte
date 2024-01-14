import type { Writable_ } from '@ctx-core/svelte'
import type { sig_T } from 'ctx-core/rmemo'
export declare function rmemo_writable_<val_T>(
	sig:sig_T<val_T>
):Writable_<val_T>&{
	off():void
}
