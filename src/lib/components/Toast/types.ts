export interface ToastOpts {
	duration?: number;
	props?: object;
	icon?: Component;
	progress?: boolean;
	onClose?: () => void;
	onClick?: () => void;
}

export type PromiseToastOpts = ToastOpts & {
	onSuccess: Toast;
	onFailure: Toast;
};

const defaultToastOpts: ToastOpts = {
	duration: 15000,
	props: {},
	progress: true
};

export class Toast {
	public opts: ToastOpts;

	constructor(
		public id: string,
		public component: Component,
		public title: string,
		public content: string,
		opts?: ToastOpts
	) {
		this.opts = {
			...defaultToastOpts,
			...opts
		};
	}
}

export type ToastDict = {
	[id: string]: Toast;
};

export type Component = ConstructorOfATypedSvelteComponent;
