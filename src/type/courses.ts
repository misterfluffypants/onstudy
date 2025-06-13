interface TypeCourse {
	id: any,
	name: string;
	type: string;
	price: string;
	image: string;
	categories: [
		{
			name: string,
			videos: [
				{
					name: string;
					videoImage: string;
					duration: number;
					UrlVideo: string;
				}
			]
		}
	],
}

export default TypeCourse;