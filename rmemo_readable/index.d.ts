import type { Readable_ } from '@ctx-core/svelte'
import type { rmemo_T } from 'ctx-core/rmemo'
export declare function rmemo_readable_<val_T>(
	rmemo:rmemo_T<val_T>
):Readable_<val_T>&{
	off():void
}
