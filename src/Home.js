import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import URLs from "./Settings";

export function Home() {

	const [courselist, setCourseList] = useState();

	useEffect(() => {
		facade
			.fetchData(URLs.Courses())
			//.then((data) => console.log(data));
			.then((data) => setCourseList(data));
	}, []);


	return (
		<div>
			<br />
			<h2>Top 10 highest rated movies right now!</h2>
			{courselist !== undefined &&
				courselist.courses.map((course) => {
					return (
						<div>
							<p><b>ID:</b> {course.id} <b>courseName: </b> {course.courseName} <b>description: </b>{course.description} <b>maxParticipants: </b> {course.maxParticipants} <b>price: </b> {course.price}</p>
							<table style={{border:"1px solid black", margin: "auto"}}>
								<thead>
									<tr>
										<th>id</th>
										<th>Course Time</th>
										<th>Room </th>
									</tr>
								</thead>
								<tbody>
									{course.classes.map((yogaclass) => {
										return (
											<tr>
												<td>{yogaclass.id}</td>
												<td>{yogaclass.courseTime}</td>
												<td>{yogaclass.room}</td>
											</tr>
										)
									})}
								</tbody>
							</table>
								<p>instructors: {course.instructors}</p>
						</div>
					);
				}
				)
			}
		</div>
	);
}
