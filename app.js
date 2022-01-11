const blogsLayout = document.querySelector(".main-body-blogs-layout");
const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const blogs = [
	{
		title: "Technical Analysis of Khonsari Ransomware Campaign Exploiting the LogShell Vulnerability",
		subtitle:
			"The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike",
		date: new Date(2021, 11, 30),
		image: "1.png",
	},
	{
		title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis nihil nostrum cumque est aliquam explicabo. Odit nobis nihil minus facilis ",
		subtitle:
			"The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike",
		date: new Date(2021, 11, 30),
		image: "2.png",
	},
	{
		title: "Technical Analysis of Khonsari Ransomware Campaign Exploiting the LogShell Vulnerability",
		subtitle:
			"The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike",
		date: new Date(2021, 11, 30),
		image: "3.png",
	},
	{
		title: "Technical Analysis of Khonsari",
		subtitle:
			"The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike",
		date: new Date(2021, 11, 30),
		image: "4.png",
	},
	{
		title: "Technical Analysis of Khonsari Ransomware Campaign Exploiting the LogShell Vulnerability",
		subtitle:
			"The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike",
		date: new Date(2021, 11, 30),
		image: "5.png",
	},
	{
		title: "Technical Analysis of Khonsari",
		subtitle:
			"The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike",
		date: new Date(2021, 11, 30),
		image: "1.png",
	},
];

blogs.forEach((blog) => {
	let Blog = document.createElement("div");
	Blog.className = "blog";
	let blogContainer = document.createElement("div");
	blogContainer.className = "blog-container";

	let blogImage = document.createElement("div");
	blogImage.className = "blog-image";
	blogImage.style.backgroundImage = `url('./images/${blog.image}')`;

	let blogContent = document.createElement("div");
	blogContent.className = "blog-content";

	let blogContentDate = document.createElement("div");
	blogContentDate.className = "blog-content-date";
	blogContentDate.innerHTML = `${
		monthNames[blog.date.getMonth()]
	} ${blog.date.getDate()} ${blog.date.getFullYear()}`;

	let blogContentTtite = document.createElement("div");
	blogContentTtite.className = "blog-content-title";
	blogContentTtite.innerHTML = blog.title;

	let blogContentSubtitle = document.createElement("blog-content-subtitle");
	blogContentSubtitle.className = "blog-content-subtitle";
	blogContentSubtitle.innerHTML = `${blog.subtitle.slice(0, 100)}...`;

	blogContent.appendChild(blogContentDate);
	blogContent.appendChild(blogContentTtite);
	blogContent.appendChild(blogContentSubtitle);

	let blogContinue = document.createElement("div");
	blogContinue.className = "blog-continue";
	let blogContinueLink = document.createElement("a");
	blogContinueLink.className = "blog-continue__link";
	blogContinueLink.setAttribute("href", `/blogs/${_.kebabCase(blog.title)}`);
	blogContinueLink.innerHTML = "Continue Reading";
	blogContinue.appendChild(blogContinueLink);

	blogContainer.appendChild(blogImage);
	blogContainer.appendChild(blogContent);
	blogContainer.appendChild(blogContinue);
	Blog.appendChild(blogContainer);
	blogsLayout.appendChild(Blog);
});

const fab = document.querySelector(".scroll-to-top");
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
	fab.style.display = window.scrollY > window.innerHeight ? "flex" : "none";
	header.style.position =
		window.scrollY > window.innerHeight ? "fixed" : "relative";
	header.style.boxShadow =
		window.scrollY > window.innerHeight ? "var(--shadow-3d)" : "none";
});
fab.addEventListener("click", () => {
	window.scrollTo(0, 0);
});
