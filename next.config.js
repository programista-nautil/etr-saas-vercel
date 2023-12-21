/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'localhost',
			'res.cloudinary.com',
			'github.com',
			'avatars.githubusercontent.com',
			'lh3.googleusercontent.com',
		],
	},
}

module.exports = nextConfig
