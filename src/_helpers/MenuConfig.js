const MenuConfig = {
	header: {
		menuItem: [
			{
				id: 1,
				title: "Home",
				page: "/",
			},
			{
				id: 2,
				title: "About",
				page: "/about",
			},
			{
				id: 3,
				title: "Services",
				page: "/services",
			},
			{
				id: 4,
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
		services: [
			{
				id: 1,
				title: "Service One",
				page: "/",
			},
			{
				id: 2,
				title: "Service Two",
				page: "/",
			},
			{
				id: 3,
				title: "Service Three",
				page: "/",
			},
		],
	}
};

export default MenuConfig;
