import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TypeCourse from '../../../type/courses';
import arrowDown from '../../../images/arrowdown.svg';
import '../../../styles/pages/courses/course/page-course_media.css';
import '../../../styles/pages/courses/course/page-course.scss';

interface PageCourseProps {
	data: TypeCourse[];
}

function PageCourse({ data }: PageCourseProps) {
	const { id } = useParams<{ id: string }>();
	const [courseData, setCourseData] = useState<TypeCourse | null>(null);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [categoryVideosVisibility, setCategoryVideosVisibility] = useState<{ [key: string]: boolean }>({});

	useEffect(() => {
		const foundCourse = data.find(course => course.id === id);
		if (foundCourse) {
			setCourseData(foundCourse);
		} else {
			console.error(`Курс с идентификатором ${id} не найден.`);
		}
	}, [id, data]);

	const handleCategoryClick = (categoryName: string) => {
		setActiveCategory(prevCategory => prevCategory === categoryName ? null : categoryName);
		setCategoryVideosVisibility(prevState => ({
			...prevState,
			[categoryName]: !prevState[categoryName]
		}));
	};

	if (!courseData) {
		return <div className="loading"><h1>Loading...</h1></div>;
	}

	const totalVideosCount = courseData.categories.reduce((acc, category) => acc + category.videos.length, 0);

	return (
		<main className="page__course">
			<section className="page__course-main">
				<div className="container">
					<div className="row">
						<div className="page__course-main-left">
							<div className="page__course-main-left-card">
								<div className="page__course-main-left-card-box">
									<div className="page__course-main-left-card-left">
										<h2 className="page__course-main-left-card-name">{courseData.name}</h2>
										<p className="page__course-main-left-card-video-count">{`${totalVideosCount} Видео`}</p>
									</div>
									<div className="page__course-main-left-card-right">
										<img src={courseData.image} alt="" />
									</div>
								</div>
							</div>
						</div>

						<div className="page__course-main-right">
							<div className="category-list">
								{courseData.categories.map((category, index) => (
									<div key={index} className="category-item">
										<div className="page__course-main-right-button" onClick={() => handleCategoryClick(category.name)}>
											<div className="line"></div>
											<div className="page__course-main-right-button-box">
												<h2 className="category__name">{`${index + 1}. ${category.name}`}</h2>
												<div className="arrow__down">
													<img src={arrowDown} alt="arrow" />
												</div>
											</div>
										</div>

										<div className="videos__row" style={{ height: categoryVideosVisibility[category.name] ? 'auto' : '0', overflow: 'hidden' }}>
											{category.videos.map((video, vIndex) => (
												<div className="video" key={vIndex}>
													<iframe
														className="video__on-youtube"
														src={video.UrlVideo}
														title={video.name}
														width="560"
														height="315"
														allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
														allowFullScreen
													></iframe>
													<h4 className='video__name'>{`${index + 1}.${vIndex + 1} ${video.name}`}</h4>
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default PageCourse;
