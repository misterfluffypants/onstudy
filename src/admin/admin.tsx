import { useState, useEffect } from "react";
import axios from "axios";
import TypeCourse from "../type/courses";
import TypeUsers from "../type/users";
import './admin.scss'

interface Video {
	name: string;
	duration: string;
	url: string;
	image: string;
}

interface Category {
	name: string;
	videos: Video[];
}

interface Course {
	id: number;
	name: string;
	type: string;
	price: string;
	image: string;
	categories: Category[];
}

function generateUniqueId(): number {
	return Math.floor(Math.random() * Date.now());
}

function Admin() {
	const [users, setUsers] = useState<TypeUsers[]>([]);
	const [courses, setCourses] = useState<TypeCourse[]>([]);
	const [newCourse, setNewCourse] = useState<Course>({
		id: generateUniqueId(),
		name: "",
		type: "",
		price: "",
		image: "",
		categories: [{ name: "", videos: [{ name: "", duration: "", url: "", image: "" }] }]
	});

	useEffect(() => {
		fetchUsers();
		fetchCourses();
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await axios.get<TypeUsers[]>("http://localhost:8001/users");
			setUsers(response.data);
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	};

	const fetchCourses = async () => {
		try {
			const response = await axios.get<TypeCourse[]>("http://localhost:8000/courses");
			setCourses(response.data);
		} catch (error) {
			console.error("Error fetching courses:", error);
		}
	};

	const addCourse = async () => {
		try {
			await axios.post("http://localhost:8000/courses", newCourse);
			alert("Course added successfully!");

			setNewCourse({
				id: generateUniqueId(),
				name: "",
				type: "",
				price: "",
				image: "",
				categories: [{ name: "", videos: [{ name: "", duration: "", url: "", image: "" }] }]
			});

			fetchCourses();
		} catch (error) {
			console.error("Error adding course:", error);
		}
	};

	const addVideo = (categoryIndex: number) => {
		const updatedCategories = [...newCourse.categories];
		updatedCategories[categoryIndex].videos.push({ name: "", duration: "", url: "", image: "" });
		setNewCourse({ ...newCourse, categories: updatedCategories });
	};

	const deleteVideo = (categoryIndex: number, videoIndex: number) => {
		const updatedCategories = [...newCourse.categories];
		updatedCategories[categoryIndex].videos.splice(videoIndex, 1);
		setNewCourse({ ...newCourse, categories: updatedCategories });
	};

	const addCategory = () => {
		setNewCourse({
			...newCourse,
			categories: [...newCourse.categories, { name: "", videos: [{ name: "", duration: "", url: "", image: "" }] }]
		});
	};

	const deleteCategory = (categoryIndex: number) => {
		const updatedCategories = [...newCourse.categories];
		updatedCategories.splice(categoryIndex, 1);
		setNewCourse({ ...newCourse, categories: updatedCategories });
	};

	const deleteUser = async (id: number) => {
		try {
			await axios.delete(`http://localhost:8001/users/${id}`);
			setUsers(users.filter(user => user.id !== id));
		} catch (error) {
			console.error("Error deleting user:", error);
		}
	};

	const deleteCourse = async (id: number) => {
		try {
			await axios.delete(`http://localhost:8000/courses/${id}`);
			setCourses(courses.filter(course => course.id !== id));
		} catch (error) {
			console.error("Error deleting course:", error);
		}
	};

	return (
		<main className="admin">
			<div className="container">
				<h2 className="admin__title">Add Course:</h2>
				<div className="add__course-box">
					<input
						type="text"
						className="add__course-name input"
						placeholder="Course Name"
						value={newCourse.name}
						onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
					/>
					<input
						type="text"
						className="add__course-type input"
						placeholder="Type"
						value={newCourse.type}
						onChange={(e) => setNewCourse({ ...newCourse, type: e.target.value })}
					/>
					<input
						type="text"
						className="add__course-price input"
						placeholder="Price"
						value={newCourse.price}
						onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
					/>
					<input
						type="text"
						className="add__course-url-image input"
						placeholder="Image Link"
						value={newCourse.image}
						onChange={(e) => setNewCourse({ ...newCourse, image: e.target.value })}
					/>
					{newCourse.categories.map((category, categoryIndex) => (
						<div className="add__video-box" key={categoryIndex}>
							<h2 className="admin__title">Category {categoryIndex + 1}</h2>
							<input
								type="text"
								className="add__course-category-name input"
								placeholder="Category Name"
								value={category.name}
								onChange={(e) => {
									const updatedCategories = [...newCourse.categories];
									updatedCategories[categoryIndex].name = e.target.value;
									setNewCourse({ ...newCourse, categories: updatedCategories });
								}}
							/>
							{category.videos.map((video, videoIndex) => (
								<div key={videoIndex}>
									<h2 className="admin__title">Video {videoIndex + 1}</h2>
									<div className="add__new-video">
										<input
											type="text"
											className="add__course-video-name input"
											placeholder="Video Name"
											value={video.name}
											onChange={(e) => {
												const updatedCategories = [...newCourse.categories];
												updatedCategories[categoryIndex].videos[videoIndex].name = e.target.value;
												setNewCourse({ ...newCourse, categories: updatedCategories });
											}}
										/>
										<input
											type="text"
											className="add__course-video-duration input"
											placeholder="Duration"
											value={video.duration}
											onChange={(e) => {
												const updatedCategories = [...newCourse.categories];
												updatedCategories[categoryIndex].videos[videoIndex].duration = e.target.value;
												setNewCourse({ ...newCourse, categories: updatedCategories });
											}}
										/>
										<input
											type="text"
											className="add__course-video-url input"
											placeholder="Video URL"
											value={video.url}
											onChange={(e) => {
												const updatedCategories = [...newCourse.categories];
												updatedCategories[categoryIndex].videos[videoIndex].url = e.target.value;
												setNewCourse({ ...newCourse, categories: updatedCategories });
											}}
										/>
										<input
											type="text"
											className="add__course-video-image-url input"
											placeholder="Image Link"
											value={video.image}
											onChange={(e) => {
												const updatedCategories = [...newCourse.categories];
												updatedCategories[categoryIndex].videos[videoIndex].image = e.target.value;
												setNewCourse({ ...newCourse, categories: updatedCategories });
											}}
										/>
									</div>
									<button className="delete__video-btn delete" onClick={() => deleteVideo(categoryIndex, videoIndex)}>Delete Video</button>
								</div>
							))}
							<div className="add__new-video-btn">
								<button className="button" onClick={() => addVideo(categoryIndex)}>Add Video</button>
								<button className="button delete" onClick={() => deleteCategory(categoryIndex)}>Delete Category</button>
							</div>
						</div>
					))}
					<div className="add__category">
						<button className="button" onClick={addCategory}>Add Category</button>
						<button className="button" onClick={addCourse}>Add Course</button>
					</div>

				</div>
				<h2 className="admin__title">Users:</h2>
				<ul className="users">
					{users.map(user => (
						<li className="user" key={user.id}>
							<p className="user__name">{`${user.name}#${user.id}`}</p>
							<button className="delete__button" onClick={() => deleteUser(user.id)}>DELETE</button>
						</li>
					))}
				</ul>

				<h2 className="admin__title">Courses:</h2>
				<ul className="courses">
					{courses.map(course => (
						<li className="course" key={course.id}>
							<p className="course__name">{`${course.name}`}</p>
							<button className="delete__button" onClick={() => deleteCourse(course.id)}>DELETE</button>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}

export default Admin;
