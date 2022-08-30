const MenuConfig = {
	header: {
		menuItem: [
			{
				id: 1,
				title: "Packages",
				page: "/packages",
			},
			{
				id: 2,
				title: "Travel Guides",
				page: "/guides",
			},
			{
				id: 3,
				title: "Contact",
				page: "/contact",
			},
		],
		socialPages: [
			{
				id: 1,
				title: "facebook",
				url: "#",
				icon: {
					header: "/images/facebook.svg",
					footer: "/images/facebook.webp",
				},
			},
			{
				id: 2,
				title: "twitter",
				url: "#",
				icon: {
					header: "/images/twitter.svg",
					footer: "/images/twitter.webp",
				},
			},
			{
				id: 3,
				title: "youtube",
				url: "#",
				icon: {
					header: "/images/youtube.svg",
					footer: "/images/youtube.webp",
				},
			},
			{
				id: 5,
				title: "reddit",
				url: "#",
				icon: {
					header: "/images/reddit.svg",
					footer: "/images/reddit.webp",
				},
			},
			{
				id: 6,
				title: "medium",
				url: "#",
				icon: {
					header: "/images/medium.svg",
					footer: "/images/medium.webp",
				},
			},
		],
	},
	footer: {
		quicklinks: [
			{
				id: 1,
				title: "Privacy Policy",
				page: "/privacy",
			},
			{
				id: 2,
				title: "Terms & Conditions",
				page: "/terms",
			},
			{
				id: 3,
				title: "Contact",
				page: "/contact",
			},
		],
		paymentMethods: [
			{
				id: 1,
				title: "Visa",
				logo: "/images/visa.png",
			},
			{
				id: 2,
				title: "Maestro",
				logo: "/images/maestro.png",
			},
			{
				id: 3,
				title: "Mpesa",
				logo: "/images/mpesa.svg",
			}
		]
	}
};

export default MenuConfig;
