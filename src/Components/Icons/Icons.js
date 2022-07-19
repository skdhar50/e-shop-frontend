export function CartIcon() {
	return (
		<svg
			className="w-[0.94rem] md:w-[1rem] h-fit"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M6.25 18.75C6.94036 18.75 7.5 18.1904 7.5 17.5C7.5 16.8096 6.94036 16.25 6.25 16.25C5.55964 16.25 5 16.8096 5 17.5C5 18.1904 5.55964 18.75 6.25 18.75Z" />
			<path d="M15 18.75C15.6904 18.75 16.25 18.1904 16.25 17.5C16.25 16.8096 15.6904 16.25 15 16.25C14.3096 16.25 13.75 16.8096 13.75 17.5C13.75 18.1904 14.3096 18.75 15 18.75Z" />
			<path d="M3.1125 1.7525C3.08419 1.61087 3.0077 1.48341 2.89604 1.3918C2.78438 1.3002 2.64443 1.25009 2.5 1.25H0V2.5H1.9875L4.3875 14.4975C4.41581 14.6391 4.4923 14.7666 4.60396 14.8582C4.71562 14.9498 4.85557 14.9999 5 15H16.25V13.75H5.5125L5.0125 11.25H16.25C16.3922 11.25 16.5301 11.2015 16.641 11.1125C16.7519 11.0235 16.8291 10.8994 16.86 10.7606L18.2775 4.375H16.9981L15.7487 10H4.7625L3.1125 1.7525Z" />
			<path d="M13.4913 4.11625L11.25 6.3575V1.25H10V6.3575L7.75875 4.11625L6.875 5L10.625 8.75L14.375 5L13.4913 4.11625Z" />
		</svg>
	);
}

export function HeartIcon({ className }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			className={className}
			viewBox="0 0 24 24"
		>
			<path
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3Z"
			/>
		</svg>
	);
}

export function QuickView() {
	return (
		// <svg
		// 	className="w-[0.94rem] md:w-[1rem] h-fit"
		// 	viewBox="0 0 20 20"
		// 	xmlns="http://www.w3.org/2000/svg"
		// >
		// 	<path
		// 		fillRule="evenodd"
		// 		clipRule="evenodd"
		// 		d="M5.25875 18.8263L1.25 14.8176V13.9338L5.25875 9.92505L6.1425 10.8088L3.20125 13.7513H18.75V15.0013H3.2L6.1425 17.9426L5.25875 18.8263ZM14.7413 10.0763L18.75 6.06755V5.1838L14.7413 1.17505L13.8575 2.0588L16.7987 5.00005H1.25V6.25005H16.8L13.8575 9.19255L14.7413 10.0763Z"
		// 	/>
		// </svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="w-[0.94rem] md:w-[1rem] h-fit"
			fill="none"
			viewBox="0 0 24 24"
			stroke="current"
			strokeWidth="2"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
			/>
		</svg>
	);
}
